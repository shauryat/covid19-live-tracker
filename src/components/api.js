import React from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Grid, Paper, Card, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import { Typography } from '@material-ui/core';

import './home.css';




export default class PersonList extends React.Component {
  state = {
    persons: [],

  }


  componentDidMount() {
    axios.get(`https://api.covid19india.org/data.json`)
      .then(res => {
        const persons = res.data.statewise;
        this.setState({ persons : persons });
      })
  }

  render() {
    return (
    
  
  <Grid container spacing={3}>

  <Grid item xs={6}>
  <Paper elevation={0}>
    <Card variant="outlined">
     <CardContent align="center">
        <Typography variant="h4" color="secondary">
       Total
        </Typography>
        <Typography color="textPrimary" variant="subtitle1"> +[
          { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.deltaconfirmed}/>)}
           ] </Typography>
        <Typography variant="h4" color="Secondary">
        { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.confirmed}/>)}
        </Typography>
     </CardContent>
    </Card>
  </Paper>
  </Grid>

  <Grid item xs={6}>
  <Paper elevation={0}>
    <Card variant="outlined">
     <CardContent align="center">
        <Typography variant="h4" color="Primary">
      Active
        </Typography>
        <Typography color="textPrimary" variant="subtitle1"> - </Typography>
        <Typography variant="h4" color="Primary">
        { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.active}/>)}
        </Typography>
     </CardContent>
    </Card>
  </Paper>
  </Grid>

  <Grid item xs={6}>
  <Paper elevation={0}>
    <Card variant="outlined">
     <CardContent align="center">
        <Typography variant="h4" color="textSecondary">
      Recovered
        </Typography>
        <Typography color="textPrimary" variant="subtitle1"> +[
          { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.deltarecovered}/>)}
           ] </Typography>
        <Typography variant="h4" color="textSecondary">
        { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.recovered}/>)}
        </Typography>
     </CardContent>
    </Card>
  </Paper>
  </Grid>

  <Grid item xs={6}>
  <Paper elevation={0}>
    <Card variant="outlined">
     <CardContent align="center">
        <Typography variant="h4" color="error">
       Deaths
        </Typography>
        <Typography color="textPrimary" variant="subtitle1"> +[
          { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.deltadeaths}/>)}
           ] </Typography>
        <Typography variant="h4" color="error">
        { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.deaths}/>)}
        </Typography>
     </CardContent>
    </Card>
  </Paper>
  </Grid>



</Grid>

  
 
    )
  }
}