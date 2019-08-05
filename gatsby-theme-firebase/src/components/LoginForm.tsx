/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { navigate } from "gatsby";
import { auth } from "../firebase";
import Form from "./Form";
import Input from "./Input";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
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
          placeholder="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <Input
          label="Password: "
          type="password"
          placeholder="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default LoginForm;
