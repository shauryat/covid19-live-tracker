import React from 'react';
import axios from 'axios';

import {
  LineChart, Line, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer
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
            <div style={{ width: '95%', height: 200 }}>
            <ResponsiveContainer>
            <LineChart
            data={this.state.graphstati.slice(50,-1)}
            margin={{
              top: 0, right: 0, left: -5, bottom: 0,
            }}
           
            
          >
         
           
            <XAxis dataKey="date" strokeWidth={3}/>
            <YAxis domain={[0, dataMax => (dataMax * this.props.number)]} strokeWidth={4}/>
            
            <Tooltip />
            <Line type="monotone" dataKey={this.props.info} stroke={this.props.linecolor} strokeWidth={4} 
            activeDot={{ r: 6 }}  isAnimationActive={true} animationBegin={10} />
          </LineChart>
          </ResponsiveContainer>
          </div>
            );
        }
      }