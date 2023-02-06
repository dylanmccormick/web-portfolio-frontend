import './NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon, IconButton } from '@mui/material';
import React from 'react';

const NavBar = (props) => {
  const navBarClass = props.isOpen ? 'navbar open' : 'navbar closed';

  return (
    <div className={navBarClass}>
      <IconButton onClick={props.toggleNavBar} sx={{}}>
        <MenuIcon sx={{ color: '#e4e6eb', backgroundColor: '#232323' }} />
      </IconButton>
      <a href="#Home">Home</a>
      <a href="#Experience" id="Experience">
        Experience
      </a>
      <a href="#Education">Education</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </div>
  );
};

export default NavBar;
