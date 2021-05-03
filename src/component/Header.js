import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

function Header() {
  return (
    <Container>
      <Logo src="./image/mxplayer.png" />
      <a className="logo">
        MX<span>PLAYER</span>
      </a>

      <NavMenu>
        <a>
          <span className="active">HOME</span>
        </a>
        <a>
          <span> WEB SHOW</span>
        </a>
        <a>
          <span>MOVIES</span>
        </a>
        <a>
          <span>TV</span>
        </a>
        <a>
          <span>NEWS</span>
        </a>
        <a>
          <span>MUSIC</span>
        </a>
        <a>
          <span>BUZZ</span>
        </a>
        <a>
          <span>LIVETV</span>
        </a>
      </NavMenu>

      <Extra>
        <a>
          <SearchIcon />
        </a>

        <a>
          <MenuIcon />
          <span>MY WATCHLIST</span>
        </a>
        <a>
          <SettingsIcon />
        </a>
      </Extra>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: #1c2939;
  height: 60px;
  display: flex;
  align-items: center;
  position: static;
  a {
    font-weight: bold;
    color: white;
    font-size: 20px;
    padding: 0 0px;
  }
  span {
    font-weight: normal;
  }
`;

const Logo = styled.img`
  height: 38px;
  padding: 0 0 0 10px;
`;

const NavMenu = styled.div`
  margin-left: 70px;
  flex: 1;
  display: flex;
  align-items: center;
  letter-spacing: 0.3px;
  cursor: pointer;

  .active {
    color: white;
  }
  a {
    font-size: 14px;
    font-weight: bold;
    color: hsla(0, 0%, 100%, 0.5);
    font-family: Muli, sans-serif;
    letter-spacing: 0.3px;
    padding: 0 20px;

    &:hover {
      color: white;
    }
  }
`;

const Extra = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  span {
    font-size: 15px;
  }
`;
