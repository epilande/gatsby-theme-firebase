/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import * as React from "react";
import { navigate } from "gatsby";
import FormState from "../containers/FormState";
import { auth } from "../firebase";
import Form from "./FormBase";
import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  const { setFormType, setErrorMessage } = FormState.useContainer();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Form
      onSubmit={async event => {
        event.preventDefault();
        try {
          await auth.signInWithEmailAndPassword(email, password);
          navigate("/");
        } catch (error) {
          setErrorMessage(error.message);
        }
      }}
    >
      <Input
        label="Email: "
        type="text"
        placeholder="Email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <Input
        label="Password: "
        type="password"
        placeholder="Password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      <Button type="submit" css={{ width: "100%" }}>
        Log in
      </Button>

      <Styled.hr />

      <Button
        sx={{
          width: "100%",
          bg: "white",
          color: "primary",
          p: 0,
          fontSize: 0,
          fontWeight: "body",
        }}
        onClick={event => {
          event.preventDefault();
          setFormType("passwordReset");
        }}
      >
        Forgot your password?
      </Button>
    </Form>
  );
};

export default LoginForm;
