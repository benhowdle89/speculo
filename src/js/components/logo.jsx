import React from 'react'

const styles = {
    logo: {
        fontFamily: "'Montserrat', sans-serif",
        color: '#1c273a',
        fontSize: '20px'
    }
}

const Logo = () => {
    return (
        <div className="flex-auto pr1">
            <a href="/" style={styles.logo} className="right text-decoration-none">Speculo</a>
        </div>
    )
}

export default Logo
