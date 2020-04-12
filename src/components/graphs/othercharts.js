import React from 'react';
import axios from 'axios';

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';

  export default class MainChartTwo extends React.Component {

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
            <div style={{ width: '95%', height: 200 }}>
            <ResponsiveContainer>
            <BarChart
            data={this.state.graphstati.slice(37)}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 200]}/>
            <Tooltip />
            <Bar dataKey={this.props.info} fill={this.props.linecolor}/>
          </BarChart>
          </ResponsiveContainer>
          </div>
            );
        }
      }