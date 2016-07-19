import * as types from '../constants/action-types'

export function changeColour(paletteItem, value) {
    return {
        type: types.COLOUR_CHANGE,
        value,
        paletteItem
    }
}
