import React from 'react';
import PersonList from './components/api';
import Header from './components/header';
import Ender from './components/Ender';
import StatewiseTable from './components/table';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';




function App() {
  return (
    <ThemeProvider theme={theme}>
     <Header/>
      <PersonList/>
      <StatewiseTable/>
      <Ender/>
    </ThemeProvider>
  );
}

export default App;
