import React from 'react'

import ColourPickers from './colour-pickers.jsx'
import Logo from './logo.jsx'

const styles = {
    header: {
        boxShadow: '1px 0 1px rgba(5,30,50,.2)',
        height: '100vh',
        backgroundColor: '#ffffff'
    },
    contractedHeader: {
        width: '12px',
        height: '90vh',
        backgroundColor: '#25354b',
        cursor: 'pointer',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
        transition: 'padding .2s',
        overflow: 'hidden',
        marginTop: '16px'
    },
    expand: {
        width: '100%'
    },
    expandIcon: {
        color: '#ffffff',
        fontSize: '26px'
    },
    helpIcon: {
        fontSize: '26px',
        cursor: 'pointer'
    },
    contractIcon: {
        color: '#25354b',
        fontSize: '26px',
        cursor: 'pointer'
    },
    colourPreview: {
        width: '16px',
        height: '16px',
        borderRadius: '4px'
    }
}

const Header = ({ onColourChange, palette, toggleSidebar, sidebarExpanded }) => {
    if(!sidebarExpanded){
        return (
            <div className="contracted-header" onClick={toggleSidebar} style={styles.contractedHeader}>
                <div className="flex flex-column p3 items-center justify-center" style={styles.expand}>
                    <i className="fa fa-chevron-circle-right mb4" style={styles.expandIcon}></i>
                    {
                        Object.keys(palette).map(colour => {
                            return <div className="mb1" style={Object.assign({}, styles.colourPreview, {
                                    backgroundColor: palette[colour]
                                })}>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    return (
        <header className="col-2 fixed" style={styles.header}>
            <div className="flex header-hero p2 border-bottom">
                <i className="fa fa-question-circle" style={styles.helpIcon}></i>
                <Logo />
            </div>
            <ColourPickers onColourChange={onColourChange} palette={palette} />
            <i className="fa fa-chevron-circle-left mt2 p2" style={styles.contractIcon} onClick={toggleSidebar}></i>
        </header>
    )
}

export default Header
