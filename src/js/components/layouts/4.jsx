import React from 'react'

const styles = {

}

const Layout4 = ({ palette }) => {
    return (
        <div style={{
                backgroundColor: palette.bodyBackgroundColour
            }}>
            <div className="flex border-bottom py1">
                <img src="/dist/images/logo.png" className="pl1 logo" alt=""/>
            </div>
            <div className="flex p2 flex-wrap justify-center">
                <div className="flex mb2">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image" alt=""/>
                    <p className="pl1" style={{
                            color: palette.bodyTextColour
                        }}>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
                <div className="flex mb2">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image" alt=""/>
                    <p className="pl1" style={{
                            color: palette.bodyTextColour
                        }}>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
                <div className="border py1 px2 my1">
                    <h3>Some text</h3>
                    <p className="pl1" style={{
                            color: palette.bodyTextColour
                        }}>Some more text</p>
                </div>
                <div className="flex mb2">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image" alt=""/>
                    <p className="pl1" style={{
                            color: palette.bodyTextColour
                        }}>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
                <div className="flex mb2">
                    <img src="https://unsplash.it/400/266?image=431" className="small-image" alt=""/>
                    <p className="pl1" style={{
                            color: palette.bodyTextColour
                        }}>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
            </div>
        </div>
    )
}

export default Layout4
