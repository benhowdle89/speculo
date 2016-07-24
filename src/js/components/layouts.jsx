import React from 'react'

import LayoutsObject from './layouts/'
import Help from './help.jsx'

const getStyle = (currentFont) => {
    return `.layouts.maximised { font-family: ${currentFont} }`
}

const styles = {
    layouts: {
        textAlign: 'center',
        marginLeft: '16.666667%',
        minWidth: '1000px'
    },
    layout: {
        width: 'calc(100% * (1/3) - 10px - 1px)',
        boxShadow: '0 1px 2px rgba(5,30,50,.6)'
    }
}

const Layouts = ({ palette, numberOfLayouts, maximiseLayout, minimiseLayout, maximisedLayout, sidebarExpanded, currentFont }) => {
    let Layout
    if(maximisedLayout !== null){
        Layout = LayoutsObject[`layout${maximisedLayout}`]
    }
    return (
        <div
            className={`${sidebarExpanded ? 'col-10' : 'col-12'} flex layouts flex-wrap justify-between p2 ${!!(maximisedLayout !== null) && 'maximised'}`}
            style={Object.assign({}, styles.layouts, {
                [!sidebarExpanded ? 'marginLeft' : '']: (!sidebarExpanded) ? '0' : ''
            })}
        >
            <style>{getStyle(currentFont)}</style>
            {(maximisedLayout !== null) && (
                <div className="layout col-12 mb2" style={Object.assign({}, styles.layout, {
                        width: '100%',
                        overflow: 'auto',
                        cursor: 'zoom-out'
                    })} onClick={() => minimiseLayout()}>
                    <Layout palette={palette} />
                </div>
            )}
            {(maximisedLayout == null) && (
                Array.from({length: numberOfLayouts}).map((layout, index) => {
                    Layout = LayoutsObject[`layout${index}`]
                    return <div className="layout col-4 mb2" style={Object.assign({}, styles.layout, {
                            cursor: 'zoom-in'
                        })} onClick={() => maximiseLayout(index)}>
                        <Layout palette={palette} />
                    </div>
                })
            )}
        </div>
    )
}

export default Layouts
