let React = require('react');
import {List, ListItem, ListDivider, Avatar} from 'material-ui';
let Story = require('./story.jsx'); // Our custom react component

let ThreadItem = React.createClass({

  render() {
    let thread = this.props.data.data,
      date = new Date((thread.created_utc * 1000)),
      secondaryText = `${thread.subreddit}  ${thread.author}  ${thread.created_utc} ${thread.num_comments} comments`

    return (
      <ListItem onTouchTap={this.openStory}
        primaryText={<Story thumbnail={thread.thumbnail}
        title={thread.title}
        subtitle={secondaryText}
        score={thread.score} />}
        />
    );
  },

  openStory() {
    location.href = this.props.data.data.url
  }
});

module.exports = ThreadItem;
