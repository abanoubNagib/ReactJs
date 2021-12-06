import  { useState , useEffect } from "react";
import Validation from "react";

const useForm = (submitForm) => {


const [values, setValues] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect , setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
      if(Object.keys(errors).length === 0 && dataIsCorrect){
          submitForm(true);
      }
  }, [dataIsCorrect, errors, submitForm]);
  return {handleChange , handleFormSubmit , values , errors};
};

export default useForm;