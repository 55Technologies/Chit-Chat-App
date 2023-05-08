import React from 'react'
import { barStyle } from './Bar.style'
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography, Box } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useToast } from '@chakra-ui/react';


const Bar = () => {
  const toast = useToast();
  const navigate = useNavigate()
  const {classes}= barStyle();

  const handleLogout = () => {
    localStorage.clear();
    toast({
      title: "You're successfully logged out !",
      position: "top",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate("/")
      window.location.reload();
      
    }, 2500);
  };

  

  return (
  <Box className={classes.mainContainer}>
    <Box className={classes.containerOne}>

      <Box className={classes.itemCont}>
        <Link to="/">
          <Box className={classes.item}>
              <HomeIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Home</Typography>
          </Box>
        </Link>
      </Box>
     
      <Box className={classes.itemCont}>
        <Link to="/chat">
          <Box className={classes.item}>
              <ChatBubbleIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Chat</Typography>
          </Box>
        </Link>
      </Box>

      <Box className={classes.itemCont}>
        <Link to="/friend">
          <Box className={classes.item}>
              <GroupsIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Friend</Typography>
          </Box>
        </Link>
      </Box>
         
      <Box className={classes.itemCont}>
        <Link to="/profile">
          <Box className={classes.item}>
              <AccountBoxIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Profile</Typography>
          </Box>
        </Link>
      </Box>

    </Box>

    <Box className={classes.containerOne}>

      <Box className={classes.itemCont}>
        <Link onClick={handleLogout}>
          <Box className={classes.item}>
              <LogoutIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Logout</Typography>
          </Box>
        </Link>
      </Box>

    </Box>
  </Box>
  )
}

export default Bar
