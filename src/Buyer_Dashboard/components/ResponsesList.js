import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import { useStyles } from './Main'
import Main from './Main';

export class ResponsesList extends Component {
    render() {
        const { quotID } = this.props
        return (
            <Main>
                <Paper className={useStyles.root}>
                    <h1>LIST for the request N°{quotID}</h1>
                </Paper>
            </Main>
        )
    }
}

export default ResponsesList
