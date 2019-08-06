/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { navigate } from "gatsby";
import { auth } from "../firebase";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  return (
    <div>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
      </Form>
    </div>
  );
};

export default LoginForm;
