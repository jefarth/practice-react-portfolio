import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'dark',
      height: 45,
      width: '100%',
      padding: '0px 10px',
      textAlign: 'center',
    },
  });



const theme = createTheme();

export default function Footer() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer" className={classes.root}>
        <Typography variant="h6" align="center" gutterBottom>
          Jeremiah Farthing's Portfolio
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}