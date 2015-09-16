let React = require('react');
import {List, ListItem, ListDivider, Avatar} from 'material-ui';
let Thumbnail = require('./thumbnail.jsx'); // Our custom react component
let Upvotes = require('./upvote.jsx'); // Our custom react component

let ThreadItem = React.createClass({render() {
    let thread = this.props.data.data,
        styles = {display:'flex','alignItems':'center',padding:'4px'},
        date = new Date((thread.created_utc*1000)),
        secondaryText = `${thread.subreddit}  ${thread.author}  ${thread.created_utc} ${thread.num_comments} comments`

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
