import {DynamicModuleLoader} from 'redux-dynamic-modules-react'
import {routeModule} from './store'
import Routes from './routes'
import store from './store'
import navigationModule from './module/RouterModule/index';

import * as React from 'react'

const DynamicRoutes = () => {
	return (
		<DynamicModuleLoader
			modules={[routeModule(),navigationModule()]}
		>
			<Routes history={store.history} />
		</DynamicModuleLoader>
	)
}

export default DynamicRoutes
