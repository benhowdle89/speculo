import React from 'react'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'
import { fabric } from 'fabric'

const styles = {
    exportContainer: {
        width: '700px'
    },
    exportCSS: {
        height: '300px',
        width: '95%'
    },
    exportURL: {
        width: '95%'
    },
    canvas: {
        height: '42px'
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

const getSharingURL = (palette) => {
    return `http://speculo.co/#palette=${Object.keys(palette).map(colour => palette[colour].replace(/#/, '')).join('-')}`
}

const getPNG = (palette) => {
    let canvas = new fabric.StaticCanvas('palette')
    canvas.setHeight(40)
    canvas.setWidth(240)
    Object.keys(palette).forEach((key, index) => {
        let colour = palette[key]
        canvas.add(new fabric.Rect({
            left: index * 40,
            top: 0,
            fill: colour,
            width: 40,
            height: 40
        }))
    })
}

class Export extends React.Component {

    componentDidMount() {
        getPNG(this.props.palette)
    }

    render() {
        const { palette, toggleExport } = this.props
        return (
            <ModalContainer onClose={toggleExport}>
                <ModalDialog onClose={toggleExport} style={styles.exportContainer}>
                    <h2 style={styles.heading} className="mb3 border-bottom pb2">Export your palette</h2>
                    <p className="bold mb2">URL <span className="italic" style={{ fontSize: '12px' }}>(click to select)</span></p>
                    <input className="border p1 mb2" style={styles.exportURL} type="text" readOnly onClick={({ target }) => {
                            target.focus()
                            target.select()
                        }} value={getSharingURL(palette)} />
                    <p className="bold mb2">PNG Image (right click and save)</p>
                    <div style={styles.canvas} className="mb2 border inline-block">
                        <canvas id="palette"></canvas>
                    </div>
                    <p className="bold mb2">CSS <span className="italic" style={{ fontSize: '12px' }}>(click to select)</span></p>
                    <textarea onClick={({ target }) => {
                            target.focus()
                            target.select()
                        }} readOnly className="border p1" value={getPaletteCSS(palette)} style={styles.exportCSS}></textarea>
                </ModalDialog>
            </ModalContainer>
        )
    }
}

export default Export
