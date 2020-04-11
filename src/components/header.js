import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Hero } from 'react-bulma-components';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({

    toolbarMargin : {
      ...theme.mixins.toolbar,
      marginBottom: "3rem",
    },
  
    logo : {
      height: "7rem"
    },
  
    tabsContainer : {
      marginLeft: "auto",
    }
  }))
  

export default function Header(props) {
    const classes = useStyles()   
  
          return (
        <div>
        <AppBar color="transparent" position="relative">
        <Toolbar> 
           <Typography variant="h6">India Covid-19 Live Tracker</Typography>
              <Tabs className={classes.tabsContainer}>
    
             </Tabs>
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

//  <Tab label="Statewise"/>