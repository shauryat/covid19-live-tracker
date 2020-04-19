import React from 'react';
import PersonList from './components/api';
import Header from './components/header';
import Ender from './components/Ender';
import StatewiseTable from './components/table';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import './main.css'



function App() {
  return (
    <div className="home">
    <ThemeProvider theme={theme}>
     <Header/>
      <PersonList/>
      <StatewiseTable/>
      <Ender/>
    </ThemeProvider>
    </div>
  );
}

export default App;
