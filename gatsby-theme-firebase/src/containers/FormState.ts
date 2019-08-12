import * as React from "react";
import { createContainer } from "unstated-next";

type FormType = "login" | "signup" | "passwordReset";

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

export type FormStateType = ReturnType<typeof useForm>;

const FormState = createContainer(useForm);

export default FormState;
