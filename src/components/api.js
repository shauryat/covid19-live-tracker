import React from 'react';
import axios from 'axios';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Grid, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import { Typography } from '@material-ui/core';
import Graph from './graphs/minigraph';
import GraphTwo from './graphs/minigraphTwo';


import './home.css';




export default class PersonList extends React.Component {
  state = {
    persons: [],

  }
 


  componentDidMount() {
   this.getData();
  }

  getData = async () =>{
  let res = await  axios.get("https://api.covid19india.org/data.json");
  const persons = res.data.statewise;
        this.setState({ persons : persons })

  };
  render() {
    return (
    <div>
    {this.state.persons.length === 0 ? ( <div> Loading... </div>)  : ( 
  <div className="black">
  <Grid container spacing={0}>

  <Grid item xs={3}>

     <CardContent align="center">
        <Typography variant="h6" color="secondary">
       Total
        </Typography>
        <Typography color="textPrimary" variant="subtitle1"> +[
          { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.deltaconfirmed}/>)}
           ] </Typography>
        <Typography variant="h6" color="Secondary">
        { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.confirmed}/>)}
        </Typography>
        <Graph dataset="dailyconfirmed" color="#7986cb"/>
     </CardContent>
  
  </Grid>

  <Grid item xs={3}>
  
     <CardContent align="center">
        <Typography variant="h6" color="Primary">
      Active
        </Typography>
        <Typography color="textPrimary" variant="subtitle1"> 
        +[
        { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.deltaconfirmed - person.deltarecovered - person.deltadeaths}  />)}
         ] </Typography>
        <Typography variant="h6" color="Primary">
        { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.active}/>)}
        </Typography>
        <Graph dataset="dailyconfirmed" color="#64b5f6"/>
     </CardContent>
  </Grid>

  <Grid item xs={3}>
  
     <CardContent align="center">
        <Typography variant="h6" color="textSecondary">
      Recover
        </Typography>
        <Typography color="textPrimary" variant="subtitle1"> +[
          { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.deltarecovered}/>)}
           ] </Typography>
        <Typography variant="h6" color="textSecondary">
        { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.recovered}/>)}
        </Typography>
        <GraphTwo dataset="dailyrecovered" color="#1de9b6" numberr="10"/>
     </CardContent>
  </Grid>

  <Grid item xs={3}>
     <CardContent align="center">
        <Typography variant="h6" color="error">
       Deaths
        </Typography>
        <Typography color="textPrimary" variant="subtitle1"> +[
          { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.deltadeaths}/>)}
           ] </Typography>
        <Typography variant="h6" color="error">
        { this.state.persons.filter((person, idx) => idx < 1).map(person => <CountUp end={person.deaths}/>)}
        </Typography>
        <GraphTwo dataset="dailydeceased" color="#e57373" numberr="10"/>
     </CardContent>
  </Grid>
</Grid>
</div>
)} </div>
    
 
    )
  }
}