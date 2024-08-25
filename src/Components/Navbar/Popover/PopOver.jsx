import React, { useState } from 'react';
import './PopOver.css'; // Import your CSS file for styling
import google_icon from '../../../assets/google_icon.png/'
import switch_account_icon from '../../../assets/switch_account_icon.png/'
import logout_icon from '../../../assets/logout_icon.png/'
import profile_icon from '../../../assets/jack.png'
import setting_icon from '../../../assets/setting_icon.png'
import help_icon from '../../../assets/help_icon.png'
import feedback_icon from '../../../assets/feedback_icon.png'
import greater_then_icon from '../../../assets/greater_then_icon.png'
import {useNavigate} from 'react-router-dom';
import Mymodal from './Mymodal';
import Profile from './Profile';

const Popover = ({Toggle    }) => {
  // const navigate = useNavigate();
   const [ProfileBox,setProfileBox] = useState()
  return (
    <>  
    
      <div className="youtube-popover-container">
     
      {Toggle && (
        <div className="popover-content">
          {/* Your popover content goes here */}

    {/* <div className='popover-flex'>
    <img src={profile_icon} alt=""  className='profile_icon'/><p>Profile</p>
    </div> */}
    
    <Profile />
    <hr />

    <div className='popover-flex'>
    <img src={google_icon} alt="" /><p>Google Accout</p>
    </div>

 <div  className='popover-flex'>
 <img src={switch_account_icon} alt="" /><p>Switch Account</p>      <span><img src={greater_then_icon} alt="" /></span> 
 </div>


     <Mymodal/>      

   <hr /> 

  <div   className='popover-flex'>
  <img src={setting_icon} alt="" /><p>Setting</p>
  </div> 

<hr />

<div   className='popover-flex'>
  <img src={help_icon} alt="" /><p>Help</p>
  </div> 
<div   className='popover-flex'>
  <img src={feedback_icon} alt="" /><p>Send feedback</p> 
  </div> 
        </div>
      )}

    </div>
   
    </>

  );
};

export default Popover;




// ----------------------------------------------------

