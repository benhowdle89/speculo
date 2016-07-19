import React from 'react'

const Layout1 = ({ palette }) => {
    return (
        <div>
            LAYOUT 1
            { Object.keys(palette).map(colour => <p>{colour}: {palette[colour]}</p>) }
        </div>
    )
}

export default Layout1
