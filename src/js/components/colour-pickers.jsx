import React from 'react'

const styles = {
    color: {
        textTransform: 'capitalize'
    }
}

const ColourPickers = ({ onColourChange, palette }) => {
    return (
        <div>
            {
                Object.keys(palette).map(colour => {
                    return <div className="px1 flex flex-column">
                            <p style={styles.color}>{ colour.replace(/([A-Z])/g, ' $1') }</p>
                            <input type="color" onChange={(event) => {
                                onColourChange(colour, event.target.value)
                            }} value={palette[colour]} />
                    </div>
                })
            }
        </div>
    )
}

export default ColourPickers
