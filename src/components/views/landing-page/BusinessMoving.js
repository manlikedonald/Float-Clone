import React from 'react'
import img from '/Users/donald/Documents/Codes/swipe/src/assets/images/paperplane.svg'

function BusinessMoving() {
    return (
        <div className='businessMoving'>
            <div className='container'>
                <div className='row'>
                    <div className= 'col-md-6'>
                        <div className='businessMovingImageDiv' >
                            <img src={img} alt='paper planes' className='businessMovingImage' />
                        </div>
                    </div>
                    <div className= 'col-md-2'></div>
                    <div className= 'col-md-4 businessMovingText'>
                        <h2 style={{width: '70%'}}>Keep your business moving</h2>
                        <p style={{margin: '2rem auto'}} className='businessMovingPara'>We help you get the credit you need so you can get back to growing your business. There is no paperwork, collateral requirements or hidden fees.</p>
                        <button type='button' className='businessMovingButton'>Join Waitlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessMoving
