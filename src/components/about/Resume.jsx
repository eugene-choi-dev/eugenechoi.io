import React from 'react'
import resume from '../../assets/Resume.pdf'

const Resume = () => {
  return (
    <div className='Resume'>
        <a href={resume} download className='btn'>Download Resume</a>
    </div>
  )
}

export default Resume