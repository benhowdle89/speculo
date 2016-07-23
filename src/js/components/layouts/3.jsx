import React from 'react'

const styles = {

}

const Layout3 = ({ palette }) => {
    return (
        <div style={{
                backgroundColor: palette.bodyBackgroundColour
            }}>
            <div className="flex border-bottom py1">
                <img src="/dist/images/logo.png" className="pl1 logo" alt=""/>
            </div>
            <div className="hero border-bottom p2 flex items-center">
                <div className="mr1">
                    <img className="large-image" src="https://unsplash.it/400/266?image=407" alt=""/>
                </div>
                <div className="ml1">
                    <h2 style={{
                            color: palette.headingTextColour
                        }}>Some heading text</h2>
                    <h3 style={{
                            color: palette.secondaryHeadingTextColour
                        }}>Some more byline text</h3>
                    <div className="button primary border py1 px2 self-center col-6 mx-auto mt1" style={{
                            backgroundColor: palette.primaryButtonBackgroundColour
                        }}><p style={{
                            color: palette.primaryButtonTextColour
                        }}>Primary</p></div>
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
            <div className="flex justify-center pt2">
                <p style={{
                        color: palette.bodyTextColour
                    }}>Some footer text.</p>
            </div>
        </div>
    )
}

export default Layout3
