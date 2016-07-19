import React from 'react'

const Layout2 = ({ palette }) => {
    return (
        <div>
            LAYOUT 2
            { Object.keys(palette).map(colour => <p>{colour}: {palette[colour]}</p>) }
        </div>
    )
}

export default Layout2
