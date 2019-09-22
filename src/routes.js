import React from 'react'
import {ConnectedRouter} from 'connected-react-router'
import {Route, Switch} from 'react-router-dom'
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

const routes = [
	{
		key: 'register',
		path: '/register',
		// private: true,
		component: React.lazy(() => import('./components/Register'))
	},
	{
		key: 'main',
		path: '/main',
		// private: true,
		component: React.lazy(() => import('./components/Main'))
	},
	{
		key: 'complaint',
		path: '/complaint',
		// private: true,
		component: React.lazy(() => import('./components/Main'))
	}
]

function Routes({history}) {
	return (
		<React.Fragment>
			<ConnectedRouter history={history}>
				<Layout>
					<React.Suspense fallback={<Loading overlay />}>
						<Switch>
							{routes.map(route =>
									<Route {...route} />

							)}
							<Route component={NotFound} />
						</Switch>
					</React.Suspense>
				</Layout>
			</ConnectedRouter>
		</React.Fragment>
	)
}

export default Routes
