import * as React from "react";
import GlobalStyles from "./GlobalStyles";

const Layout: React.FunctionComponent<{}> = ({ children }) => (
  <div>
    <GlobalStyles />
    {children}
  </div>
);

export default Layout;
