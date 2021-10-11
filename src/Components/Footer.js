import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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

const Footer = () => {
    const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - Jeremiah Farthing's Portfolio </h4>
      </div>
    </footer>
  );
};

export default Footer;