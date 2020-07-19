const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = "What's your last name?"
  }
  if (!values.lastName) {
    errors.lastName = "What's your last name?"
  }
  if (!values.email) {
    errors.email = "What's your email?";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.sex) {
    errors.sex = "Please complete it!"
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = "What's your favorite colour?"
  }
  if (!values.occupation) {
    errors.occupation = "What's your favorite occupation?"
  }
  if (!values.city) {
    errors.city = "Where you live?"
  }
  return errors
};

export default validate
