import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Leftbar from '../../Component/LeftsideContainer/Leftbar'
import MainPost from '../../Component/MainPostContainer/Mainpostcontainer'
import Rightbar from '../../Component/RightsideContainer/Rightbar'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='componentContainer'>
     <Leftbar/>
     <MainPost/>
     <Rightbar/>
      </div>
    </div>
  )
}

export default Home
