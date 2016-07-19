import React from 'react'

const Layout0 = ({ palette }) => {
    return (
        <div>
            LAYOUT 0
            { Object.keys(palette).map(colour => <p>{colour}: {palette[colour]}</p>) }
        </div>
    )
}

export default Layout0
