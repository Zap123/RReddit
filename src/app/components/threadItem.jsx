import React from 'react'
import Story from './story.jsx'
import {List, ListItem, ListDivider, FlatButton} from 'material-ui'

export default class ThreadItem extends React.Component {
        constructor(props) {
            super(props)
        }

        openStory() {
            window.open(this.props.data.data.url, '_blank')
        }

        render() {
            let thread = this.props.data.data,
                permalink = thread.permalink,
                date = new Date((thread.created_utc * 1000)),
                secondaryText = `${thread.subreddit} ${thread.author} 
                                 ${thread.created_utc} ago`,
                comments = `${thread.num_comments} comments`

            return ( 
                    <ListItem 
                        onTouchTap = {() => this.openStory()}
                        primaryText = {
                            <Story thumbnail = {thread.thumbnail}
                            title = {thread.title}
                            subtitle = {secondaryText}
                            comments = {
                                {
                                    text: comments,
                                    url: permalink
                                }
                            }
                            score = {thread.score}
                            />
                        } 
                    />
                )
        }
}
