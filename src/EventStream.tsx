import React, { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import HistoryIcon from '@material-ui/icons/History'
import ErrorIcon from '@material-ui/icons/Error'
import DeviceHubIcon from '@material-ui/icons/DeviceHub'
import NotesIcon from '@material-ui/icons/Notes'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Octokit from '@octokit/rest';
import moment from 'moment';
import { GithubEvent, PullRequest, Issue } from './Events';
import { ListItemAvatar, Typography, Link, Tooltip } from '@material-ui/core';

async function fetchEvents(user: string, f: CallableFunction) {
    const octokit = new Octokit()
    const args = {
        username: user,
        per_page: 30,
        page: 1
    }
    try {
        const result = await octokit.activity.listEventsForUser(args)
        f(result.data)
    } catch {
        f('error')
    }
}

const titleCase = (s: string) =>
    s.split(' ')
        .map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
        .join(' ')

const comment = (body: string) => {
    return <Typography component="span" style={{ display: 'inline' }} color="textSecondary">
        {body.substring(0, 200)}{body.length > 200 ? '...' : ''}
    </Typography>
}

const link = (text: string | number, url: string) => {
    return <Link href={url}>{text}</Link>
}

const repo = (e: GithubEvent) => {
    return link(e.repo.name, e.repo.url)
}

const reference = (i: PullRequest | Issue, url?: string) => {
    return <>"{i.title}" (#{link(i.number, url || i.html_url)})</>
}


const getEventText = (e: GithubEvent) => {
    switch (e.type) {
        case "WatchEvent":
            return <>Started watching {repo(e)}</>
        case "CommitCommentEvent":
            return <>{repo(e)} - Commented on commit #: {comment(e.payload.comment.body)}</>
        case "IssueCommentEvent":
            return <>{repo(e)} - Commented on issue {reference(e.payload.issue, e.payload.comment.html_url)}: {comment(e.payload.comment.body)}</>
        case "IssuesEvent":
            return <>{repo(e)} - {titleCase(e.payload.action)} issue {reference(e.payload.issue)}</>
        case "PullRequestReviewCommentEvent":
            return <>{repo(e)} - Commented on pull request {reference(e.payload.pull_request, e.payload.comment.html_url)}: {comment(e.payload.comment.body)}</>
        case "GollumEvent":
            const p = e.payload.pages[0]
            return <>{repo(e)} - {titleCase(p.action)} a wiki page "{link(p.page_name, p.html_url)}"</>
        case "PushEvent":
            const c = e.payload.commits
                .filter(c => c.distinct)
                .map((c, i) => <li key={i}>{comment(c.message)}</li>)
            return <>{repo(e)} - Pushed {c.length} commits: <ul>{c}</ul></>
        default: return <>{repo(e)} - {e.type}</>
    }
}

const getEventAvatar = (e: GithubEvent) => {
    const green = { color: "#34ce57" }
    const red = { color: "#cb2431" }
    const purple = { color: "#6f42c1" }
    switch (e.type) {
        case "WatchEvent": return <WatchLaterIcon />
        case "CommitCommentEvent": return <HistoryIcon />
        case "IssueCommentEvent":
        case "IssuesEvent": return <ErrorIcon style={green} />
        case "PullRequestReviewCommentEvent": return <DeviceHubIcon style={purple} />
        case "GollumEvent": return <NotesIcon />
        case "PushEvent": return <CloudUploadIcon />
        default: return <ImageIcon />
    }
}

const EventItem = ({ event }: { event: GithubEvent }) => {
    const main = getEventText(event)
    const time = moment(event.created_at)
    const sub = <span title={time.format("dddd, MMMM Do, h:mm a")}>{time.fromNow()}</span>
    const avatar = getEventAvatar(event)
    return <ListItem alignItems="flex-start" onClick={() => console.log(event)}>
        {avatar}
        <ListItemText primary={main} secondary={sub} />
    </ListItem>
}

export function EventStream({ username }: { username: string }) {
    const [events, setEvents] = useState<Array<GithubEvent> | 'error' | 'loading'>('loading');

    useEffect(() => {
        fetchEvents(username, setEvents)
    }, []);


    if (events == 'loading') {
        return <div>Loading</div>
    } else if (events == 'error') {
        return <div>Error</div>
    } else {
        return <List style={{ width: '75%' }}>
            {events.map((e, i) => <EventItem event={e} key={i} />)}
        </List>
    }
}