import React, { Component } from "react";
import { Card, Header, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Ballot from "../../ethereum/ballot";

class ElectionShow extends Component {
  static async getInitialProps(props) {
    //Call to the Ballot fxn
    const ballot = Ballot(props.query.address);

    const ballotName = await ballot.methods.ballotName().call();
    const ballotManager = await ballot.methods.manager().call();

    const _ballotState = await ballot.methods.state().call();

    return { ballotName, ballotManager, _ballotState };
  }
  state = {
    ballotState: "",
    cardColor: "white",
  };

  // setBallotState = () => {
  //   if (this.props._ballotState === 0) {
  //     this.setState({ ballotState: "Created", cardColor: "yellow" });
  //   } else if (this.props._ballotState === 1) {
  //     this.setState({ ballotState: "Voting", cardColor: "green" });
  //   } else {
  //     this.setState({ ballotState: "Ended", cardColor: "red" });
  //   }

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h2"
                content={this.props.ballotName}
                inverted
                style={{
                  fontSize: "3em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "1em",
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Card
                fluid
                style={{
                  backgroundColor: "orange",
                  overflowWrap: "break-word",
                }}
                color="purple"
                header="Manager"
                description={this.props.ballotManager}
              />
              <Card
                fluid
                style={{
                  backgroundColor: "purple",
                }}
                color="green"
                header="Ballot State"
                description="Yay"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default ElectionShow;
