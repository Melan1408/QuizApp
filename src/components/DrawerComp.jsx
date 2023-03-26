import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer PaperProps={{
        sx: { backgroundColor: '#709bf0' },
      }} open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((link, index) => (
            <ListItemButton onClick={() => setOpen(false)} key={index} divider>
              <ListItemIcon>
                <ListItemText sx={{ color: 'white' }}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
