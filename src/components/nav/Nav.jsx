import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiBook3Line} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active' : ''}><RiBook3Line /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav;