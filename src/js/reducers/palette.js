import {
    COLOUR_CHANGE
}
from '../constants/action-types'

const initialState = {
    bodyBackgroundColour: '#ffffff',
    bodyTextColour: '#023161',
    primaryButtonBackgroundColour: '#008cdd',
    primaryButtonTextColour: '#ffffff',
    secondaryButtonBackgroundColour: '#f7f7f7',
    secondaryButtonTextColour: '#333333',
    headingTextColour: '#333333',
    secondaryHeadingTextColour: '#5a748e'
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
