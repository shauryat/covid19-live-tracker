import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Hero } from 'react-bulma-components';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Header(props) {
   
  
          return (
        <div>
        <AppBar color="transparent" position="relative">
        <Toolbar> 
           <Typography variant="h6">India Covid-19 Live Tracker</Typography>
             
        </Toolbar>
      </AppBar>
        <Hero size="small">
        <Hero.Body>
       <Typography variant="subtitle1" align="center" color="primary" display="block"> 
       Please Stay at your Home for your as well other's safety & well being
       </Typography>
        </Hero.Body>
      </Hero>
    
        </div>
    );
};

