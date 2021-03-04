import React from 'react'
import img from '/Users/donald/Documents/Codes/swipe/src/assets/images/arrows.svg'

function CreditLine() {
    return (
        <div className='creditLine'>
            <div className='creditLineImage'>
                <img src={img} alt='arrows' />
            </div>
            <div className='creditLineText'>
                <h2 style={{width: '30%'}}>Get a line of credit for your business in minutes.</h2>
                <p style={{margin: '2rem auto'}} className='creditLinePara'>Accessing small business financing shouldn't be complicated.</p>
                <button className='creditLineButton'>Get Early Access</button>
            </div>
        </div>
    )
}

export default CreditLine
