import React from 'react'

const styles = {
    layout: {

    }
}

const Layout5 = ({ palette }) => {
    return (
        <div style={Object.assign({}, styles.layout, {
                backgroundColor: palette.bodyBackgroundColour
            })}>
            <div className="hero border-bottom p2 flex items-center">
                <div className="mr1">
                    <h2 style={{
                            color: palette.headingTextColour
                        }}>Some hero text, we do x y z blah blah blah</h2>
                    <h3 style={{
                            color: palette.secondaryHeadingTextColour
                        }}>But we also do more blah blah blah</h3>
                        <div className="button primary border py0 px2 self-center col-6 mx-auto mt1" style={{
                                backgroundColor: palette.primaryButtonBackgroundColour
                            }}><p style={{
                                color: palette.primaryButtonTextColour
                            }}>Primary</p></div>
                </div>
                <div className="ml1">
                    <img className="large-image" src="https://unsplash.it/400/266?image=407" alt=""/>
                </div>
            </div>
            <div className="hero border-top p2 flex items-center">
                <div className="mr1">
                    <img className="large-image" src="https://unsplash.it/400/266?image=407" alt=""/>
                </div>
                <div className="ml1">
                    <h2 style={{
                            color: palette.headingTextColour
                        }}>Some hero text, we do x y z blah blah blah</h2>
                    <h3 style={{
                            color: palette.secondaryHeadingTextColour
                        }}>But we also do more blah blah blah</h3>
                        <div className="button primary border py0 px2 self-center col-6 mx-auto mt1" style={{
                                backgroundColor: palette.primaryButtonBackgroundColour
                            }}><p style={{
                                color: palette.primaryButtonTextColour
                            }}>Primary</p></div>
                </div>
            </div>
        </div>
    )
}

export default Layout5
