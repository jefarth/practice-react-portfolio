import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import rpgPic from '../images/rpg-character.png';
import notePic from '../images/note-taker.png';
import weatherPic from '../images/weather-dashboard.png'

const theme = createTheme();

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #682ae9 30%, #FE6B8B 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'dark',
    height: '100vh',
    width: '100%',
    padding: '0px 10px',
    textAlign: 'center',
  },
});

export default function Projects() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={classes.root} style={{ marginTop: "-4px", paddingTop: "20px" }}>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Projects
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* Project */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={rpgPic}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      RPG Character Creator
                    </Typography>
                    <Typography>
                      Create an account to gain the ability to make a custom character for your next RPG adventure!
                    </Typography>
                  </CardContent>
                  <CardActions  sx={{ paddingLeft: "25px" }}>
                    <Button size="small" href="https://jefarth-rpg-database.herokuapp.com/" target="_blank" >View on Heroku</Button>
                    <Button size="small" href="https://github.com/jefarth/rpg-character-sheet" target="_blank" >View on Github</Button>
                  </CardActions>
                </Card>
              </Grid>
              {/* Project */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={notePic}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Note Taker
                    </Typography>
                    <Typography>
                      Take notes and save them to view later!
                    </Typography>
                  </CardContent>
                  <CardActions  sx={{ paddingLeft: "25px"}}>
                    <Button size="small" href="https://jefarth-note-taker.herokuapp.com/" target="_blank" >View on Heroku</Button>
                    <Button size="small" href="https://github.com/jefarth/Note-Taker" target="_blank" >View on Github</Button>
                  </CardActions>
                </Card>
              </Grid>
              {/* Project */}
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={weatherPic}
                    alt="weather dashboard"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Weather Dashboard
                    </Typography>
                    <Typography>
                      Look up any city to get a weather forcast! Displays current weather information
                      as well as a five day forcast!
                    </Typography>
                  </CardContent>
                  <CardActions  sx={{ paddingLeft: "25px"}}>
                    <Button size="small" href="https://jefarth.github.io/Weather-Dashboard/" target="_blank" >View on Heroku</Button>
                    <Button size="small" href="https://github.com/jefarth/Weather-Dashboard" target="_blank" >View on Github</Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}