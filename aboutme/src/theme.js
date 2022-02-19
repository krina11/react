import { createMuiTheme, responsiveFontSizes } 
  
from '@materialui/core/styles';
  
const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        background: {
          default: '#009900',
        },
        primary: {
          main: 'white',
        },
        secondary: {
          main: '#E769A6',
        },
        error: {
          main: '#D72A2A',
        },
        warning: {
          main: '#FC7B09',
        },
        info: {
          main: '#6B7D6A',
        },
        success: {
          main: '#09FE00',
        },
        text: {
          primary: '#000000',
          secondary: '#FFFFFF',
        },
      },
}));

export default theme;