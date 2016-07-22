import React from 'react'

import LayoutsObject from './layouts/'

const styles = {
    layouts: {
        textAlign: 'center'
    },
    layout: {
        width: 'calc(100% * (1/3) - 10px - 1px)'
    }
}

const Layouts = ({ palette, numberOfLayouts }) => {
    return (
        <div className="px2 flex-auto flex layouts flex-wrap justify-between" style={styles.layouts}>
            {
                Array.from({length: numberOfLayouts}).map((layout, index) => {
                    const Layout = LayoutsObject[`layout${index}`]
                    return <div className="layout col-4 border mb2" style={styles.layout}>
                        <Layout palette={palette} />
                    </div>
                })
            }
        </div>
    )
}

export default Layouts
