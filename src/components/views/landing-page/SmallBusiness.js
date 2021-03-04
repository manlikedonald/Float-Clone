import React from 'react'
import img from '/Users/donald/Documents/Codes/swipe/src/assets/images/confetti.svg'
import img1 from '/Users/donald/Documents/Codes/swipe/src/assets/images/moneyhand.png'

function SmallBusiness() {
    return (
        <div className='smallBusiness'>
            <div className='confettiDiv'>
                <img src={img} alt='confetti' className='confetti' />
                <img src={img1} alt='Money Hand' className='moneyHand' />
            </div>
            <div className='smallBusinessText'>
                <h2 style={{width: '30%'}}>Built for small businesses and freelancers</h2>
                <p style={{marginTop: '2rem', marginBottom: '2rem', width: '30%'}} className='creditLinePara'>We are on a mission to unleash the potential of African SMEs by providing quick working capital.</p>
                <button className='creditLineButton'>Get Early Access</button>
            </div>
        </div>
    )
}

export default SmallBusiness
