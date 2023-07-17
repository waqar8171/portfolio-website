import React from 'react'

const HeroSection = () => {
  return (
    <main className='hero container'>
    <div className="hero-content">
    <h1>YOUR FEET DESERVE <br /> THE BEST</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae quos minus! Provident ea, magni saepe quos dolorum accusamus quaerat.</p>

    <div className="hero-btn">
      <button>Shop Now</button>
      <button className='secondrey-btn'>Category</button>
    </div>
    <div className="shopping">
      <p>Also available only</p>
      <div className="brand-icons">
        <img src="./images/amazon.jpg" alt="cart-logo" width="55px"/>
        <img src="./images/Flipkart-logo1.png" alt="cart-logo" width="55px"/>
      </div>
    </div>
    </div> 
    <div className="hero-image">
      <img src="./images/sko-star.jpg" alt="star-logo" />
    </div>
      
    </main>
  )
}

export default HeroSection;
