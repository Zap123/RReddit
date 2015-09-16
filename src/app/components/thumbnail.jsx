let React = require('react');

let Thumbnail = React.createClass({render() {
    let src = this.props.src
    let isImg = true
    if (!src || src === 'self' || src === 'nsfw') {
      isImg = false
    }
    let size = 80

    let styles = {
      height: size,
      width: size,
      borderRadius: '30px',
      padding:'20px'
    }

    if (isImg) {
      return (
          <div><img style={styles} src={src}/></div>
      )
    } else {
      return false
    }
  }
});

module.exports = Thumbnail
