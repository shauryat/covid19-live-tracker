import { createMuiTheme } from '@material-ui/core/styles';



export default createMuiTheme({

 palette : {
    primary : {
        main : '#64b5f6'
    },
    secondary : {
        main: '#7986cb'
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
            color:'#e57373'
        },

    },



  }


});