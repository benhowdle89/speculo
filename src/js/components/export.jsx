import React from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog'

const styles = {
    exportContainer: {
        width: '700px'
    },
    exportCSS: {
        height: '300px',
        width: '95%'
    }
}

const getPaletteCSS = (palette) => {
    return Object.keys(palette).map(colour => {
        let key = colour.match(/Background/) ? 'background-color' : 'color'
        return `.${colour} {
    ${key}: ${palette[colour]};
}
`
    }).join('')
}

const Export = ({ palette, toggleExport }) => {
    return (
        <ModalContainer onClose={toggleExport}>
            <ModalDialog onClose={toggleExport} style={styles.exportContainer}>
                <h2 style={styles.heading} className="mb3 border-bottom pb2">Export your palette</h2>
                <p className="bold mb2">CSS <span className="italic" style={{ fontSize: '12px' }}>(click to select)</span></p>
                <textarea onClick={({ target }) => {
                        target.focus()
                        target.select()
                    }} readOnly className="border p1" value={getPaletteCSS(palette)} style={styles.exportCSS}></textarea>
            </ModalDialog>
        </ModalContainer>
    )
}

export default Export
