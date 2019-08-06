/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { navigate } from "gatsby";
import FormState from "../containers/FormState";
import { auth } from "../firebase";
import Form from "./FormBase";
import Input from "./Input";
import Button from "./Button";

const PasswordResetForm = () => {
  const { setErrorMessage } = FormState.useContainer();
  const [email, setEmail] = React.useState("");

  return (
    <Form
      onSubmit={async event => {
        event.preventDefault();
        try {
          await auth.sendPasswordResetEmail(email);
          navigate("/");
        } catch (error) {
          setErrorMessage(error.message);
        }
      }}
    >
      <Input
        label="Email"
        type="text"
        placeholder="email@example.com"
        value={email}
        sx={{ mb: 3 }}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <Button type="submit" css={{ width: "100%" }}>
        Send email
      </Button>
    </Form>
  );
};

export default PasswordResetForm;
