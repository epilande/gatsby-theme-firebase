/** @jsx jsx */
import { jsx } from "theme-ui";
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

      <hr />

      <div>
        <button
          onClick={event => {
            event.preventDefault();
            setFormType("passwordReset");
          }}
        >
          Forgot your password?
        </button>
      </div>
    </Form>
  );
};

export default LoginForm;
