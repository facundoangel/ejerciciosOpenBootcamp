import React, { useContext, useEffect } from "react";
import taskContext from "../../context/taskContext";
import { Navbar, Button, Text } from "@nextui-org/react";
import Logo from "../../logo.svg";
import "../../App.css";

const NavbarApp = () => {
  const dispatchTask = useContext(taskContext).dispatch.dispatchTask;

  return (
    <>
      <Navbar isBordered variant={"sticky"}>
        <Navbar.Brand>
          <img className="App-logo" src={Logo} alt="logo" />
          <Text b color="inherit" hideIn="xs">
            TASK APP
          </Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat onPress={() => dispatchTask(null)}>
              Reset
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
};

export default NavbarApp;
