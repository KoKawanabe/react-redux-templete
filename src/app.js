import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  Router,
  Route,
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Top from './components/Top'
import store from './redux/createStore'

const customHistory = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
        <Route path="/" component={Top} />
    </Router>
  </Provider>,
document.getElementById('app'))