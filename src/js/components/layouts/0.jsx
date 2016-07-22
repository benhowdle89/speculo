import React from 'react'

const styles = {

}

const Layout0 = ({ palette }) => {
    return (
        <div style={{
                backgroundColor: palette.bodyBackgroundColour
            }}>
            <div className="flex border-bottom py1">
                <img src="/dist/images/logo.png" className="pl1 logo" alt=""/>
            </div>
            <div className="hero border-bottom p2">
                <h2 style={{
                        color: palette.headingTextColour
                    }}>Some hero text, we do x y z blah blah blah</h2>
                <h3 style={{
                        color: palette.secondaryHeadingTextColour
                    }}>But we also do more blah blah blah</h3>
                <div className="flex justify-center mt2">
                    <div className="button primary border py0 px2 self-center" style={{
                            backgroundColor: palette.primaryButtonBackgroundColour
                        }}><p style={{
                            color: palette.primaryButtonTextColour
                        }}>Primary</p></div>
                    <div className="button secondary border py0 px2 self-center" style={{
                            backgroundColor: palette.secondaryButtonBackgroundColour
                        }}><p style={{
                            color: palette.secondaryButtonTextColour
                        }}>Secondary</p></div>
                </div>
            </div>
            <div className="flex p2 border-bottom">
                <div className="flex flex-column items-center">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image mb1" alt=""/>
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
                <div className="flex flex-column mx2 items-center">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image mb1" alt=""/>
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
                <div className="flex flex-column items-center">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image mb1" alt=""/>
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

export default Layout0
