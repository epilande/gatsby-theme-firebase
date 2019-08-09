/** @jsx jsx */
import { jsx } from "theme-ui";
import { Form, FormState } from "gatsby-theme-firebase";

const LoginModal: React.FunctionComponent<{
  setToggleLogin: (arg: boolean) => void;
}> = ({ setToggleLogin }) => (
  <div>
    <div
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
      }}
      onClick={() => {
        setToggleLogin(false);
      }}
    />
    <div
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "28rem",
        width: "100%",
        maxHeight: "100vh",
        overflow: "auto",
      }}
    >
      <FormState.Provider>
        <Form
          onSuccess={() => {
            setToggleLogin(false);
          }}
        />
      </FormState.Provider>
    </div>
  </div>
);

export default LoginModal;
