import * as React from "react";
import GlobalStyles from "./GlobalStyles";

const Layout: React.FunctionComponent<{}> = ({ children }) => (
  <div css={{ padding: "1rem" }}>
    <GlobalStyles />
    {children}
  </div>
);

export default Layout;
