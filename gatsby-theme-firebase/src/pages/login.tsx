import * as React from "react";
import { navigate } from "gatsby";
import { auth } from "../firebase";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
      <h1>
        <pre>Login</pre>
      </h1>
      <form
        onSubmit={async event => {
          event.preventDefault();
          try {
            await auth.signInWithEmailAndPassword(email, password);
            navigate("/");
          } catch (error) {
            console.log("Error: ", error.message);
          }
        }}
      >
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

export default LoginPage;
