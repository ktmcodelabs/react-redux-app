import { combineReducers } from 'redux'
import click from "./clickReducer"

const reducers =  combineReducers({
    click:click
})

export default reducers