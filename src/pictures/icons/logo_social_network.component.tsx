import { Link } from "react-router-dom";
import Facebook from "./facebook.svg";
import Instagram from "./instagram.svg";
import Twitter from "./twitter.svg";

const LogoSocialNetwork = (
  path: string,
  logo: string,
  alt: string,
  isTablet: boolean
): JSX.Element => {
  return (
    <Link
      to={path}
      style={{ textDecoration: "none", height: "0px", width: "0px" }}
    >
      <img
        src={logo}
        alt={alt}
        style={{ width: isTablet ? 30 : 40, height: isTablet ? 30 : 40 }}
      />
    </Link>
  );
};

interface IconProps {
  isTablet: boolean;
}
export const FacebookIcon = ({ isTablet }: IconProps) =>
  LogoSocialNetwork("", Facebook, "Logo Facebook", isTablet);

export const InstagramIcon = ({ isTablet }: IconProps) =>
  LogoSocialNetwork("", Instagram, "Logo Instagram", isTablet);

export const TwitterIcon = ({ isTablet }: IconProps) =>
  LogoSocialNetwork("", Twitter, "Logo Twitter", isTablet);
