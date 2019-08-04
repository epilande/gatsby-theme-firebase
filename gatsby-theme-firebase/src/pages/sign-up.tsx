import * as React from "react";
import { navigate } from "gatsby";
import { auth } from "../firebase";

const SignUpPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
      <h1>
        <pre>Sign Up</pre>
      </h1>
      <form
        onSubmit={async event => {
          event.preventDefault();
          console.log({ name, email, password });
          try {
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password,
            );
            if (user) {
              user.updateProfile({ displayName: name });
            }
            navigate("/");
          } catch (error) {
            console.log("error.message", error.message);
          }
        }}
      >
        <label>
          Name:
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
