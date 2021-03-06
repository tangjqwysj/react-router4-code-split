import React from 'react'
import {Route, Switch} from 'react-router-dom'
import asyncComponent from './AsyncComponent'
import Loadable from 'react-loadable'
import createBrowserHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

const history = createBrowserHistory()
const App = asyncComponent(() => import(/* webpackChunkName: "App" */'./page/App'))
// const getAboutPage = asyncComponent(() => import(/* webpackChunkName: "About" */'./page/About'))
const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: "About" */'./page/About'),
  loading() {
		console.log('hahah')
		return <div>dudu..</div>
  }
})
const getHomePage = asyncComponent(() => import(/* webpackChunkName: "Home" */'./page/Home'))
const getNotFoundPage = asyncComponent(() => import(/* webpackChunkName: "403" */'./page/NotFound'))
const getCounterPage = asyncComponent(() => import(/* webpackChunkName: "Counter" */'./page/Counter'))

const Routes = () => (
	<ConnectedRouter history={history}>
			<div>
				<App />
				<Switch>
					<Route path='/home' component={getHomePage} />
					<Route path='/about' component={LoadableAbout} />
					<Route path='/counter' component={getCounterPage} />
					<Route component={getNotFoundPage} />
				</Switch>
			</div>
	</ConnectedRouter>
)

export default Routes
