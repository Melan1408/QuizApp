import React from 'react';
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  useMediaQuery,
  useTheme,
  TextField,
  IconButton,
} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import DrawerComp from './DrawerComp';
import BasicText from './styled/BasicText';

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
          <BasicText variant='h4' sx={{ fontWeight: '800' }}>
            Quiz Time
          </BasicText>
          <DrawerComp links={links} />
        </>
          : <Grid sx={{ placeItems: 'center' }} container justifyContent={{ xl: 'center', sm: 'space-evenly' }}>
            <Grid item xs={2}>
              <BasicText variant='h4' sx={{ fontWeight: '800' }}>
                Quiz Time
              </BasicText>
            </Grid>
            <Grid item md={6} lg={4} xl={3} container justifyContent="space-around">
              {links.map((link, index) => (
                <Button key={index} variant='h4' component={Link}
                  to={(link.split(' ').join('_').toLowerCase() === 'home')
                    ? '/'
                    : link.split(' ').join('_').toLowerCase()}
                  sx={{
                    p: '7px 22px',
                    fontSize: '18px',
                    color: '#696F79',
                    background: 'white',
                    borderRadius: '12px',
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    ':hover': { color: 'white', background: '#696F79' },
                  }}>
                  {link}
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
