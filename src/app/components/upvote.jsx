let React = require('react');

let Upvotes = React.createClass({
  render() {
      return (
        <div>
          <center>⬆</center> <p/>
          {this.props.score}<p/>
          <center>⬇</center>
        </div>
      )
}
});

module.exports = Upvotes
