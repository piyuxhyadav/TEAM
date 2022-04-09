import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Paper from '@mui/material/Paper';





export default function Navbar() {
  
   
  

  return (
    <Box sx={{ pb: 7, position:"absolute" }} >
      <CssBaseline />
     
      <Paper sx={{ position: 'sticky',position:"fixed", bottom: 0, left: 0, right: 0, paddingBottom:"0em" , border:"", zIndex:"99", paddingTop:"0.5em"}} elevation={3}>
        <BottomNavigation
          showLabels
        
        >
          
          <BottomNavigationAction onClick={event =>  window.location.href='/'} label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Meetings" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://192.168.152.176:3001';
      }}icon={<VideoCallIcon />} />
          <BottomNavigationAction onClick={event =>  window.location.href='/profile'} label="Profile" icon={<AccountBoxIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
