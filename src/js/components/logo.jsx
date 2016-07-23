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
            <p style={styles.logo} className="right">Speculo</p>
        </div>
    )
}

export default Logo
