import React from 'react'
import { makeStyles } from '@mui/styles';

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

export default function AboutMe() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <h3>About Me</h3>
                <p>
                I am Jeremiah Farthing. I am a born and raised Colorado native.
                I have one dog and three cats I love and take care of.
                Previously I had spent most of my life doing physical labor and my main skill set is held as an Automotive Technician. 
                </p>
            </div>
            <div>
                <h3>Skills</h3>
                <p>
                I currently know how to work with the languages of HTML, CSS, and Javascript. I hold knowledge of how to use jQuery, Node.js, Express.js,
                React.js, Database Theory, MongoDB, MySQL, Command Line, and Git. I have also gone over Computer Science applied to Javascript.
                </p>
            </div>
        </div>
    )
}
