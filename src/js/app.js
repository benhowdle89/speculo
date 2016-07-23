import React, { PropTypes } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
const loggerMiddleware = createLogger()

import reducers from './reducers/'

const createStoreWithMiddleware = applyMiddleware(
        loggerMiddleware
)(createStore)

const reducer = combineReducers(Object.assign({}, reducers))

import Index from './containers/index.jsx'
const store = createStoreWithMiddleware(reducer)

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}

export default App
