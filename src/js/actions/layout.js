import * as types from '../constants/action-types'

export function maximiseLayout(index) {
    return {
        type: types.MAXIMISE_LAYOUT,
        index
    }
}

export function minimiseLayout() {
    return {
        type: types.MINIMISE_LAYOUT
    }
}
