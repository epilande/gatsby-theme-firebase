/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import * as React from "react";
import { navigate } from "gatsby";
import FormState from "../containers/FormState";
import { auth } from "../firebase";
import Form from "./FormBase";
import Input from "./Input";
import Button from "./Button";
import SocialLogins from "./SocialLogins";

const LoginForm: React.FunctionComponent<{
  onSuccess?: () => void;
}> = ({ onSuccess = () => {}, ...restProps }) => {
  const { setFormType, setErrorMessage } = FormState.useContainer();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Form
      {...restProps}
      onSubmit={async event => {
        event.preventDefault();
        try {
          await auth.signInWithEmailAndPassword(email, password);
          onSuccess();
          navigate("/");
        } catch (error) {
          setErrorMessage(error.message);
        }
      }}
    >
      <SocialLogins onSuccess={onSuccess} />
      <Styled.hr sx={{ my: 3 }} />

      <Input
        label="Email"
        type="text"
        placeholder="email@example.com"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        sx={{ mb: 3 }}
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      <Button type="submit" sx={{ width: "100%", mb: 1 }}>
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
