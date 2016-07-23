import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as paletteActions from './../actions/palette'
import * as layoutActions from './../actions/layout'

import Header from './../components/header.jsx'
import Layouts from './../components/layouts.jsx'

class Index extends React.Component {
    render() {
        return (
            <div className="flex">
                <Header
                    onColourChange={this.props.paletteActions.changeColour}
                    palette={this.props.paletteState}
                />
                <Layouts
                    maximisedLayout={this.props.layoutsState.maximisedLayout}
                    maximiseLayout={this.props.layoutActions.maximiseLayout}
                    minimiseLayout={this.props.layoutActions.minimiseLayout}
                    palette={this.props.paletteState}
                    numberOfLayouts={this.props.layoutsState.numberOfLayouts}
                />
            </div>
        )
    }
}

Index.propTypes = {
    paletteActions: PropTypes.object.isRequired,
    paletteState: PropTypes.object.isRequired,
    layoutsState: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        paletteState: state.paletteState,
        layoutsState: state.layoutsState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        paletteActions: bindActionCreators(paletteActions, dispatch),
        layoutActions: bindActionCreators(layoutActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
