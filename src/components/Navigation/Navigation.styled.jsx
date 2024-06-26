import styled from "styled-components";

import { NavLink as NavigationLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 26px;
`;

export const Logo = styled(NavigationLink)`
  font-size: 25px;
  font-weight: 500;
  text-decoration: none;

  color: ${(p) => p.theme.colors.black};
`;

export const NavWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled(NavigationLink)`
  display: block;
  width: 100%;
  max-width: 168px;
  align-content: center;
  padding: 10px 34px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  border-radius: 15px;

  /* width: 100px;
  max-width: 138px; */
  text-align: center;

  background-color: ${(p) => p.theme.colors.red};
  transition: background-color ${(p) => p.theme.transition};

  &.active {
    background-color: ${(p) => p.theme.colors.yellow};
    color: ${(p) => p.theme.colors.black};
  }
`;
