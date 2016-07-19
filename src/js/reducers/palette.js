import {
    COLOUR_CHANGE
}
from '../constants/action-types'

const initialState = {
    buttonColour: '#000000',
    accentColour: '#000000',
    bodyBackgroundColour: '#ffffff',
    secondaryBackgroundColour: '#000000',
    textColour: '#f7f7f7',
    headingColour: '#333333'
}

export default function paletteState(state = initialState, action) {
    switch (action.type) {
        case COLOUR_CHANGE:
            return Object.assign({}, state, {
                [action.paletteItem]: action.value
            })
        default:
            return state
    }

}
