import React from 'react'

const Navigation = () => {
  return (
     <nav className='container'>
    <div className="logo">
        <img src="./images/brand-logo.png" alt="logo" width="45px" />
    </div>
    <ul>
        <li href="#">Menu</li>
        <li href="#">About</li>
        <li href="#">Location</li>
        <li href="#">Contact</li>
    </ul>
    <button>Login</button>
</nav>
  )
}

export default Navigation
