import React from "react";
import theme from "../../config/theme";

const Layout = ({ children }) => {
  return (
    <div
      className="eg-layout-root"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
      }}
    >
      <main className="eg-layout-main">{children}</main>
    </div>
  );
};

export default Layout;
