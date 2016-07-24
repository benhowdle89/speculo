import React from 'react'
import contrast from 'contrast'

const styles = {
    pickerContainer: {

    },
    pickerWrap: {
        borderColor: 'rgba(0,0,0,0.1)',
        width: '50%'
    },
    color: {
        textTransform: 'capitalize',
        fontSize: '12px',
        textAlign: 'center',
        lineHeight: '1.65'
    },
    labelPicker: {
        cursor: 'pointer',
        paddingTop: '10px',
        paddingBottom: '10px',
        minHeight: '100px'
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
        width: '45px',
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

const isValidHex = (hex) => {
    return /^#[0-9A-F]{6}$/i.test(hex)
}

const ColourPickers = ({ onColourChange, palette }) => {
    return (
        <div style={styles.pickerContainer} className="flex flex-wrap">
            {
                Object.keys(palette).map(colour => {
                    let colorText = isValidHex(palette[colour]) ? styles.colorText[contrast(palette[colour])] : styles.colorText.light
                    return <div className="flex flex-column" style={styles.pickerWrap}>
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
                                    if(!value){
                                        return
                                    }
                                    if(value.length > 7){
                                        return
                                    }
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
