import React from 'react';
import { LineChart, Line , YAxis} from 'recharts';

import axios from 'axios';

export default class GraphTwo extends React.Component {
  state = {
    graphstats: [],

  }

  componentDidMount() { 
    this.getGraphData()
  }

  getGraphData = async () => {
    let res = await axios.get("https://api.covid19india.org/data.json");
    const graphstats = res.data.cases_time_series;
    this.setState({graphstats:graphstats})
  };

    render() {
        return ( 
            <div>
            {this.state.graphstats.length === 0 ? ( <div>Loading...</div>) : (
            <LineChart width={80} height={33} data={this.state.graphstats.slice(60,-1)}>
            <YAxis domain={[0, 500]} hide={true}/>
            <Line type="monotone" dataKey={this.props.dataset} stroke={this.props.color} strokeWidth={2} dot={false}/>
          </LineChart>
         )} </div>
            )
        }
      }

