import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core'; 
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import axios from 'axios';


import './home.css';
import MainChart from './graphs/maingraph'



export default class StatewiseTable extends React.Component {
  
    state = {
        rows: []
      }
    
      componentDidMount() {
        axios.get(`https://api.covid19india.org/data.json`)
          .then(res => {
            const rows = res.data.statewise;
            this.setState({ rows });
          })
      }

    

    render() {
        return (
          
          <div style={{marginTop:'3rem'}}>
          <Typography variant="h5" align="center">Daily Timeline</Typography>
          <MainChart info="dailyconfirmed" linecolor="#7986cb"/>
          <br/>
          <Typography variant="h5" align="center">Statewise Distribuition</Typography>
           <Grid container spacing={3}>
           <Grid item xs={12}>
           <Paper elevation={0}>
          <TableContainer>
            <Table size="medium">
              <TableHead>
                <TableRow>
                  <TableCell>State <ArrowUpwardIcon color="error" style={{ fontSize: 15 }}/> cases</TableCell>
                  <TableCell align="center">Confrd</TableCell>
                  <TableCell align="center">Actv</TableCell>
                  <TableCell align="center">Recvrd</TableCell>
                  <TableCell align="center">Died</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
          {this.state.rows.map((row) => (
            <TableRow key={row.state}>
              <TableCell align="center">
                {row.state} 
                <br/>
                <ArrowUpwardIcon color="error" style={{ fontSize: 15 }}/>
                <Typography variant="caption" color="error">{row.deltaconfirmed}</Typography>
              </TableCell>
              <TableCell align="center">{row.confirmed}</TableCell>
              <TableCell align="center">{row.active}</TableCell>
              <TableCell align="center">{row.recovered}</TableCell>
              <TableCell align="center">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
          </Grid>
          </Grid>
          </div>

            
        )
    }
}
