import { AppBar, Toolbar, styled } from "@mui/material";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled("p")`
  font-size: 20px;
  margin-right: 20px;
`;
const NavBar = () => {
  return (
    <Header>
      <Toolbar>
        <Tabs>CTO App</Tabs>
        <Tabs>All users</Tabs>
        <Tabs>Add users</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
