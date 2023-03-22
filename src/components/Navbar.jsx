import { Component } from 'react';
import { AppBar, Button, Grid, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system';
import DrawerComp from './DrawerComp';

export default class Navbar extends Component {

  state = {
    tabNumber: 0
  }

  constructor() {
    super();
  }

  render() {
    const { links } = this.props;
    return (
      <AppBar position='relative'>
        <Toolbar>
          <Typography sx={{ display: { xs: 'flex', md: 'none' } }}>
            <HomeIcon />
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: "auto" }}>
            <DrawerComp links={links} />
          </Box>
          <Grid sx={{ placeItems: "center", display: { xs: 'none', md: 'flex' } }} container>
            <Grid item xs={2}>
              <Typography>
                <HomeIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={this.state.tabNumber}
                onChange={(e, number) => this.setState({ tabNumber: number })}
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
        </Toolbar>
      </AppBar>
    );
  }
}
