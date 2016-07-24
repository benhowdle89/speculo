import {
    MAXIMISE_LAYOUT,
    MINIMISE_LAYOUT,
    TOGGLE_SIDEBAR,
    TOGGLE_HELP,
    TOGGLE_EXPORT,
    HELP_SEEN
}
from '../constants/action-types'

const initialState = {
    numberOfLayouts: 6,
    maximisedLayout: null,
    sidebarExpanded: true,
    helpExpanded: false,
    exportExpanded: false,
    helpSeen: localStorage.getItem('helpSeen')
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
        case HELP_SEEN:
            return Object.assign({}, state, {
                helpSeen: true,
                helpExpanded: false
            })
        default:
            return state
    }
}
