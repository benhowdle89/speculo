import {
    MAXIMISE_LAYOUT,
    MINIMISE_LAYOUT
}
from '../constants/action-types'

const initialState = {
    numberOfLayouts: 6,
    maximisedLayout: null
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
        default:
            return state
    }
}
