import React from 'react'
import './leftbar.css'
import image from '../../Images/t4.jpg'
const Leftbar = () => {
  return (
    <div className='leftbar'>
    <div className='noticontainer'>
      <div style={{display:"flex",justifyContent:'space-around'}}>
         <p>Notifications</p>
         <p style={{color:"#aaa"}}>See all</p>
      </div>
      <div style={{display:"flex", alignItems:"center"}}>
      <img src={`${image}`} className='notiImg' alt=""/>
          <p style={{marginLeft:"10px",color:"#aaa"}}>Madan like your post</p>
          <img src={`${image}`} className='likeImg' alt=""/>
      </div>
      </div>
    </div>
  )
}

export default Leftbar
