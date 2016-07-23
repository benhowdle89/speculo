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
        height: '95vh',
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
        cursor: 'pointer',
        color: '#55687c'
    },
    contractIcon: {
        color: '#55687c',
        fontSize: '26px',
        cursor: 'pointer',
        position: 'absolute',
        bottom: '16px',
        left: '16px'
    },
    colourPreview: {
        width: '16px',
        height: '16px',
        borderRadius: '4px'
    },
    exportIcon: {
        fontSize: '26px',
        color: '#55687c',
        position: 'relative',
        top: '1px',
        cursor: 'pointer'
    },
    author: {
        position: 'absolute',
        bottom: '20px',
        right: '16px'
    }
}

const Header = ({ onColourChange, palette, toggleSidebar, sidebarExpanded, toggleHelp, toggleExport }) => {
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
                <i className="fa fa-question-circle mr2" style={styles.helpIcon} onClick={toggleHelp}></i>
                <i style={styles.exportIcon} className="fa fa-link" onClick={toggleExport}></i>
                <Logo />
            </div>
            <ColourPickers onColourChange={onColourChange} palette={palette} />
            <i className="fa fa-chevron-circle-left" style={styles.contractIcon} onClick={toggleSidebar}></i>
            <p className="" style={styles.author}>Made by <a className="text-decoration-none bold" href="http://benhowdle.im">Ben Howdle</a></p>
        </header>
    )
}

export default Header
