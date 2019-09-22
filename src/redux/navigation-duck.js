import {all, put, takeLatest, select} from 'redux-saga/effects'
import {push} from 'connected-react-router'
import {success} from 'redux-saga-requests'
import {createSelector} from 'reselect'

const NAVIGATE_OUTSIDE = `NAVIGATE_OUTSIDE`
const CHANGE_LOCAL_LOCATION = 'NAVIGATION_INSIDE/CHANGE_LOCAL_LOCATION'

export const types={
    NAVIGATE_OUTSIDE,
    CHANGE_LOCAL_LOCATION
}

export const actions = {
    changeLocation(newLocation) {
        console.log(newLocation)
        return {
            type: types.CHANGE_LOCAL_LOCATION,
            payload: {newLocation}
        }
    }
}

const initialState = {
    navigationLocation:'main'
}

export const reducers = {
    [types.CHANGE_LOCAL_LOCATION]: (_, {payload}) => ({
        navigationLocation: payload.newLocation
    }),

}

const navigationNamespaceStateSelector = state => state['Navigation'] || initialState

export const currentLocation = createSelector(
    navigationNamespaceStateSelector,
    state => state.navigationLocation
)

export const selectors={
    currentLocation
}

/** Saga shoots when only localTabs loaded - not the RelatedTabs, which means
 * that we are not in the project-card module  */
const navigateLocaly = function*() {
    const location = yield select(selectors.currentLocation)
    yield push(location)
}

const watcher = function*() {
    yield all([
        takeLatest(types.CHANGE_LOCAL_LOCATION,navigateLocaly)
    ])
}

const sagas = {
    navigateLocaly
}

export default {
    id: 'Navigation',
    reducerMap: {
        ['Navigation']: (state = initialState, action) => ({
            ...state,
            ...(reducers[action.type] && reducers[action.type](state, action))
        })
    },
    sagas: [watcher],
    initialActions: [actions.changeLocation('main')]
}
