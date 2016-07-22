import React from 'react'

const styles = {

}

const Layout2 = ({ palette }) => {
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
            </div>
            <div className="flex border-bottom">
                <div className="col-4">
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Some</p>
                </div>
                <div className="col-4">
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Menu</p>
                </div>
                <div className="col-4">
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Items</p>
                </div>
            </div>
            <div className="flex">
                <div className="col-8 border-right px2">
                    <h2 style={{
                            color: palette.headingTextColour
                        }}>Some hero text</h2>
                    <img className="large-image border-bottom pb2" src="https://unsplash.it/400/266?image=407" alt=""/>
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Some blah blah blah blah blah blah text</p>
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Some blah blah blah blah blah blah text</p>
                    <p style={{
                            color: palette.bodyTextColour
                        }}>Some blah blah blah blah blah blah text</p>
                </div>
                <div className="col-4">
                    <div className="flex px1 justify-between border-bottom py1">
                        <span>S</span>
                        <span>S</span>
                        <span>S</span>
                        <span>S</span>
                    </div>
                    <div>
                        <h3 className="border p2 m2" style={{
                                color: palette.secondaryHeadingTextColour
                            }}>Some blah blah text</h3>
                    </div>
                    <div>
                        <h2 style={{
                                color: palette.headingTextColour
                            }}>Some hero text</h2>
                        <div className="border p2 m1"></div>
                        <div className="border p2 m1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout2
