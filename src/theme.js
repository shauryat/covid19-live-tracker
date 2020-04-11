import { createMuiTheme } from '@material-ui/core/styles';



export default createMuiTheme({

 palette : {
    primary : {
        main : '#2196f3'
    },
    secondary : {
        main: '#3949ab'
    },
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



  }


});