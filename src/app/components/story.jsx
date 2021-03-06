import React from 'react'
import Thumbnail from './thumbnail.jsx'
import Upvotes from './upvote.jsx'
import {FlatButton} from 'material-ui'

export default class Story extends React.Component {

    constructor(props) {
        super(props)
    }

    openComments(permalink) {
        window.open('https://reddit.com' + permalink, '_blank')
    }

    render() {
        let storyStyle = {
                display: 'flex',
                padding: '4px',
                alignItem: 'center'
        },
            infoStyle = {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: '1'
            }
        
        return ( 
                <div style = {storyStyle}>
                    <Upvotes score = {this.props.score} />
                    <Thumbnail src = {this.props.thumbnail} />
                    <div style = {infoStyle}>
                        <em> 
                            {this.props.title} 
                        </em>
                    <p>
                        {this.props.subtitle}
                    </p>
                        <div>
                            <FlatButton 
                                primary = {true} 
                                label = {this.props.comments.text}
                                onTouchTap = {(e) =>
                                    {
                                        //prevent from firing parent event
                                        e.stopPropagation(),
                                        this.openComments(this.props.comments.url)
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
               )
    }
}
