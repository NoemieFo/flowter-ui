import React from "react";
import { Navbar } from "./home/elements/navigation/navbar.component";

export const WebsiteLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
