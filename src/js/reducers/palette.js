import {
    COLOUR_CHANGE
}
from '../constants/action-types'

const paletteItems = [
    'bodyBackgroundColour',
    'bodyTextColour',
    'primaryButtonBackgroundColour',
    'primaryButtonTextColour',
    'secondaryButtonBackgroundColour',
    'secondaryButtonTextColour',
    'headingTextColour',
    'secondaryHeadingTextColour'
]

const defaultColours = ['#ffffff', '#023161', '#008cdd', '#ffffff', '#f7f7f7', '#333333', '#333333', '#5a748e'].reduce((accum, current, index) => {
    return Object.assign({}, accum, {
        [paletteItems[index]]: current
    })
}, {})

const URLHasHash = () => {
    return window.location.hash && window.location.hash.match(/palette/)
}

const getColoursFromURL = () => {
    let paletteInURL = window.location.hash.match(/palette=(.+)/)
    if(!paletteInURL){
        return defaultColours
    }
    let colours = paletteInURL[1].split('-')
    if(colours.length !== Object.keys(defaultColours).length){
        return defaultColours
    }
    return colours.reduce((accum, current, index) => {
        return Object.assign({}, accum, {
            [paletteItems[index]]: `#${current}`
        })
    }, {})
}

const initialState = URLHasHash() ? getColoursFromURL() : defaultColours

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
