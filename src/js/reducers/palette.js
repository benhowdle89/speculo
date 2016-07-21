import {
    COLOUR_CHANGE
}
from '../constants/action-types'

const initialState = {
    bodyBackgroundColour: '#000000',
    primaryButtonColour: '#000000',
    secondaryButtonColour: '#ffffff',
    headingTextColour: '#000000',
    secondaryHeadingTextColour: '#333333',
    bodyTextColour: '#f7f7f7'
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
