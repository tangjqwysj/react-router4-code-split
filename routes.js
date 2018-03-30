import React from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponent from './AsyncComponent'
import createBrowserHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

const history = createBrowserHistory()
const App = asyncComponent(() => import(/* webpackChunkName: "App" */ './page/App'))
const getAboutPage = asyncComponent(() => import(/* webpackChunkName: "About" */ './page/About'))
const getHomePage = asyncComponent(() => import(/* webpackChunkName: "Home" */ './page/Home'))
const getNotFoundPage = asyncComponent(() => import(/* webpackChunkName: "403" */ './page/NotFound'))
const getCounterPage = asyncComponent(() => import(/* webpackChunkName: "Counter" */ './page/Counter'))

const Routes = () => (
	<ConnectedRouter history={history}>
		<div>
			<App />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/home' component={getHomePage} />
				<Route path='/about' component={getAboutPage} />
				<Route path='/counter' component={getCounterPage} />
				<Route component={getNotFoundPage} />
			</Switch>
		</div>
	</ConnectedRouter>
)

export default Routes
