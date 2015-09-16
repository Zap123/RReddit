import React     from 'react'
import Thumbnail from './thumbnail.jsx'
import Upvotes   from './upvote.jsx'

export default class Story extends React.Component {

    render() {
        let itemStyle = {
          display: 'flex',
          padding: '4px',
          alignItem: 'center'
        }

        let infoStyle = {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex:'1'
        }

        return (
          <div style={itemStyle}>
            <Upvotes score={this.props.score}/>
            <Thumbnail src={this.props.thumbnail}/>
            <div style={infoStyle}>
              <em>{this.props.title}</em>
              <p>{this.props.subtitle}</p>
            </div>

          </div>
        )
    }
}
