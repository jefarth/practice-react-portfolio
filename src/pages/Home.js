import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #682ae9 30%, #FE6B8B 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'dark',
      height: '100vh',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

const Home = () => {
    const classes = useStyles();

    return (
        <main id="main" style={{ marginTop: "-4px" }}>
            <div className={classes.root}>
                <h1>Jeremiah Farthing</h1>
                <div> Full Stack Web Developer </div>
            </div>
        </main>
    );
};

export default Home;