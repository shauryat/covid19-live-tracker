import React from 'react';
import axios from 'axios';

import {
    AreaChart, Area , XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';

  export default class MainChart extends React.Component {

    state = {
        graphstati: [],
    
      }
    
      componentDidMount() {
        axios.get(`https://api.covid19india.org/data.json`)
          .then(res => {
            const graphstati = res.data.cases_time_series;
            this.setState({ graphstati : graphstati });
          })
      }
  

    render() {
        return (
            <div style={{ width: '99%', height: 250 }}>
            <ResponsiveContainer>
            <AreaChart
            data={this.state.graphstati.slice(45)}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
          <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#3949ab" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#3949ab" stopOpacity={0}/>
    </linearGradient>
    </defs>
           
            <XAxis dataKey="date" stroke="#8884d8"/>
            <YAxis domain={[0, dataMax => (dataMax * 19)]} stroke="#8884d8"/>
            <CartesianGrid strokeDasharray="4 4" />
            <Tooltip />
            <Area dataKey={this.props.info} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" 
            isAnimationActive={true}/>
          </AreaChart>
          </ResponsiveContainer>
          </div>
            );
        }
      }