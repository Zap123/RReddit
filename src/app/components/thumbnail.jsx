import React from 'react'

export default class Thumbnail extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let src = this.props.src,
            isImg = true,
            size = 80

        if (!src || src === 'self' || src === 'nsfw'|| src ==='default') {
            isImg = false
        }

        let styles = {
          height: size,
          width: size,
          borderRadius: '15px',
          userSelect: 'none',
          userDrag: 'none',
          marginLeft: '15px',
          marginRight: '15px'
        }

        return (
            <div>
                {
                    isImg ? <img src={src} style={styles}/> :
                            <span style={{marginLeft: '15px'}}></span>
                }
            </div>
        )
    }
}
