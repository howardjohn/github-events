import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Octokit from '@octokit/rest';
import moment from 'moment';

async function fetchEvents(f: CallableFunction) {
    const octokit = new Octokit()
    const args = {
        username: "howardjohn",
        per_page: 10,
        page: 1
    }
    const result = await octokit.activity.listEventsForUser(args)
    f(result)
}

interface EventsReponse {
    data: Array<EventResponse>
}

interface EventResponse {
    id: string,
    type: string,
    repo: {
        name: string
    },
    created_at: string
}

const Event = ({ event }: {event: EventResponse}) => {
    const main = `${event.type} - ${event.repo.name}`
    const sub = moment(event.created_at).fromNow()
    return <ListItem>
        <Avatar>
            <ImageIcon />
        </Avatar>
        <ListItemText primary={main} secondary={sub} />
    </ListItem>
}

export function EventStream() {
    const [events, setEvents] = useState<EventsReponse | null>(null);

    useEffect(() => {
        fetchEvents(setEvents)
    }, []);


    if (events == null) {
        return <div>Loading</div>
    } else if (!events.data) {
        return <div>Error</div>
    } else {
        return <List>
            {events.data.map((e, i) => <Event event={e} key={i} />)}
        </List>
    }
}