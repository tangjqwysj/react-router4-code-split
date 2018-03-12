import React from 'react'
import {Route, Switch} from 'react-router-dom'
import asyncComponent from './AsyncComponent'
import createBrowserHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

const history = createBrowserHistory()
const App = asyncComponent(() => import('./page/App'))
const getAboutPage = asyncComponent(() => import('./page/About'))
const getHomePage = asyncComponent(() => import('./page/Home'))
const getNotFoundPage = asyncComponent(() => import('./page/NotFound'))
const getCounterPage = asyncComponent(() => import('./page/Counter'))

const Routes = () => (
	<ConnectedRouter history={history}>
			<div>
				<App />
				<Switch>
					<Route path='/home' component={getHomePage} />
					<Route path='/about' component={getAboutPage} />
					<Route path='/counter' component={getCounterPage} />
					<Route component={getNotFoundPage} />
				</Switch>
			</div>
	</ConnectedRouter>
)

export default Routes
