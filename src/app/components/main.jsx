import React from 'react'
import ThreadList from './threadList.jsx'
import {RaisedButton, Dialog, AppBar, Styles}
from 'material-ui'

let ThemeManager = new Styles.ThemeManager(),
    Colors = Styles.Colors

export default class Main extends React.Component {

        static childContextTypes = {
            muiTheme: React.PropTypes.object
        }

        constructor(props) {
            super(props)
        }

        getChildContext() {
            return {
                muiTheme: ThemeManager.getCurrentTheme()
            }
        }

        componentWillMount() {
            ThemeManager.setPalette({
                accent1Color: Colors.deepOrange500
            })
        }

        render() {
            return ( 
                    <div>
                        <AppBar title = "ЯReddit" />
                        <ThreadList />
                        </div>
                   )
        }
}
