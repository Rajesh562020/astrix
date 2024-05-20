import React from 'react'
import Header from './component/Header/Header.jsx';
import { CiLocationOn,CiClock2 } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import artists from './assets/artists.png';
import qrcode from './assets/qrcode.png';
const Skeleton = () => {
  return (
    <>
    <Header/>
    <Outlet />
    <div className="RightSide">
      <div className='content_box'>
      <div className='explore' >
      Explore Your First Event
    </div>
    <div className='Event_name' >
      Event Name
    </div>
    <div className='venue_details'>
    <CiLocationOn  style={{ color: 'white', fontSize: '1.5rem' }} />&#160;
    <span style={{ color: 'white', fontSize: '1.5rem' }}>Venue</span>&#160;&#160;&#160;
    <CiClock2  style={{ color: 'white', fontSize: '1.5rem' }}/>&#160;
    <span style={{ color: 'white', fontSize: '1.5rem' }}>04/03/2024 @ 19:00</span>
    </div>
    <div className='text_venue'>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nesciunt, minus officia numquam distinctio at, repellat 
        fugiat quo sint blanditiis eum aspernatur, ut labore? Blanditiis beatae non temporibus porro eius.</p>
        <p style={{fontSize:'2rem',marginTop:'0.5rem'}}>Artist Lineup</p>
        <img width="90%" src={artists} alt='artists'/>
        <div className='qr_code'>
          <img src={qrcode} alt='qr'/>
          <button style={{borderRadius:"20px",height:"60px",width:"150px",color:"rgb(22, 21, 21)",backgroundColor:'#e6bf6c',border:'none'}}>Join Waitlist</button>
        </div>
    </div>
      </div>
   
    
    <div className="text-container">
      <div className="moving-text">
        <p>Event: Oasis bus tour,JLN Stadium,Delhi <span>&#x2732;</span>Collections.</p>
      </div>

    </div>
   
    </div>
    </>
  )
}

export default Skeleton