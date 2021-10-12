import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Jeremiah Farthing's Portfolio
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Please contact me at jefarth.dev@gmail.com
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}