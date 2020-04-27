import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";

export default () => {
  return (
    <Menu fixed="top" inverted pointing secondary size>
      <Menu.Item as="a" active>
        <h2> BallotChain</h2>
      </Menu.Item>
      <Menu.Item as="a">Work</Menu.Item>
      <Menu.Item as="a">Company</Menu.Item>
      <Menu.Item as="a">Careers</Menu.Item>
      <Menu.Item position="right">
        <Button as="a" inverted>
          Log in
        </Button>
        <Button as="a" inverted primary style={{ marginLeft: "0.5em" }}>
          Sign Up
        </Button>
      </Menu.Item>
    </Menu>
  );
};
