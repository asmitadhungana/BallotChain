import React, { Component } from "react";
import { Container, Form, Button, Message, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";

import Ballot from "../../ethereum/ballot";
import web3 from "../../ethereum/web3";
import { Link, Router } from "../../routes";

class ElectionCriteria extends Component {
  state = {
    candidateName: "",
    voterName: "",
    voterAddress: "",
    loadingCandidateForm: false,
    loadingVoterForm: false,
    errorMessageVoterForm: "",
    errorMessageCandidateForm: "",
  };

  static async getInitialProps(props) {
    const { address } = props.query; //Gets address from url

    const ballot = Ballot(address);
    const ballotName = await ballot.methods.ballotName().call();
    const candidatesCount = await ballot.methods.candidatesCount().call();
    const votersCount = await ballot.methods.votersCount().call();

    return { address, ballotName, candidatesCount, votersCount }; //Returns the address as a prop
  }

  onCandidateSubmit = async (event) => {
    event.preventDefault();
    const ballot = Ballot(this.props.address);
    const { candidateName } = this.state;

    this.setState({
      loadingCandidateForm: true,
      errorMessageCandidateForm: "",
    });

    try {
      const accounts = await web3.eth.getAccounts();
      await ballot.methods.addCandidates(candidateName).send({
        from: accounts[0],
      });

      Router.pushRoute(`/elections/${this.props.address}/criteria`); //Refresh the page to show new added candidatesCount
    } catch (err) {
      this.setState({ errorMessageCandidateForm: err.message });
    }
    this.setState({ loadingCandidateForm: false });
  };

  onVoterSubmit = async (event) => {
    event.preventDefault();

    const ballot = Ballot(this.props.address);
    const { voterName, voterAddress } = this.state;

    this.setState({ loadingVoterForm: true, errorMessageVoterForm: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await ballot.methods.addVoter(voterAddress, voterName).send({
        from: accounts[0],
      });
      Router.pushRoute(`/elections/${this.props.address}/criteria`); //For refreshing the page
    } catch (err) {
      this.setState({ errorMessageVoterForm: err.message });
    }

    this.setState({ loadingVoterForm: false });
  };

  render() {
    return (
      <Layout>
        <Container
          style={{ width: "1000px", position: "relative", top: "70px" }}
        >
          <h1>Registration Form ( {this.props.ballotName} )</h1>

          <Container
            inverted
            style={{
              border: "1px solid",
              padding: "30px",
              marginTop: 30,
              position: "relative",
            }}
          >
            <h3>Candidate Registration</h3>
            <Form
              onSubmit={this.onCandidateSubmit}
              error={!!this.state.errorMessageCandidateForm}
              loading={!!this.state.loadingCandidateForm}
              inverted
              style={{ marginTop: 30, position: "relative" }}
            >
              <Form.Group>
                <Form.Input
                  value={this.state.candidateName}
                  onChange={(event) =>
                    this.setState({ candidateName: event.target.value })
                  }
                  fluid
                  label="Candidate Name"
                  placeholder="Asmita Dhungana"
                  width={16}
                />
              </Form.Group>

              <Grid>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <div style={{ fontSize: "0.60 rem" }}>
                      Added {this.props.candidatesCount} candidates
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Message
                error
                header="Oops!"
                content={this.state.errorMessageCandidateForm}
              />
              <Button primary>Register</Button>
            </Form>
          </Container>

          <Container
            inverted
            style={{ border: "1px solid", padding: "30px", marginTop: 80 }}
          >
            <h3>Voter's Registration</h3>
            <Form
              onSubmit={this.onVoterSubmit}
              error={!!this.state.errorMessageVoterForm}
              loading={!!this.state.loadingVoterForm}
              inverted
              style={{ marginTop: 30, position: "relative" }}
            >
              <Form.Group>
                <Form.Input
                  value={this.state.voterAddress}
                  onChange={(event) =>
                    this.setState({ voterAddress: event.target.value })
                  }
                  fluid
                  label="Voter Address"
                  placeholder="0xad4980bb4a6fF42c45C5bCCa3DC9B9cC153A6090"
                  width={10}
                />
                <Form.Input
                  value={this.state.voterName}
                  onChange={(event) =>
                    this.setState({ voterName: event.target.value })
                  }
                  fluid
                  label="Voter Name"
                  placeholder="Polarj Sapkota"
                  width={6}
                />
              </Form.Group>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <div style={{ fontSize: "0.60 rem" }}>
                      Added {this.props.votersCount} voters
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Message
                error
                header="Oops!"
                content={this.state.errorMessageVoterForm}
              />
              <Button primary>Register</Button>
            </Form>
          </Container>

          <Link route={`/elections/${this.props.address}`}>
            <a>
              <Button
                size="Massive"
                color="Teal"
                positive
                style={{
                  borderRadius: "2px",
                  marginTop: "40px",
                  position: "relative",
                }}
              >
                <strong>
                  <h2>Deploy my Ballot</h2>
                </strong>
              </Button>
            </a>
          </Link>
        </Container>
      </Layout>
    );
  }
}

export default ElectionCriteria;
