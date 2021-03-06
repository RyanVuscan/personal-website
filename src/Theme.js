import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const colorScheme = {
  primary: {
    main: '#2e2e2e',
  },
  secondary: {
    main: '#f2f2f2',
  },
  info: {
    main: '#262626',
  },
  success: {
    main: '#33cc33',
  },
  error: {
    main: '#ff0000',
  },
  warning: {
    main: '#ffad33',
  },
  text: {
    primary: '#f2f2f2',
    disabled: '#eeeeee',
  },
  paper: {
    color: '#383838',
  },
};

const theme = createMuiTheme({
  shape: {
    borderRadius: 12,
  },
  palette: {
    primary: {
      main: colorScheme.primary.main,
    },
    secondary: {
      main: colorScheme.secondary.main,
    },
    info: {
      main: colorScheme.info.main,
    },
    success: {
      main: colorScheme.success.main,
    },
    error: {
      main: colorScheme.error.main,
    },
    warning: {
      main: colorScheme.warning.main,
    },
    text: {
      primary: colorScheme.text.primary,
      secondary: colorScheme.text.secondary,
      disabled: colorScheme.text.disabled,
    },
  },
  typography: {
    fontFamily: ['Raleway', 'Titilliumweb'].join(','),
    h1: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: '3rem',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: '2rem',
    },
    h3: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: '1.5rem',
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: '1.2rem',
    },
    h5: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
    h6: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
    subtitle1: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
    subtitle2: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
    body1: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: '1rem',
    },
    button: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
    },
    caption: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: '0.8rem',
    },
    overline: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: colorScheme.paper.color,
      },
    },

    MuiFormLabel: {
      root: {
        color: colorScheme.secondary.main,
        '&$focused': {
          color: colorScheme.secondary.main,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
