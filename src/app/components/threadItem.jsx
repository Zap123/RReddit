let React = require('react');
import {List, ListItem, ListDivider, Avatar} from 'material-ui';
let Story = require('./story.jsx'); // Our custom react component

let ThreadItem = React.createClass({render() {
    let thread = this.props.data.data,
      date = new Date((thread.created_utc * 1000)),
      secondaryText = `${thread.subreddit}  ${thread.author}  ${thread.created_utc} ${thread.num_comments} comments`

    return (
      <ListItem primaryText={
          <Story thumbnail={thread.thumbnail}
            title={thread.title}
            subtitle={secondaryText}
            score={thread.score} />}
            />
    );
  }
});

module.exports = ThreadItem;
