import * as React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
    fields: {
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

export default function Contact() {
    const classes = useStyles();
  return (
    <div className={classes.fields}>
      <Container
        component="form"
        autoComplete="off"
        marginBottom= "40px"
        display="block"
        noValidate
      >
        <div>
          <h1 style={{ marginBottom: "20px", marginTop: "-4px", paddingTop: "20px" }} >Contact Me</h1>
          <h3>Email: jefarth.dev@gmail.com</h3>
          <h3>Google Messages: (720) 515-7306</h3>
        </div>
        <div>
          <TextField
            style={{ marginBottom: "20px", marginTop: "20px" }}
            id="filled-required"
            variant="filled"
            label="Name"
            fullWidth
            required
          />
          <TextField
          style={{ marginBottom: "20px" }}
            id="filled-required"
            variant="filled"
            label="Email"
            fullWidth
            required
          />
          <TextField
          style={{ marginBottom: "20px" }}
            id="filled-required"
            variant="filled"
            label="Message"
            fullWidth
            required
            multiline
            rows={4}
          />
          <Button variant="contained" style={{ marginBottom: "20px" }}>Submit</Button>
          <h5>*Form currently does not function</h5>
        </div>
      </Container>
    </div>
  );
}
