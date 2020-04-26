import React from 'react';
import axios from 'axios';


import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
  } from 'recharts';

  export default class Daily extends React.Component {

    state = {
        graphstatil: [],
    
      }
    
      componentDidMount() {
        axios.get(`https://api.covid19india.org/data.json`)
          .then(res => {
            const graphstatil = res.data.cases_time_series;
            this.setState({ graphstatil : graphstatil });
          })
      }
  

    render() {
        return (
          
         
            <div style={{ width: '95%', height: 200 }}>
            <br/>
            <ResponsiveContainer>
            <BarChart
            data={this.state.graphstatil.slice(70)}
            margin={{
              top: 0, right: 0, left: -5, bottom: 0,
            }} >
         
           
            <XAxis dataKey="date" strokeWidth={3}/>
            <YAxis domain={[0, dataMax => (dataMax * this.props.numberr)]} strokeWidth={4}/>
            <Tooltip />
            <Bar dataKey={this.props.infoo} fill={this.props.linecolorr}  />
          </BarChart>
          </ResponsiveContainer>
          <br/>
          </div>
          
         
            );
        }
      }