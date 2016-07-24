import React from 'react'
import contrast from 'contrast'

const styles = {
    pickerWrap: {
        borderColor: 'rgba(0,0,0,0.1)'
    },
    color: {
        textTransform: 'capitalize',
        fontSize: '12px'
    },
    labelPicker: {
        cursor: 'pointer',
        paddingTop: '10px',
        paddingBottom: '10px'
    },
    picker: {
        opacity: 0,
        width: 0,
        height: 0
    },
    colorText: {
        dark: '#ffffff',
        light: '#38495c'
    },
    hexLabel: {
        marginRight: '3px'
    },
    hexInput: {
        font: 'inherit',
        fontSize: '12px',
        backgroundColor: 'transparent',
        width: '40px',
        top: '-2px',
        position: 'relative'
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
        <div className="mt1">
            {
                Object.keys(palette).map(colour => {
                    let colorText = styles.colorText[contrast(palette[colour])]
                    return <div className="flex flex-column mb1 border-bottom border-top" style={styles.pickerWrap}>
                            <label className="px1 flex justify-center items-center flex-column" style={Object.assign({}, styles.labelPicker, {
                                backgroundColor: palette[colour]
                            })}>
                                <input style={styles.picker} type="color" onChange={event => {
                                    updateURL(colour, event.target.value, palette)
                                    onColourChange(colour, event.target.value)
                                }} value={palette[colour]} />
                            <p className="mb1" style={Object.assign({}, styles.color, {
                                    color: colorText
                                })}>{ colour.replace(/Colour/, '').replace(/([A-Z])/g, ' $1') }</p>
                            <div>
                                <label className="" style={Object.assign({}, styles.hexLabel, {
                                    color: colorText
                                })}>#</label>
                            <input className="border-bottom" style={Object.assign({}, styles.hexInput, {
                                        borderColor: colorText,
                                        color: colorText
                                    })} onChange={event => {
                                    let value = `#${event.target.value}`
                                    updateURL(colour, value, palette)
                                    onColourChange(colour, value)
                                }} type="text" value={palette[colour].replace(/#/, '')} />
                            </div>
                            </label>
                    </div>
                })
            }
        </div>
    )
}

export default ColourPickers
