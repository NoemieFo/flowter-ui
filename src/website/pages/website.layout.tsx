import { Footer } from "@common/footer.component";
import React from "react";
import { Navbar } from "./home/elements/navigation/navbar.component";

interface WebsiteLayoutProps extends React.PropsWithChildren {
  isHome: boolean;
}

export const WebsiteLayout = ({
  isHome,
  children,
}: WebsiteLayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
      <Footer isHome={isHome} />
    </>
  );
};
