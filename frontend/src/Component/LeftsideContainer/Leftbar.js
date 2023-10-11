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
      <div style={{display:"flex", alignItems:"center", marginTop:3}}>
      <img src={`${image}`} className='notiImg' alt=""/>
          <p style={{marginLeft:"10px",color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Madan like your post Madan like your post </p>
          
          <img src={`${image}`} className='followingImg' alt=""/>
      </div>
      <div style={{display:"flex", alignItems:"center", marginTop:3}}>
      <img src={`${image}`} className='notiImg' alt=""/>
          <p style={{marginLeft:"5px",color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Madan like your post and he finds it interesting to read</p>
          <img src={`${image}`} className='followingImg' alt=""/>
      </div>
      <div style={{display:"flex", alignItems:"center", marginTop:3}}>
      <img src={`${image}`} className='notiImg' alt=""/>
          <p style={{marginLeft:"10px",color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Madan like your post</p>
          <img src={`${image}`} className='followingImg' alt=""/>
      </div>
      <div style={{display:"flex", alignItems:"center",marginTop:3}}>
      <img src={`${image}`} className='notiImg' alt=""/>
          <p style={{marginLeft:"10px",color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Madan like your post</p>
          <img src={`${image}`} className='followingImg' alt=""/>
      </div>
      <div style={{display:"flex", alignItems:"center",marginTop:3}}>
      <img src={`${image}`} className='notiImg' alt=""/>
          <p style={{marginLeft:"10px",color:"#aaa" , fontSize:13, textAlign:"start", width:"120px"}}>Madan like your post</p>
          <img src={`${image}`} className='likeImg' alt=""/>
      </div>
      <div style={{display:"flex", alignItems:"center",marginTop:3}}>
      <img src={`${image}`} className='notiImg' alt=""/>
          <p style={{marginLeft:"10px",color:"#aaa" , fontSize:13, textAlign:"start", width:"120px"}}>Madan like your post</p>
          <img src={`${image}`} className='followingImg' alt=""/>
      </div>
      <div style={{display:"flex", alignItems:"center",marginTop:3}}>
      <img src={`${image}`} className='notiImg' alt=""/>
          <p style={{marginLeft:"10px",color:"#aaa" , fontSize:13, textAlign:"start", width:"120px"}}>Madan like your post</p>
          <img src={`${image}`} className='likeImg' alt=""/>
      </div>
      </div>

      <div className='noticontainer'>
      <div style={{display:"flex",justifyContent:'space-around'}}>
         <p style={{marginLeft:"-20px"}}>Explore</p>
         <p style={{color:"#aaa",marginLeft:"40px"}}>See all</p>
      </div>
        <div>
            <img src={`${image}`} className='exploreimg' alt=""/>
            <img src={`${image}`} className='exploreimg' alt=""/>
            <img src={`${image}`} className='exploreimg' alt=""/>
            <img src={`${image}`} className='exploreimg' alt=""/>
            <img src={`${image}`} className='exploreimg' alt=""/>
            <img src={`${image}`} className='exploreimg' alt=""/>
            <img src={`${image}`} className='exploreimg' alt=""/>
            <img src={`${image}`} className='exploreimg' alt=""/>
            <img src={`${image}`} className='exploreimg' alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
