import React from "react";
import logo from "./images/logo.png";
import styled from "styled-components";

const TopBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  }
`;
const Logo = styled.img`
 @media (max-width: 600px) {
 width:
  40%};
`;

const HeaderTitle = styled.h1`
  width: 50%;
  font-size: 4rem;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 2rem};
`;

const Header = () => {
  return (
    <TopBar>
      <div className="Header">
        <Logo src={logo} alt="Star Wars Logo" />
        <HeaderTitle>What a bunch of Characters!!!</HeaderTitle>
      </div>
    </TopBar>
  );
};

export default Header;
