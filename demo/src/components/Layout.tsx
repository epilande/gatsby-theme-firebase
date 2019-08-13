import * as React from "react";
import GlobalStyles from "./GlobalStyles";

const Layout: React.FunctionComponent<{}> = ({ children }) => (
  <div css={{ maxWidth: "64rem", margin: "0 auto 4rem", padding: "1rem" }}>
    <GlobalStyles />
    {children}
  </div>
);

export default Layout;
