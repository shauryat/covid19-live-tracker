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
import { teal } from '@material-ui/core/colors';


import './home.css';
import Daily from './graphs/bargraph';




export default class StatewiseTable extends React.Component {
  
    state = {
        rows: []
      }
    
    componentDidMount() {
      this.getGoods();
    }

    getGoods = async () => {
      let res = await axios.get("https://api.covid19india.org/data.json");
      const rows = res.data.statewise;
      this.setState({ rows: rows})
    }
    

    render() {
        return (

          
          
          <div>
          {this.state.rows.length === 0 ? ( <div> Loading... </div>)  : ( <div>
          <Typography variant="h6" align="center">Daily New Cases</Typography>
          <Typography variant="subtitle2" align="center">Bar Chart (Daily New Cases)</Typography>
          <Daily infoo="dailyconfirmed" linecolorr="#673ab7" numberr="2.5"/>
          <br/>
          <br/>
          <Typography variant="h6" align="center">Statewise Distribuition</Typography>
          <br/>
           <Grid container spacing={0}>
           <Grid item xs={12}>
           <Paper elevation={0}>
          <TableContainer>
            <Table size="medium">
              <TableHead>
                <TableRow>
                  <TableCell>State </TableCell>
                  <TableCell align="center"><Typography variant="subtitle2" color="error">Confrd</Typography></TableCell>
                  <TableCell align="center"><Typography variant="subtitle2" color="Primary">Actv</Typography></TableCell>
                  <TableCell align="center"><Typography variant="subtitle2" color="textSecondary">Recvrd</Typography></TableCell>
                  <TableCell align="center"><Typography variant="subtitle2" color="textPrimary">Died</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
          {this.state.rows.map((row) => (
            <TableRow key={row.state}>
              <TableCell align="center">
                {row.state} 
               </TableCell> 
              <TableCell align="center">{row.confirmed}
              <br/> {row.deltaconfirmed === '0' ? (null) : ( <div>
                <ArrowUpwardIcon color="error" style={{ fontSize: 15 }}/>
                <Typography variant="caption" color="error">{row.deltaconfirmed}</Typography>
                </div>    )}</TableCell>
              <TableCell align="center">{row.active}</TableCell>
              <TableCell align="center">{row.recovered}  <br/> {row.deltarecovered === '0' ? (null) : ( <div>
                <ArrowUpwardIcon color="error" style={{ fontSize: 15, color: teal[600] }}/>
                <Typography variant="caption" color="textSecondary">{row.deltarecovered}</Typography>
                </div>    )}</TableCell>
              <TableCell align="center">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    <div style={{marginTop:'1rem'}}>
    <Typography variant="h6" align="center">Daily Recovered</Typography>
    <Typography variant="subtitle2" align="center">Bar Chart (Daily New Recoveries)</Typography>
    <Daily infoo="dailyrecovered" linecolorr="#1de9b6" numberr="1"/>
    <br/>
    </div>
    <div style={{marginTop:'1rem'}}>
    <Typography variant="h6" align="center">Daily Deaths</Typography>
    <Typography variant="subtitle2" align="center">Bar Chart (Daily New Deaths)</Typography>
    <Daily infoo="dailydeceased" linecolorr="#e57373" numberr="1"/>
    <br/>
    </div>
   
          </Grid>
          </Grid>
         </div> )}
         </div> 
         
   
        )
    }
}
