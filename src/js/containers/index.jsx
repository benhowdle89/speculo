import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as paletteActions from './../actions/palette'
import * as layoutActions from './../actions/layout'

import Header from './../components/header.jsx'
import Layouts from './../components/layouts.jsx'
import Help from './../components/help.jsx'
import Export from './../components/export.jsx'

class Index extends React.Component {

    componentWillMount() {
        if(!this.props.layoutsState.helpSeen){
            setTimeout(this.props.layoutActions.toggleHelp, 1500)
        }
    }

    render() {
        return (
            <div className="flex">
                {(this.props.layoutsState.helpExpanded) && (
                    <Help
                        toggleHelp={this.props.layoutActions.toggleHelp}
                        setHelpSeen={this.props.layoutActions.helpSeen}
                        helpSeen={this.props.layoutsState.helpSeen}
                    />
                )}
                {(this.props.layoutsState.exportExpanded) && (
                    <Export
                        toggleExport={this.props.layoutActions.toggleExport}
                        palette={this.props.paletteState}
                    />
                )}
                <Header
                    onColourChange={this.props.paletteActions.changeColour}
                    palette={this.props.paletteState}
                    toggleSidebar={this.props.layoutActions.toggleSidebar}
                    toggleHelp={this.props.layoutActions.toggleHelp}
                    toggleExport={this.props.layoutActions.toggleExport}
                    sidebarExpanded={this.props.layoutsState.sidebarExpanded}
                    currentFont={this.props.layoutsState.currentFont}
                    fonts={this.props.layoutsState.fonts}
                    changeFont={this.props.layoutActions.changeFont}
                    maximisedLayout={this.props.layoutsState.maximisedLayout}
                />
                <Layouts
                    maximisedLayout={this.props.layoutsState.maximisedLayout}
                    maximiseLayout={this.props.layoutActions.maximiseLayout}
                    minimiseLayout={this.props.layoutActions.minimiseLayout}
                    palette={this.props.paletteState}
                    numberOfLayouts={this.props.layoutsState.numberOfLayouts}
                    sidebarExpanded={this.props.layoutsState.sidebarExpanded}
                    currentFont={this.props.layoutsState.currentFont}
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
