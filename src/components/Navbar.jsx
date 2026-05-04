import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-4 justify-center items-center'>
                <img src="https://img.icons8.com/fluency/48/graduation-cap.png" alt="" />
                <h3>Learnly</h3>
            </div>
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>Courses</li>
                <li>Categories</li>
                <li>About</li>
            </ul>
            <div>
                <input type="text" placeholder='Search for courses...'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar