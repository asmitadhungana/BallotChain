import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu fixed="top" inverted pointing secondary>
      <Link route="/">
        <Menu.Item as="a" active>
          <h2> BallotChain</h2>
        </Menu.Item>
      </Link>
      <Link route="/elections">
        <Menu.Item as="a">Company</Menu.Item>
      </Link>
      <Link route="/elections">
        <Menu.Item as="a">About</Menu.Item>
      </Link>
      <Link route="/elections">
        <Menu.Item as="a">Contact</Menu.Item>
      </Link>

      <Menu.Item position="right">
        <Link route="/elections">
          <a>
            <Button inverted style={{ padding: "15px" }}>
              <h3>Ballots</h3>
            </Button>
          </a>
        </Link>
        <Link route="/elections/new">
          <Button as="a" inverted primary style={{ marginLeft: "0.5em" }}>
            <strong>
              <h2>+</h2>
            </strong>
          </Button>
        </Link>
      </Menu.Item>
    </Menu>
  );
};
