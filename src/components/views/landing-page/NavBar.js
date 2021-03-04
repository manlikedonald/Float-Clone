import React from 'react'
import img from '/Users/donald/Documents/Codes/swipe/src/assets/images/swipe-logo.svg'

function NavBar() {
    return (
        <div className='navBar'>
            <img src={img} alt='Swipe logo' className='navBarImage' />
        </div>
    )
}

export default NavBar
