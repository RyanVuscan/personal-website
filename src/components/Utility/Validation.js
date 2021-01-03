const validateEmail = (email, setEmailError) => {
  const valid = email.length > 0 && /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(email);
  setEmailError(!valid);
  return valid;
};

const validatePhoneNumber = (phoneNumber, setPhoneNumberError) => {
  const valid = phoneNumber.length === 0 || /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(phoneNumber);
  setPhoneNumberError(!valid);
  return valid;
};

const validateMessage = (message, setMessageError) => {
  const valid = message.length > 0;
  // /^[\sa-zA-Z @.:;,?#$%^&*_+=~`"'|(){}\-/\\[\]]+$/.test(message);
  setMessageError(!valid);
  return valid;
};

export { validateEmail, validatePhoneNumber, validateMessage };
