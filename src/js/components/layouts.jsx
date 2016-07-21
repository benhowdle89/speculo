import React from 'react'

import LayoutsObject from './layouts/'

const styles = {
    layouts: {
        textAlign: 'center'
    }
}

const Layouts = ({ palette, numberOfLayouts }) => {
    return (
        <div className="p3 flex-auto flex layouts" style={styles.layouts}>
            {
                Array.from({length: numberOfLayouts}).map((layout, index) => {
                    const Layout = LayoutsObject[`layout${index}`]
                    return <div className="mr2 layout">
                        <Layout palette={palette} />
                    </div>
                })
            }
        </div>
    )
}

export default Layouts
