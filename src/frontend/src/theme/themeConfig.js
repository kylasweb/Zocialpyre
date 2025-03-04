import { createTheme } from '@mui/material/styles';

const lightPalette = {
  mode: 'light',
  primary: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2',
    contrastText: '#fff',
  },
  secondary: {
    main: '#ff4081',
    light: '#ff79b0',
    dark: '#c60055',
    contrastText: '#fff',
  },
  background: {
    default: '#f8f9fa',
    paper: '#ffffff',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};

const darkPalette = {
  mode: 'dark',
  primary: {
    main: '#556ee6',
    light: '#7388ed',
    dark: '#4458b8',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#50a5f1',
    light: '#73b7f4',
    dark: '#4084c1',
    contrastText: '#ffffff',
  },
  background: {
    default: '#222736',
    paper: '#2a3042',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a6b0cf',
    disabled: '#545a6d',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};

const getThemeOptions = (mode) => ({
  palette: mode === 'dark' ? darkPalette : lightPalette,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '8px 20px',
          textTransform: 'none',
          fontWeight: 500,
          transition: 'all 0.15s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: `0 2px 6px ${mode === 'dark' ? 'rgba(85, 110, 230, 0.4)' : 'rgba(85, 110, 230, 0.25)'}`,
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #556ee6 0%, #7388ed 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #4458b8 0%, #556ee6 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: `1px solid ${mode === 'dark' ? 'rgba(166, 176, 207, 0.1)' : 'rgba(230, 235, 245, 0.8)'}`,
          boxShadow: `0 2px 4px ${mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.03)'}`,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 4px 8px ${mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.06)'}`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export const createAppTheme = (mode) => createTheme(getThemeOptions(mode));