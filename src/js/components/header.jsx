import React from 'react'

import ColourPickers from './colour-pickers.jsx'

const Header = ({ onColourChange, palette }) => {
    return (
        <header className="p3">
            <ColourPickers onColourChange={onColourChange} palette={palette} />
        </header>
    )
}

export default Header
