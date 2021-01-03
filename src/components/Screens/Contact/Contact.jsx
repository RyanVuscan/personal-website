// @ts-check
import { Box, Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
// import firebase from '../../firebase';
import { validateEmail, validatePhoneNumber, validateMessage } from '../../Utility/Validation';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // const submitToDB = () => {
  //   firebase
  //     .database()
  //     .ref('contacts')
  //     .push({
  //       email,
  //       phoneNumber: phoneNumber || null,
  //       message,
  //     });
  // };

  const handleSubmitAccountInfo = (event) => {
    event.preventDefault();
    if (
      validateEmail(email, setEmailError) &&
      validatePhoneNumber(phoneNumber, setPhoneNumberError) &&
      validateMessage(message, setMessageError)
    ) {
      setSubmitted(true);
      // submitToDB();
      return true;
    }
    validateEmail(email, setEmailError);
    validatePhoneNumber(phoneNumber, setPhoneNumberError);
    validateMessage(message, setMessageError);
    return false;
  };

  return (
    <div style={{ padding: '20px 10%' }}>
      <Paper elevation={12} style={{ borderRadius: '20px', margin: '30px 0', padding: '2rem' }}>
        <Box height="100%" display="flex" flexDirection="column" alignItems="center">
          <a href="https://www.linkedin.com/in/ryanvuscan/">
            <img
              alt="LinkedIn Logo"
              src={`${process.env.PUBLIC_URL}/linkedIn.png`}
              style={{
                width: '3rem',
                margin: 'auto',
              }}
            />
          </a>
          <Typography variant="h3" align="center" style={{ marginTop: '1rem' }}>
            Connect with me on LinkedIn!
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={12} style={{ borderRadius: '20px', margin: '30px 0', padding: '2rem' }}>
        <Box height="100%" display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h1" align="center" style={{ marginBottom: '1rem' }}>
            Get in touch!
          </Typography>
          <Typography variant="body1" align="center" style={{ marginBottom: '2rem' }}>
            {"I'm always looking for new opportunities and exciting projects to take part in! " +
              "Whether you have questions, or just want to say hi, send me a message and I'll get " +
              'back to you soon!'}
          </Typography>
          <form
            onSubmit={handleSubmitAccountInfo}
            style={{
              width: '80%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            <TextField
              id="email"
              label="Email"
              error={emailError}
              helperText="Please enter a valid email!"
              FormHelperTextProps={{ style: { visibility: emailError ? 'visible' : 'hidden' } }}
              style={{ marginBottom: '1rem' }}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ style: { WebkitBoxShadow: '0 0 0 1000px transparent inset' } }}
            />
            <TextField
              id="phoneNumber"
              label="Phone Number (Optional)"
              error={phoneNumberError}
              helperText="Please enter a valid phone number!"
              FormHelperTextProps={{ style: { visibility: phoneNumberError ? 'visible' : 'hidden' } }}
              style={{ marginBottom: '1rem' }}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <TextField
              id="message"
              label="Message"
              error={messageError}
              helperText="Please enter a message!"
              FormHelperTextProps={{ style: { visibility: messageError ? 'visible' : 'hidden' } }}
              style={{ marginBottom: '1rem' }}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" variant="outlined" size="large" style={{ alignSelf: 'center', marginBottom: '1rem' }}>
              Send
            </Button>
          </form>
          {submitted && (
            <Typography variant="body1" align="center">
              {"Sent! I'll get back to you soon :)"}
            </Typography>
          )}
        </Box>
      </Paper>
    </div>
  );
};

export default Contact;
