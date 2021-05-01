import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Hearder_function from "./Hearder_function";
import HomeIcon from "@material-ui/icons/Home";
import BackupIcon from "@material-ui/icons/Backup";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactsIcon from "@material-ui/icons/Contacts";

function Header() {
  return (
    <Container>
      <h1>ClickStock</h1>
      <Search>
        <SearchInput />
        <SearchIcon />
      </Search>
      <Header_flex>
        <Hearder_function title="Home" Icon={HomeIcon} />
        <Hearder_function title="Upload" Icon={BackupIcon} />
        <Hearder_function title="Logout" Icon={ExitToAppIcon} />
        <Hearder_function title="Contact" Icon={ContactsIcon} />
      </Header_flex>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  h1 {
    display: flex;
    justify-content: center;
  }
`;

const SearchInput = styled.input`
  width: 50%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid red;
  font-size: 25px;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
`;
const Header_flex = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-around;

  :hover {
    color: red;
  }
`;
