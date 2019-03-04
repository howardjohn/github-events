import React, { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import Octokit from '@octokit/rest';
import moment from 'moment';
import GithubEvent from './Events';
import { ListItemAvatar } from '@material-ui/core';

async function fetchEvents(f: CallableFunction) {
    const octokit = new Octokit()
    const args = {
        username: "howardjohn",
        per_page: 10,
        page: 1
    }
    const result = await octokit.activity.listEventsForUser(args)
    f(result.data)
}

const getEventText = (e: GithubEvent) => {
    switch (e.type) {
        case "WatchEvent": return <>{`Started watching ${e.repo.name}`}</>
        default: return <>{`${e.type} - ${e.repo.name}`}</>
    }
}

const getEventAvatar = (e: GithubEvent) => {
    switch (e.type) {
        case "WatchEvent": return <WatchLaterIcon />
        default: return <ImageIcon />
    }
}

const EventItem = ({ event }: { event: GithubEvent }) => {
    const main = getEventText(event)
    const sub = moment(event.created_at).fromNow()
    const avatar = getEventAvatar(event)
    return <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar>
                {avatar}
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={main} secondary={sub} />
    </ListItem>
}

export function EventStream() {
    const [events, setEvents] = useState<Array<GithubEvent> | null>(null);

    useEffect(() => {
        fetchEvents(setEvents)
    }, []);


    if (events == null) {
        return <div>Loading</div>
    } else if (!events) {
        return <div>Error</div>
    } else {
        return <List style={{ width: '75%' }}>
            {events.map((e, i) => <EventItem event={e} key={i} />)}
        </List>
    }
}