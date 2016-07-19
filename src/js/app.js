import React, { PropTypes } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/'

const reducer = combineReducers(Object.assign({}, reducers))

import Index from './containers/index.jsx'
const store = createStore(reducer)

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
