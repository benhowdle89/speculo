import React from 'react'
import contrast from 'contrast'

const styles = {
    pickerWrap: {

    },
    color: {
        textTransform: 'capitalize',
        fontSize: '12px'
    },
    labelPicker: {
        cursor: 'pointer',
        boxShadow: '0 1px 2px rgba(5,30,50,.6)',
        borderRadius: '4px'
    },
    picker: {
        opacity: 0,
        width: 0,
        height: 0
    },
    colorText: {
        dark: '#ffffff',
        light: '#38495c'
    }
}

const updateURL = (paletteItem, value, palette) => {
    let newPalette = Object.assign({}, palette, {
        [paletteItem]: value
    })
    window.location.hash = `palette=${Object.keys(newPalette).map(colour => newPalette[colour].replace(/#/, '')).join('-')}`
}

const ColourPickers = ({ onColourChange, palette }) => {
    return (
        <div>
            {
                Object.keys(palette).map(colour => {
                    let colorText = styles.colorText[contrast(palette[colour])]
                    return <div className="flex flex-column m2" style={styles.pickerWrap}>
                            <label className="py2 px1 flex justify-center" style={Object.assign({}, styles.labelPicker, {
                                backgroundColor: palette[colour]
                            })}>
                                <input style={styles.picker} type="color" onChange={(event) => {
                                    updateURL(colour, event.target.value, palette)
                                    onColourChange(colour, event.target.value)
                                }} value={palette[colour]} />
                            <p style={Object.assign({}, styles.color, {
                                    color: colorText
                                })}>{ colour.replace(/Colour/, '').replace(/([A-Z])/g, ' $1') }</p>
                            </label>
                    </div>
                })
            }
        </div>
    )
}

export default ColourPickers
