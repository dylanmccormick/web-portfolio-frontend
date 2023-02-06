import { HomeOutlined } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

function NavDrawer(props) {
  const handleDrawerClose = props.handleDrawerClose;

  return (
    <Drawer variant="permanent" open={props.isOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <MenuIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Link href="#Home" onClick={props.isOpen ? handleDrawerClose : null}>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.isOpen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.isOpen ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {<HomeOutlined />}
              </ListItemIcon>
              <ListItemText
                primary={'Home'}
                sx={{ opacity: props.isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        {/* Experience */}
        <Link
          href="#Experience"
          onClick={props.isOpen ? handleDrawerClose : null}
        >
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.isOpen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.isOpen ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {<WorkOutlineIcon />}
              </ListItemIcon>
              <ListItemText
                primary={'Experience'}
                sx={{ opacity: props.isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        {/* Education */}
        <Link
          href="#Education"
          onClick={props.isOpen ? handleDrawerClose : null}
        >
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.isOpen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.isOpen ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {<DescriptionOutlinedIcon />}
              </ListItemIcon>
              <ListItemText
                primary={'Education'}
                sx={{ opacity: props.isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        {/* Projects */}
        <Link
          href="#Projects"
          onClick={props.isOpen ? handleDrawerClose : null}
        >
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.isOpen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.isOpen ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {<IntegrationInstructionsOutlinedIcon />}
              </ListItemIcon>
              <ListItemText
                primary={'Projects'}
                sx={{ opacity: props.isOpen ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default NavDrawer;
