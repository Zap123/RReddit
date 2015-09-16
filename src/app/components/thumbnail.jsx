let React = require('react');

let Thumbnail = React.createClass({render() {
    let src = this.props.src
    let isImg = true
    if (!src || src === 'self' || src === 'nsfw') {
      isImg = false
    }
    let size = 100

    let styles = {
      height: size,
      width: size,
      borderRadius: '10px',
    }

    if (isImg) {
      return (
        <img style={styles} src={src}/>
      )
    } else {
      return false
    }
  }
});

module.exports = Thumbnail
