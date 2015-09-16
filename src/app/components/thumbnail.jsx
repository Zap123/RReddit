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
      borderRadius: '15px',
      marginLeft: '15px',
      marginRight: '15px'
    }

    if (isImg) {
      return (
        <div><img src={src} style={styles}/></div>
      )
    } else {
      return <span style={{
          marginLeft: '15px'
        }}></span>
    }
  }
});

module.exports = Thumbnail
