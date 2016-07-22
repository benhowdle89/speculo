import React from 'react'

import LayoutsObject from './layouts/'

const styles = {
    layouts: {
        textAlign: 'center'
    },
    layout: {
        width: 'calc(100% * (1/3) - 10px - 1px)',
        boxShadow: '0 1px 2px rgba(5,30,50,.6)'
    }
}

const Layouts = ({ palette, numberOfLayouts }) => {
    return (
        <div className="col-10 flex layouts flex-wrap justify-between p2" style={styles.layouts}>
            {
                Array.from({length: numberOfLayouts}).map((layout, index) => {
                    const Layout = LayoutsObject[`layout${index}`]
                    return <div className="layout col-4 mb2" style={styles.layout}>
                        <Layout palette={palette} />
                    </div>
                })
            }
        </div>
    )
}

export default Layouts
