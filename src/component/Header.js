import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

function Header() {
  return (
    <Container>
      <Logo src="./image/mxplayer.png" />
      <a>
        MX<span>PLAYER</span>
      </a>

      <NavMenu>
        <a>
          <span>HOME</span>
        </a>
        <a>
          <span> WEBSHOW</span>
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
    padding: 0 15px;
  }
  span {
    font-weight: normal;
  }
`;

const Logo = styled.img`
  height: 38px;
`;

const NavMenu = styled.div`
  margin-left: 100px;
  flex: 1;
  display: flex;
  align-items: center;

  a {
    font-size: 15px;
    font-weight: bold;
  }
`;

const Extra = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;

  a {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 15px;
  }
`;
