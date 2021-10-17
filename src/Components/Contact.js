import * as React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
    fields: {
      marginBottom: 40,
      display: 'block'
    },
});

export default function Contact() {
    const classes = useStyles();
  return (
    <Container
      component="form"
      autoComplete="off"
    >
      <div>
        <h1>Contact Me</h1>
        <h3>Email: jefarth.dev@gmail.com</h3>
        <h3>Google Messages: (720) 515-7306</h3>
      </div>
      <div>
        <TextField
        className={classes.fields}
          style={{ marginBottom: "20px", marginTop: "20px" }}
          id="outlined-error"
          label="Name"
          fullWidth
          required
        />
        <TextField
        className={classes.fields}
        style={{ marginBottom: "20px" }}
          id="outlined-error-helper-text"
          label="Email"
          fullWidth
          required
        />
         <TextField
         className={classes.fields}
         style={{ marginBottom: "20px" }}
          id="outlined-error-helper-text"
          label="Message"
          fullWidth
          required
          multiline
          rows={4}
        />
        <Button variant="outlined" style={{ marginBottom: "20px" }}>Submit</Button>
        <h5>*Form currently does not function</h5>
      </div>
    </Container>
  );
}
