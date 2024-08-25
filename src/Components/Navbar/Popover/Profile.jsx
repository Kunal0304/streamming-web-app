// import React from 'react'
// import './Profile.css'
// import profile_icon from '../../../assets/jack.png'

// const Profile = () => {
//   return (
//     <div>
//     <div className='popover-flex'>
//     <img src={profile_icon} alt=""  className='profile_icon'/><p>Profile</p>
//     </div>

//     <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 400 }}  className='modal-box'>
          
//           <h2 className="modal-box-title">ARE YOU SURE !</h2>
          
//           <div className='modal-btn container'>
//           <button onClick={handleLogout} className='modal-btn'>Profile</button>  
//           <button onClick={handleClose} className='modal-btn' >Cancle</button>
//           </div>
    
        
//         </Box>
//       </Modal>




//     </div>
//   )
// }

// export default Profile



// --------------------------------

import profile_icon from '../../../assets/jack.png'

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({modal}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  

  function handleUpdateProfile (){
    alert("hello")
    // e.preventDefault()

  }


  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}


import './Profile.css'
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';




// ... (previous imports)

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [ProDetails, setProDetails] = React.useState(true);

  // State for form inputs
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');

// State for validation errors
const [nameError, setNameError] = React.useState('');
const [emailError, setEmailError] = React.useState('');
const [mobileError, setMobileError] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  
  const handleUpdateProfile = () => {
    // Basic validation with regex
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^ run[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!name.trim() || !nameRegex.test(name)) {
     return setNameError('Please enter a valid name');
    } else {
       setNameError('');
    }

    if (!email.trim() || !emailRegex.test(email)) {
      return setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }

    if (!mobile.trim() || !mobileRegex.test(mobile)) {
      return setMobileError('Please enter a valid 10-digit mobile number');
    } else {
      setMobileError('');
    }

    // If all fields are filled and valid, proceed with updating the profile
    if (name && email && mobile) {
      setProDetails((prev)=> !prev)  
      // handleClose(); // Close the modal after successful update
    }
  };
    
      
  return (
    <div>
      <div onClick={handleOpen} className='popover-flex'>
        <img src={profile_icon} alt="" className='profile_icon' /><p>Profile</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }} className='profile-box' onsubmit=''>
          <div className='upc'>
            <div className="gradiant"></div>
            <div className="profile-down">
              <img src={profile_icon} alt="" />
              {ProDetails && <EditIcon onClick={() => setProDetails((prev) => !prev)} />}

              <div className="profile-description" >

              <TextField
                  disabled={ProDetails}
                  id="outlined-disabled"
                  label="Name"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!nameError}
                  helperText={nameError}
                />

                <TextField
                  disabled={ProDetails}
                  id="outlined-disabled"
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                />

                <TextField
                  disabled={ProDetails}
                  id="outlined-disabled"
                  label="Mobile"
                  variant="standard"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  error={!!mobileError}
                  helperText={mobileError}
                />

                {!ProDetails &&
                  <div onClick={handleUpdateProfile}  className="profile-btn">Update Profile</div>}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}





// ---------------------------------------------------------------


// export default function NestedModal() {
//     const navigate = useNavigate();
//     const [open, setOpen] = React.useState(false);
//     const [ProDetails,setProDetails] = React.useState(true)
   

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   function handleUpdateProfile(){
//     alert("jjjjj");
//   }

//   return (
//     <div>
//       <div onClick={handleOpen} className='popover-flex'>
//     <img src={profile_icon} alt=""  className='profile_icon'/><p>Profile</p>
//     </div>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 400 }}  className='profile-box'>
           
          
          
//           <div className='upc'>
//    <div className="gradiant"></div>
//    <div className="profile-down">
//     <img src={profile_icon} alt="" />
//     {ProDetails && <EditIcon onClick={()=>setProDetails((prev)=> !prev )}/>}

  
//      <div className="profile-description" >
    
//         <TextField
//          disabled = {ProDetails}
//          id="outlined-disabled"
//         label="Name"
//         variant="standard"
     

       
//       />

//         <TextField
//          disabled = {ProDetails}
//          id="outlined-disabled"
//         label="Email"
//         variant="standard"
//       />

//         <TextField
//          disabled = {ProDetails}
//          id="outlined-disabled"
//         label="Mobile"
//         variant="standard"
//       />
//         {!ProDetails &&
//         // <div  className="profile-btn"><button  type='submit'>update profile</button></div>}
//         <div onClick={()=>setProDetails((prev)=> !prev)}  className="profile-btn">Update Profile</div>}

//     </div>

       

        



//    </div>
//          </div>
    
        
//         </Box>
//       </Modal>
//     </div>
//   );
// }
