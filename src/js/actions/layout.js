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

export function toggleSidebar() {
    return {
        type: types.TOGGLE_SIDEBAR
    }
}

export function toggleHelp() {
    return {
        type: types.TOGGLE_HELP
    }
}

export function toggleExport() {
    return {
        type: types.TOGGLE_EXPORT
    }
}

export function helpSeen() {
    localStorage.setItem('helpSeen', true)
    return {
        type: types.HELP_SEEN
    }
}

export function changeFont(font) {
    return {
        type: types.CHANGE_FONT,
        font
    }
}
