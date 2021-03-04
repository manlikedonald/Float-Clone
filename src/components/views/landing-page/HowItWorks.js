import React, {useState} from 'react'
import img from '/Users/donald/Documents/Codes/swipe/src/assets/images/first-contact.svg'
import img1 from '/Users/donald/Documents/Codes/swipe/src/assets/images/second-contact.svg'
import img2 from '/Users/donald/Documents/Codes/swipe/src/assets/images/third-contact.svg'

function HowItWorks() {

    const [seeImage, setSeeImage] = useState(true)
    const [seeImageOne, setSeeImageOne] = useState(false)
    const [seeImageTwo, setSeeImageTwo] = useState(false)
    const [mouseOver, setMouseOver] = useState(false)
    const [mouseOverOne, setMouseOverOne] = useState(false)
    const [mouseOverTwo, setMouseOverTwo] = useState(false)

    const handleClick = () =>{
        setSeeImage(true);
        setSeeImageTwo(false);
        setSeeImageOne(false)
        setMouseOver(true);
        setMouseOverOne(false);
        setMouseOverTwo(false);
    }

    const handleClickOne = () => {
        setSeeImage(false);
        setSeeImageTwo(false);
        setSeeImageOne(true)
        setMouseOver(false);
        setMouseOverOne(true);
        setMouseOverTwo(false);
    }

    const handleClickTwo = () => {
        setSeeImage(false);
        setSeeImageOne(false);
        setSeeImageTwo(true)
        setMouseOver(false);
        setMouseOverOne(false);
        setMouseOverTwo(true);
    }

    return (
        <div className='howItWorks'>
            <div className='howItWorksText'>
                <h2>How It Works</h2> <br />
                <div>
                    <img src={img} alt='contact' className='contactOne' style={{display: seeImage ? 'block' : 'none'}} />
                    <img src={img1} alt='contact' className='contactOne' style={{display: seeImageOne ? 'block' : 'none'}}/>
                    <img src={img2} alt='contact' className='contactOne' style={{display: seeImageTwo ? 'block' : 'none'}} />
                </div>
                <div>
                    <div onMouseOver={()=> setMouseOver(true)} onClick={handleClick} className='contactDiv' style={{cursor: 'pointer', borderLeft: seeImage ? '5px solid #c2eabd' : 'none'}}>
                        <h1 style={{fontSize: '2.0rem', opacity: mouseOver ? '1' : '0.5', marginLeft: '3rem'}}>Tell us about your business</h1>
                        <p style={{width: '100%', opacity: mouseOver ? '1' : '0.5', marginLeft: '3rem'}}>It only takes minutes to sign up. We'll ask you some basic details about your company.</p>
                    </div>
                    <br />
                    <div className='contactDiv' onMouseOver={()=> setMouseOverOne(true)} onClick={handleClickOne} style={{cursor: 'pointer', borderLeft: seeImageOne ? '5px solid #c2eabd' : 'none'}}>
                        <h1 style={{fontSize: '2.0rem', opacity: mouseOverOne ? '1' : '0.5', marginLeft: '3rem'}}>Get a quick decision</h1>
                        <p style={{width: '100%', opacity: mouseOverOne ? '1' : '0.5', marginLeft: '3rem'}}>We'll review your business performance to let you know how much working capital you can access.</p> 
                    </div>
                    <br />
                    <div onMouseOver={()=> setMouseOverTwo(true)} onClick={handleClickTwo} style={{cursor: 'pointer', borderLeft: seeImageTwo ? '5px solid #c2eabd' : 'none'}} className='contactDiv'>
                    <h1 style={{fontSize: '2.0rem', opacity: mouseOverTwo ? '1' : '0.5', marginLeft: '3rem'}}>Get Cash in 24 hours</h1>
                    <p style={{width: '100%', opacity: mouseOverTwo ? '1' : '0.5', marginLeft: '3rem'}}>Take the amount you need now and come back whenever you need more capital to grow your business.</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default HowItWorks
