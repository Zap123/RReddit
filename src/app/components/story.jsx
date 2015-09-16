let React = require('react');
let Thumbnail = require('./thumbnail.jsx'); // Our custom react component
let Upvotes = require('./upvote.jsx'); // Our custom react component
let Story = React.createClass({render() {
    let styles = {
      display: 'flex',
      padding: '4px',
      alignItem: 'center'
    }

    let styles2 = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex:'1'
    }

    return (
      <div style={styles}>
        <Upvotes score={this.props.score}/>
        <Thumbnail src={this.props.thumbnail}/>
        <div style={styles2}>
          <em>{this.props.title}</em>
          <p>{this.props.subtitle}</p>
        </div>

      </div>
    )
  }

})

module.exports = Story;
