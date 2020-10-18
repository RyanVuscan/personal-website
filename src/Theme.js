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
    primary: '#000',
    secondary: '#2e2e2e',
    disabled: '#eeeeee',
  },
};

const theme = createMuiTheme({
  shape: {
    borderRadius: 12,
  },
  palette: {
    type: 'light',
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
      fontSize: 60,
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
    h3: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
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
      fontSize: 60,
    },
    body2: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
    button: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
    caption: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
    overline: {
      fontFamily: 'Raleway',
      fontWeight: 'normal',
      fontSize: 60,
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#123456',
      },
    },
  },
});

export default responsiveFontSizes(theme);
