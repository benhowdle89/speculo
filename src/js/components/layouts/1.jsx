import React from 'react'

const styles = {

}

const Layout1 = ({ palette }) => {
    return (
        <div style={{
                backgroundColor: palette.bodyBackgroundColour
            }}>
            <div className="flex border-bottom py1">
                <img src="/dist/images/logo.png" className="pl1 logo" alt=""/>
            </div>
            <div className="hero border-bottom p2 flex items-center">
                <div className="col-6">
                    <h2 style={{
                            color: palette.headingTextColour
                        }}>Some hero text, we do x y z blah blah blah</h2>
                    <div className="flex justify-center">
                        <div style={{
                                backgroundColor: palette.primaryButtonBackgroundColour
                            }} className="button primary border py0 px2 self-center"><p style={{
                                color: palette.primaryButtonTextColour
                            }}>Primary</p></div>
                        <div className="button secondary border py0 px2 self-center" style={{
                                backgroundColor: palette.secondaryButtonBackgroundColour
                            }}><p style={{
                                color: palette.secondaryButtonTextColour
                            }}>Secondary</p></div>
                    </div>
                </div>
                <div className="col-6">
                    <img className="iphone-image" src="/dist/images/iphone.png" alt=""/>
                </div>
            </div>
            <div className="flex p2 border-bottom">
                <div className="flex flex-column">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image" alt=""/>
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
                <div className="flex flex-column mx2">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image" alt=""/>
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
                <div className="flex flex-column">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image" alt=""/>
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
            </div>
            <div className="flex justify-center">
                <p style={{
                        color: palette.bodyTextColour
                    }}>Some footer text.</p>
            </div>
        </div>
    )
}

export default Layout1
