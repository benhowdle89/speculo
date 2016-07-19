import React from 'react'

import LayoutsObject from './layouts/'

const Layouts = ({ palette, numberOfLayouts }) => {
    return (
        <div className="p3">
            {
                Array.from({length: numberOfLayouts}).map((layout, index) => {
                    const Layout = LayoutsObject[`layout${index}`]
                    return <Layout palette={palette} />
                })
            }
        </div>
    )
}

export default Layouts
