import React from 'react';
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
  IconButton,
} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, useLocation } from 'react-router-dom';
import DrawerComp from './DrawerComp';

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const links = ['Home', 'Add New', 'Favorite'];
  const { pathname } = useLocation();

  const handleChangeSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <AppBar position='relative'>
      <Toolbar sx={{ backgroundColor: 'white', p: '15px 24px' }}>
        {isMatch ? <>
          <Typography variant='h4' sx={{ fontFamily: 'Poppins', fontWeight: '800', color: '#696F79' }}>
            Quiz Time
          </Typography>
          <DrawerComp links={links} />
        </>
          : <Grid sx={{ placeItems: 'center' }} container justifyContent={{ xl: 'center', sm: 'space-evenly' }}>
            <Grid item xs={2}>
              <Typography variant='h4' sx={{ fontFamily: 'Poppins', fontWeight: '800', color: '#696F79' }}>
                Quiz Time
              </Typography>
            </Grid>
            <Grid item md={6} lg={4} xl={3} container justifyContent="space-around">
              {links.map((link, index) => (
                <Button key={index} variant='h4' sx={{
                  p: '7px 22px',
                  fontSize: '18px',
                  color: '#696F79',
                  background: 'white',
                  borderRadius: '12px',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  ':hover': { color: 'white', background: '#696F79' },
                }}>
                  <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    to={(link.split(' ').join('_').toLowerCase() === 'home')
                      ? '/'
                      : link.split(' ').join('_').toLowerCase()}>
                    {link}
                  </Link>
                </Button>
              ))}
            </Grid>
            <Grid item xs={3} textAlign='center'>
            <TextField
                sx={{ borderRadius: '20px', ml: 'auto', display: `${pathname === '/' ? 'inline-block' : 'none'}` }}
                id="standard-bare"
                variant="outlined"
                label="Search Quiz"
                onChange={handleChangeSearch}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </Grid>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
