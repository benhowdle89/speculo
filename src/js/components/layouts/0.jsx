import React from 'react'

const styles = {

}

const Layout0 = ({ palette }) => {
    return (
        <div>
            <div className="flex border-bottom pb2">
                <img src="/dist/images/logo.png" className="pl1" alt=""/>
            </div>
            <div className="hero border-bottom pb2">
                <h2>Some hero text, we do x y z blah blah blah</h2>
                <h3>But we also do more blah blah blah</h3>
                <div className="flex justify-center">
                    <div className="button primary border py1 px2 self-center">Primary</div>
                    <div className="button secondary border py1 px2 self-center">Secondary</div>
                </div>
            </div>
            <div className="flex pt2 border-bottom">
                <div className="flex flex-column">
                    <img src="https://unsplash.it/75/50" alt=""/>
                    <p>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
                <div className="flex flex-column mx2">
                    <img src="https://unsplash.it/75/50" alt=""/>
                    <p>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
                <div className="flex flex-column">
                    <img src="https://unsplash.it/75/50" alt=""/>
                    <p>Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. Some filla text. </p>
                </div>
            </div>
            <div className="flex justify-center">
                <p>Some footer text.</p>
            </div>
        </div>
    )
}

export default Layout0
