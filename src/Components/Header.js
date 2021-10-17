import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import '../App.css';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #682ae9 30%, #FE6B8B 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'dark',
      height: 60,
      width: '100%',
      padding: '0px 10px',
      textAlign: 'center',
    },
  });

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.root}>
            {/* Navbar */}
        <Toolbar sx={{ display: 'flex', flexDirection: 'row' }}>
          <Button component={Link} to="/" color = "inherit" className="sizing">.main()</Button>
          <Button component={Link} to="/aboutme" color="inherit" className="sizing">.aboutMe()</Button>
          <Button component={Link} to="/projects" color="inherit" className="sizing">.projects()</Button>
          <Button component={Link} to="/contact" color="inherit" className="sizing">.contactMe()</Button>
          <IconButton
            size="large"
            edge="center"
            color="inherit"
            aria-label="github"
            sx={{ mr: 2 }}
            href="https://github.com/jefarth"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="linkedIn"
            sx={{ mr: 2 }}
            href="https://www.linkedin.com/in/jeremiah-farthing"
          >
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}