import React from 'react'
import './header.css'
import Resume from './Resume'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <h3>Hi! Nice to meet you! I'm</h3> */}
        <h1>Eugene Choi</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Resume />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Eugene's Photo" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header