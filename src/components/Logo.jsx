import React from 'react'

const Logo = ({height = 50, className=''}) => {
  return (
    <img 
        src="/logo.webp" 
        alt="El Doggy Style" 
        height={height} 
        className={`d-inline-block align-top ${className}`}
    />
  )
}

export default Logo