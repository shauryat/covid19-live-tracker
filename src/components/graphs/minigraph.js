import React from 'react';
import { LineChart, Line } from 'recharts';

import axios from 'axios';

export default class Graph extends React.Component {
    state = {
      graphstats: [],
  
    }
  
    componentDidMount() {
      axios.get(`https://api.covid19india.org/data.json`)
        .then(res => {
          const graphstats = res.data.cases_time_series;
          this.setState({ graphstats : graphstats });
        })
    }


    render() {
        return ( 

            <LineChart width={99} height={33} data={this.state.graphstats}>
            <Line type="monotone" dataKey={this.props.dataset} stroke={this.props.color} strokeWidth={2} dot={false}
            isAnimationActive={true} animationBegin={0} animationDuration={2000}/>
          </LineChart>

            )
        }
      }

