import React from 'react'
import resume from '../../assets/Resume.pdf'

const Resume = () => {
  return (
    <div className='Resume'>
        <a href={resume} download className='btn'>Get Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Resume