import React from 'react'
import Reddit from '../utils/redditAPI.js'
import ThreadItem from './threadItem.jsx'
import {
    List, ListItem, ListDivider
}
from 'material-ui';

export
default class ThreadList extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                data: []
            }
        }

        componentDidMount() {
            Reddit.getHome().then((obj) => {
                this.setState(obj)
            })
        }

        render() {
                return ( < List > {
                            this.state.data.map((item, index) => {
                                    return <ThreadItem data = {
                                        item
                                    }
                                    key = {
                                        index
                                    }
                                    />
                    })
                }
            </List >
                                )
                            }

                        }
