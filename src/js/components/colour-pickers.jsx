import React from 'react'

const ColourPickers = ({ onColourChange, palette }) => {
    return (
        <div>
            {
                Object.keys(palette).map(colour => {
                    return <div>
                            <span>{ colour }</span>
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
