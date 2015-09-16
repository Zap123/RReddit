let React = require('react');
import {List, ListItem, ListDivider, Avatar} from 'material-ui';
let Thumbnail = require('./thumbnail.jsx'); // Our custom react component

let ThreadItem = React.createClass({render() {
    let thread = this.props.data.data,
        styles = {display:'flex','alignItems':'center',padding:'4px'},
        secondaryText = `submitted ${thread.created_utc} by ${thread.author} to ${thread.subreddit} `

    return (
      <div>
          <ListItem leftAvatar={<Thumbnail src={thread.thumbnail}/>} primaryText={thread.title} secondaryText={secondaryText} />
        <ListDivider/>
      </div>
    );
  }
});

module.exports = ThreadItem;
