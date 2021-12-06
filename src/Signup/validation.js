const Validation = (values) => {
  let errors = {};

  if (!values.fullname) {
    errors.fullname = "Name Is Required.";
  }

  if (!values.email) {
    errors.email = "Email Is Required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is Invalid";
  }

  if (!values.username) {
    errors.username = "Username Is Required.";
  }

  if (!values.password) {
    errors.password = "Password Is Required.";
  } else if (!/^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i.test(values.password)) {
    errors.password = "Password is invalid";
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = "Return your Password Is Required.";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "Password Not Match.";
  }

  return errors;
};

export default Validation;
