let React = require('react');
let request = require('superagent');
let ThreadItem = require('./threadItem.jsx'); // Our custom react component
import {List, ListItem, ListDivider} from 'material-ui';

let ThreadList = React.createClass({getInitialState() {
    return {
      data: []
    };
  },
  componentDidMount() {
    request.get('https://www.reddit.com/.json').end(function(err, res) {
      this.setState({
        data: res.body.data.children
      });
    }.bind(this));
  },
  render() {
    let thread = this.state.data.map(function(item, index) {
      return (
        <ThreadItem data={item} key={index}/>
      );
    });
    return (
      <List>{thread}</List>
    );
  }
});

module.exports = ThreadList;
