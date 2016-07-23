import {
    MAXIMISE_LAYOUT,
    MINIMISE_LAYOUT,
    TOGGLE_SIDEBAR
}
from '../constants/action-types'

const initialState = {
    numberOfLayouts: 6,
    maximisedLayout: null,
    sidebarExpanded: true
}

export default function layoutsState(state = initialState, action) {
    switch (action.type) {
        case MAXIMISE_LAYOUT:
            return Object.assign({}, state, {
                maximisedLayout: action.index
            })
        case MINIMISE_LAYOUT:
            return Object.assign({}, state, {
                maximisedLayout: null
            })
        case TOGGLE_SIDEBAR:
            return Object.assign({}, state, {
                sidebarExpanded: !state.sidebarExpanded
            })
        default:
            return state
    }
}
