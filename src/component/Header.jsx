import React from 'react'

const Header = () => {
  return (
    <div className=''>
        <h1 className='text-3xl font-bold underline'>My Website</h1>
        <nav>
            <ul className='list-none' >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
        </nav>
      
    </div>
  )
}

export default Header
