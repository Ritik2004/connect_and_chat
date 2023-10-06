import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='mainNavbar'>
       <div className='logoContainer'>
        <p>Social</p>
       </div>
       <div className='searchInput'>
        <div>
        <i class="fa-solid fa-magnifying-glass searchicon"></i>
            <input type='text' className="search-input" placeholder="search your friends"  name='' id=''/>
        </div>
       </div>
       <div className='iconContainer'>
       <i class="fa-regular fa-bell icon"></i>
       <i class="fa-regular fa-message icon" ></i>
        <div style={{display:'flex', alignItems:'center'}}>
        <i class="fa-solid fa-user icon profile" ></i>
        <p className='inputname'>Ritik</p>
        </div>
       </div>
    </div>

  )
}

export default Navbar
