import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './App.css';

import {clickAction} from './actions'

class App extends Component {

    render() {
        let text = this.props.click.clicked ? "Clicked!" : "Click Me!"
        return (
            <div className="App">
                <h1 onClick={e => this.props.clickAction(!this.props.click.clicked)}>{text}</h1>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        ...state
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        clickAction
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)
