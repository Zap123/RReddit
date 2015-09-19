import React from 'react'

export
default class Upvotes extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return ( < div >
            < center > ⬆ < /center> <p/ > {
                this.props.score
            } < p / >
            < center > ⬇ < /center>
            </div >
        )
    }
}
