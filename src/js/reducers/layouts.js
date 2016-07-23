import {
    MAXIMISE_LAYOUT,
    MINIMISE_LAYOUT,
    TOGGLE_SIDEBAR,
    TOGGLE_HELP,
    TOGGLE_EXPORT
}
from '../constants/action-types'

const initialState = {
    numberOfLayouts: 6,
    maximisedLayout: null,
    sidebarExpanded: true,
    helpExpanded: false,
    exportExpanded: false
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
        case TOGGLE_HELP:
            return Object.assign({}, state, {
                helpExpanded: !state.helpExpanded
            })
        case TOGGLE_EXPORT:
            return Object.assign({}, state, {
                exportExpanded: !state.exportExpanded
            })
        default:
            return state
    }
}
