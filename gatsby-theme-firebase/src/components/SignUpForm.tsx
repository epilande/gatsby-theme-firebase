import * as React from "react";
import { navigate } from "gatsby";
import { auth } from "../firebase";
import Form from "./Form";
import Input from "./Input";

const SignUpForm = () => {
  const [name, setName] = React.useState("");
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
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password,
            );
            if (user) {
              await user.updateProfile({ displayName: name });
              await user.sendEmailVerification();
            }
            navigate("/");
          } catch (error) {
            setErrorMessage(error.message);
          }
        }}
      >
        <Input
          label="Name: "
          type="text"
          placeholder="name"
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />
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

export default SignUpForm;
