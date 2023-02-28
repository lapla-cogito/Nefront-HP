import { Link } from "react-scroll";
import NefrontIcon from "./icons/nefront";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  > svg {
    transition: 200ms ease;
  }
`;

const Logo = () => {
  return (
    <Link
      activeClass="active"
      to="top"
      spy={true}
      smooth={true}
      duration={500}
      offset={-50}
      style={{cursor: "pointer"}}
    >
      <LogoBox>
        <NefrontIcon />
      </LogoBox>
    </Link>
  );
};

export default Logo;
