import Education from '../../pages/education/Education';
import Experience from '../../pages/experience/Experience';
import Home from '../../pages/home/home';
import NavDrawer from '../drawer/NavDrawer';
import Box from '@mui/material/Box';
import { useState } from 'react';

function MainOnePage() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleToggleNav = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <NavDrawer isOpen={navBarOpen} handleDrawerClose={handleToggleNav} />
        <Box compenent="main" sx={{ flexGrow: 1, p: 3 }}>
          <div id="Home">
            <Home />
          </div>
          <div id="Experience">
            <Experience />
          </div>
          <div id="Education">
            <Education />
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default MainOnePage;
