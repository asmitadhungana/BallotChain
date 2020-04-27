import React, { Component } from "react";
import { Card, Button, Header, Container, Grid } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
//import {Link} "../routes";

class BallotIndex extends Component {
  static async getInitialProps() {
    const ballots = await factory.methods.getDeployedBallots().call();

    return { ballots };
  }

  renderBallots() {
    const items = this.props.ballots.map((address) => {
      return {
        header: "Ballot_name",
        description: address,
        meta: "At address:",
        color: "blue",
        style: {
          backgroundColor: "DodgerBlue",
          padding: "10px",
          borderRadius: "40px",
          overflowWrap: "break-word",
        },
      };
    });

    return <Card.Group itemsPerRow={3} items={items} />;
  }

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <Header
                as="h2"
                content="Open Ballots"
                inverted
                style={{
                  fontSize: "3em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "3em",
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>{this.renderBallots()}</Grid.Column>

            <Grid.Column width={3}>
              <Button
                size="Massive"
                color="Teal"
                positive
                style={{ borderRadius: "2px" }}
              >
                <strong>
                  <h2>Create Ballot</h2>
                </strong>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default BallotIndex;
