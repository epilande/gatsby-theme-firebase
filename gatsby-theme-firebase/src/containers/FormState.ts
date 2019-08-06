import * as React from "react";
import { createContainer } from "unstated-next";
import { Forms } from "../components/Form";

type FormType = keyof typeof Forms;

const initialState = {
  formType: "login" as FormType,
  errorMessage: "",
};

function useForm(state = initialState) {
  const [formType, setFormType] = React.useState(state.formType);
  const [errorMessage, setErrorMessage] = React.useState(state.errorMessage);

  return {
    formType,
    setFormType: (type: FormType) => {
      setErrorMessage("");
      setFormType(type);
    },
    errorMessage,
    setErrorMessage,
  };
}

const FormState = createContainer(useForm);

export default FormState;
