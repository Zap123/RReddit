let React = require('react');
import {List, ListItem, ListDivider, Avatar} from 'material-ui';
let Thumbnail = require('./thumbnail.jsx'); // Our custom react component
let Upvotes = require('./upvote.jsx'); // Our custom react component

let ThreadItem = React.createClass({render() {
    let thread = this.props.data.data,
        styles = {display:'flex','alignItems':'center',padding:'4px'},
        secondaryText = `submitted ${thread.created_utc} by ${thread.author} to ${thread.subreddit} `

    return (
      <div style={styles}>
        <Upvotes score={thread.score}/>
          <Thumbnail src={thread.thumbnail}/>
        <div style={{flex:'1'}}>
          <ListItem  primaryText={thread.title} secondaryText={secondaryText} />
          </div>
        <ListDivider/>
      </div>
    );
  }
});

module.exports = ThreadItem;
