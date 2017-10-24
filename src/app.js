import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Top from './components/Top'
import Settings from './components/Settings'
import store from './redux/createStore'

const customHistory = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
        <Switch>
        <Route exact path="/" component={Top}/>
        <Route path="/settings" component={Settings} />
        </Switch>
    </Router>
  </Provider>,
document.getElementById('app'))