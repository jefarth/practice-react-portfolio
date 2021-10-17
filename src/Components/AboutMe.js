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
            <div style={{ marginBottom: "20px", marginTop: "-4px", paddingTop: "20px" }}>
                <h1 style={{ paddingBottom: "100px", paddingTop: "50px" }}>About Me</h1>
                <h3>
                I am Jeremiah Farthing. I am a born and raised Colorado native.
                I have one dog and three cats I love and take care of.
                Previously I had spent most of my life doing physical labor and my main skill set is held as an Automotive Technician. 
                </h3>
            </div>
            <div style={{ paddingBottom: "100px", paddingTop: "100px" }}>
                <h3>Skills</h3>
                <h3>
                I currently know how to work with the languages of HTML, CSS, and Javascript. I hold knowledge of how to use jQuery, Node.js, Express.js,
                React.js, Database Theory, MongoDB, MySQL, Command Line, and Git. I have also gone over Computer Science applied to Javascript.
                </h3>
            </div>
        </div>
    )
}
