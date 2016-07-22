import React from 'react'

import ColourPickers from './colour-pickers.jsx'

const styles = {
    header: {
        boxShadow: '1px 0 1px rgba(5,30,50,.2)',
        height: '100vh'
    }
}

const Header = ({ onColourChange, palette }) => {
    return (
        <header className="col-2 fixed" style={styles.header}>
            <ColourPickers onColourChange={onColourChange} palette={palette} />
        </header>
    )
}

export default Header
