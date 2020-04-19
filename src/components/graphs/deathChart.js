import React from 'react';
import axios from 'axios';

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';

  export default class MainChartThree extends React.Component {

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
            data={this.state.graphstati.slice(47)}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
          <defs>
          <linearGradient id="colorUvng" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={this.props.linecolor}  stopOpacity={0.8}/>
            <stop offset="95%" stopColor={this.props.linecolor} stopOpacity={0}/>
          </linearGradient>
          </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date"  stroke={this.props.linecolor}/>
            <YAxis type="number" domain={[0, dataMax => (dataMax * 10)]}  stroke={this.props.linecolor}/>
            <Tooltip />
            <Area dataKey={this.props.info} stroke={this.props.linecolor} fillOpacity={1} fill="url(#colorUvng)"/>
          </AreaChart>
          </ResponsiveContainer>
          </div>
            );
        }
      }