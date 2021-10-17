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
      </div>
    </Container>
  );
}
