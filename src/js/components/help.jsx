import React from 'react'
import {ModalContainer, ModalDialog} from 'react-modal-dialog'

const styles = {
    help: {
        maxWidth: '700px'
    },
    helpItem: {
        width: 'calc(100% * (1/3) - 10px - 1px)'
    },
    heading: {
        fontSize: '23px',
        textAlign: 'center',
        borderColor: '#E7E9EC'
    },
    helpText: {
        color: '#38495c',
        lineHeight: '25px',
        textAlign: 'center'
    },
    helpIcon: {
        fontSize: '24px'
    },
    twitterIcon: {
        fontSize: '24px'
    }
}

const Help = ({ toggleHelp }) => {
    return (
        <ModalContainer onClose={toggleHelp}>
            <ModalDialog onClose={toggleHelp} style={styles.help}>
                <h2 style={styles.heading} className="mb3 border-bottom pb2">Welcome to Speculo</h2>
                <div className="flex px2 flex-wrap justify-between">
                    <div className="flex flex-column items-center mb2" style={styles.helpItem}>
                        <div className="mb1">
                            <i style={styles.helpIcon} className="fa fa-paint-brush"></i>
                        </div>
                        <p style={styles.helpText}>Change the colours on the left hand side and watch the layouts automatically update.</p>
                    </div>
                    <div className="flex flex-column items-center mb2" style={styles.helpItem}>
                        <div className="mb1">
                            <i style={styles.helpIcon} className="fa fa-eye"></i>
                        </div>
                        <p style={styles.helpText}>Click on one of the layouts to zoom in. Focus.</p>
                    </div>
                    <div className="flex flex-column items-center mb2" style={styles.helpItem}>
                        <div className="mb1">
                            <i style={styles.helpIcon} className="fa fa-chevron-circle-left"></i>
                        </div>
                        <p style={styles.helpText}>Collapse the sidebar for a distraction-free experience.</p>
                    </div>
                    <div className="flex flex-column items-center" style={styles.helpItem}>
                        <div className="mb1">
                            <i style={styles.helpIcon} className="fa fa-copy"></i>
                        </div>
                        <p style={styles.helpText}>Speculo uses 6 of the more common website layouts to cover the most use-cases.</p>
                    </div>
                    <div className="flex flex-column items-center" style={styles.helpItem}>
                        <div className="mb1">
                            <i style={styles.helpIcon} className="fa fa-link"></i>
                        </div>
                        <p style={styles.helpText}>Export your created colour palette to <a href="https://coolors.co/">Coolors</a> with one click.</p>
                    </div>
                    <div className="flex flex-column items-center" style={styles.helpItem}>
                        <div className="mb1">
                            <i style={styles.helpIcon} className="fa fa-thumbs-up"></i>
                        </div>
                        <p style={styles.helpText}>I hope you find Speculo to be useful and it provides you with a slick way to rapidly visualise your colour palettes.</p>
                    </div>
                </div>
                <div className="flex mt2 border-top pt2 items-center justify-center">
                    <p className="mr1">Share Speculo on</p>
                    <a className="twitter-share-button" target="_BLANK" href="https://twitter.com/intent/tweet?text=Colour palette visualiser&url=http://speculo.co">
                        <i className="fa fa-twitter" style={styles.twitterIcon}></i>
                    </a>
                </div>
            </ModalDialog>
        </ModalContainer>
    )
}

export default Help
