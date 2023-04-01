import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer PaperProps={{
        sx: { backgroundColor: '#E5E5E5' },
      }} open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((link, index) => (
            <ListItemButton onClick={() => setOpen(false)} key={index} divider variant='h4' sx={{
              fontSize: '18px',
              color: '#696F79',
              background: 'white',
              fontFamily: 'Poppins',
              fontWeight: '600',
            }}>
              <ListItemIcon>
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  to={(link.split(' ').join('_').toLowerCase() === 'home')
                    ? '/'
                    : link.split(' ').join('_').toLowerCase()}>
                  {link}
                </Link>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ color: '#696F79', marginLeft: 'auto' }} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
