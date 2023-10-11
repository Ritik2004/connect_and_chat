import React from "react";
import "./rightbar.css";
import flip from '../../Images/flip.jpg'
import add2 from '../../Images/add2.avif'
import add3 from '../../Images/add3.avif'
import add from '../../Images/add.png'
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightcontainer">
        <div className="adscont">
          <img src={`${flip}`} className="adsimg" alt=""/>
          <div>
            <p style={{textAlign:'start', marginLeft:'10px', marginTop:-20 }}>Flipkart</p>
            <p style={{textAlign:'start', marginLeft:'10px', fontSize:'12px', }}>Flipkart shopping fest</p>
          </div>
        </div>
        <div className="adscont">
          <img src={`${add2}`} className="adsimg" alt=""/>
          <div>
            <p style={{textAlign:'start', marginLeft:'10px', marginTop:-20 }}>Flipkart</p>
            <p style={{textAlign:'start', marginLeft:'10px', fontSize:'12px', }}>Flipkart shopping fest</p>
          </div>
        </div>
        <div className="adscont">
          <img src={`${add3}`} className="adsimg" alt=""/>
          <div>
            <p style={{textAlign:'start', marginLeft:'10px', marginTop:-20 }}>Flipkart</p>
            <p style={{textAlign:'start', marginLeft:'10px', fontSize:'12px', }}>Flipkart shopping fest</p>
          </div>
        </div>
      </div>  

      <div className="rightcontainer2">
        <h3 style={{textAlign:"start", marginLeft:"10px" ,marginBottom:"12px"}}>Suggested for you</h3>
        <div style={{marginTop:"10px"}}>
        <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:'flex', alignItems:"center"}}>
            <img src={`${add2}`} className="profileImg" alt=""/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"start"}}>Mariya</p>
            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"5px", fontSize:"11px", color:"#aaa"}}>Followed by priya</p>
            </div>
          </div>
          <div style={{backgroundColor:"#aaa", padding:"10px" ,marginRight:"13px", borderRadius:"50%", cursor:"pointer"}}>
            <img src={`${add}`} className="addfriend"  alt=""/>
          </div>
        </div>
      </div> 

      <div style={{marginTop:"10px"}}>
        <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:'flex', alignItems:"center"}}>
            <img src={`${add3}`} className="profileImg" alt=""/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"start"}}>Priya</p>
            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
            </div>
          </div>
          <div style={{backgroundColor:"#aaa", padding:"10px" ,marginRight:"13px", borderRadius:"50%", cursor:"pointer"}}>
            <img src={`${add}`} className="addfriend"  alt=""/>
          </div>
        </div>
      </div> 

      <div style={{marginTop:"10px"}}>
        <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:'flex', alignItems:"center"}}>
            <img src={`${add2}`} className="profileImg" alt=""/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"start"}}>Priya</p>
            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
            </div>
          </div>
          <div style={{backgroundColor:"#aaa", padding:"10px" ,marginRight:"13px", borderRadius:"50%", cursor:"pointer"}}>
            <img src={`${add}`} className="addfriend"  alt=""/>
          </div>
        </div>
      </div> 
      
      <div style={{marginTop:"10px"}}>
        <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:'flex', alignItems:"center"}}>
            <img src={`${add2}`} className="profileImg" alt=""/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"start"}}>Priya</p>
            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
            </div>
          </div>
          <div style={{backgroundColor:"#aaa", padding:"10px" ,marginRight:"13px", borderRadius:"50%", cursor:"pointer"}}>
            <img src={`${add}`} className="addfriend"  alt=""/>
          </div>
        </div>
      </div> 

      <div style={{marginTop:"10px"}}>
        <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:'flex', alignItems:"center"}}>
            <img src={`${add3}`} className="profileImg" alt=""/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"start"}}>Priya</p>
            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
            </div>
          </div>
          <div style={{backgroundColor:"#aaa", padding:"10px" ,marginRight:"13px", borderRadius:"50%" , cursor:"pointer"}}>
            <img src={`${add}`} className="addfriend"  alt=""/>
          </div>
        </div>
      </div> 

      <div style={{marginTop:"10px"}}>
        <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:'flex', alignItems:"center"}}>
            <img src={`${add3}`} className="profileImg" alt=""/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"start"}}>Priya</p>
            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
            </div>
          </div>
          <div style={{backgroundColor:"#aaa", padding:"10px" ,marginRight:"13px", borderRadius:"50%" ,cursor:"pointer"}}>
            <img src={`${add}`} className="addfriend"  alt=""/>
          </div>
        </div>
      </div> 

      <div style={{marginTop:"10px"}}>
        <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:'flex', alignItems:"center"}}>
            <img src={`${add2}`} className="profileImg" alt=""/>
            <div>
            <p style={{marginLeft:"10px", textAlign:"start"}}>Priya</p>
            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"5px", fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
            </div>
          </div>
          <div style={{backgroundColor:"#aaa", padding:"10px" ,marginRight:"13px", borderRadius:"50%", cursor:"pointer"}}>
            <img src={`${add}`} className="addfriend"  alt=""/>
          </div>
        </div>
      </div> 
     

     

      </div>                                   
    </div>
  );
};

export default Rightbar;
