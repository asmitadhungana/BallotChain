import React from "react";
import { Menu, Icon, Grid, Container } from "semantic-ui-react";

export default () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Menu fluid widths={3} fixed="bottom" inverted secondary fluid>
            <Menu.Menu>
              <Menu.Item>
                <Icon size="small" name="copyright outline">
                  2020.Asmee
                </Icon>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
