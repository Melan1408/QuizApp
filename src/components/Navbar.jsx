import React, { useState } from 'react';
import { AppBar, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system';
import DrawerComp from './DrawerComp';

const Navbar = ({links}) => {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [tabNumber, setTabNumber] = useState(0);

    return (
      <AppBar>
        <Toolbar>
          {isMatch ? <>
            <Typography>
              <HomeIcon />
            </Typography>
            <DrawerComp links={links} />
          </> :
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={2}>
                <Typography>
                  <HomeIcon />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={tabNumber}
                  onChange={(e, number) => setTabNumber(number)}
                >
                  {links.map((link, index) => (
                    <Tab key={index} label={link} />
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={3}>
                <Box display="flex">
                  <Button sx={{ marginLeft: "auto", backgroundColor: "#415b8e" }} variant="contained">
                    Login
                  </Button>
                  <Button sx={{ marginLeft: 1, backgroundColor: "#415b8e" }} variant="contained">
                    Signup
                  </Button>
                </Box>
              </Grid>
            </Grid>
          }

        </Toolbar>
      </AppBar>
    );
}

export default Navbar;
