import React      from 'react'
import request    from 'superagent'
import ThreadItem from './threadItem.jsx'
import { List, ListItem, ListDivider } from 'material-ui';

export default class ThreadList extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        request.get('https://www.reddit.com/.json').end((err, res) => {
            this.setState({
                data: res.body.data.children
            })
        })
    }

    render() {
        return (
            <List>
                {
                    this.state.data.map(function(item, index) {
                        return <ThreadItem data={item} key={index}/>
                    })
                }
            </List>
        )
    }

}
