import React from "react";

import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

import { HeaderThemeProvider } from "./HeaderTheme";
import { ThemeProvider } from "./Theme";

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <WrapBalancerProvider>{children}</WrapBalancerProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  );
};
