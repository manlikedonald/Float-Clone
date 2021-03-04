import React from 'react'
import img from '/Users/donald/Documents/Codes/swipe/src/assets/images/swipe-logo.svg'

function Footer() {
    return (
        <div className='footer'>
            <img src={img} alt='swipe logo' className='navBarImage' /> <span style={{color: '#D8D8D8', marginLeft: '-11rem'}}>Fast and easy credit for African businesses</span>
        </div>
    )
}

export default Footer
