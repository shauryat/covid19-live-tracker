import { createMuiTheme } from '@material-ui/core/styles';



export default createMuiTheme({

 palette : {
     type:'dark',
     
    primary : {
        main : '#2196f3'
    },
    secondary : {
        main: '#3949ab'
    },

    background : {
        paper : '#303030'

        
    }
 },
 overrides: {


    MuiTypography : {

        colorTextPrimary : {
            color:'#bdbdbd'
        },

        colorTextSecondary: {
            color:'#1de9b6'
        },
        colorError: {
            color:'#ff1744'
        },

    },

  },

  typography: {
    h6: {
      color:'#fff'
    },
    
  },


});