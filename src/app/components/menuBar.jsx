let React = require('react');
import {AppBar} from 'material-ui';

let MenuBar = React.createClass({render() {
    return (
      <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more" title="RRRReddit!"/>
    );
  }
});

module.exports = MenuBar;
