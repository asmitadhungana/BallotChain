import React, { Component } from "react";
import {
  Card,
  Header,
  Grid,
  Table,
  Button,
  Container,
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import Ballot from "../../ethereum/ballot";
import web3 from "../../ethereum/web3";

class ElectionShow extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    //Call to the Ballot contract
    const ballot = Ballot(address);

    const ballotName = await ballot.methods.ballotName().call();
    const ballotManager = await ballot.methods.manager().call();
    const _ballotState = await ballot.methods.state().call();
    const candidatesCount = await ballot.methods.candidatesCount().call();
    const votersCount = await ballot.methods.votersCount().call();

    let candidates = [];

    for (let i = 0; i < candidatesCount; i++) {
      const candidateIndex = await ballot.methods.candidateRegister(i).call();
      candidates.push(candidateIndex);
    }

    let voters = [];
    const voter1 = await ballot.methods.voterMapping(1).call();

    for (let i = 0; i < votersCount; i++) {
      const voterIndex = await ballot.methods.voterMapping(i).call();
      voters.push(voterIndex);
    }

    return {
      address,
      ballotName,
      ballotManager,
      _ballotState,
      candidatesCount,
      votersCount,
      candidates,
      voters,
      voter1,
    };
  }

  // renderVoters = async () => {
  //   this.setState({ votersCount });

  //   for (var i = 1; i <= votersCount; i++) {
  //     const voter = await ballot.methods.voterMapping(i).call();
  //     this.setState({
  //       voters: [...this.state.voters, voter],
  //     });
  //   }
  // };

  // async componentWillMount() {
  //   this.renderVoters();
  // }

  state = {
    ballotState: this.props._ballotState,
    ballotColor: "purple",
    voters: [],
    onvoteloading: false,
    errorMessageOnStartVote: "",
    errorMessageOnVoteSubmit: "",
    errorMessageOnVoteEnd: "",
    voteStartLoading: false,
    voteSubmitLoading: false,
    voteEndLoading: false,
  };

  onStartVote = async () => {
    alert("Vote Started!");
    event.preventDefault();

    const ballot = Ballot(this.props.address);
    this.setState({ voteStartloading: true, errorMessageOnStartVote: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await ballot.methods.startVote().send({
        from: accounts[0],
      });
      Router.pushRoute(`/elections/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessageOnStartVote: err.message });
    }
    this.setState({ voteStartLoading: false });
  };

  onVote = async (id) => {
    const ballot = Ballot(this.props.address);
    alert("You voted!");
    this.setState({ voteSubmitloading: true, errorMessageOnVoteSubmit: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await ballot.methods.castVote(id).send({
        from: accounts[0],
      });
      Router.pushRoute(`/elections/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessageOnVoteSubmit: err.message });

      this.setState({ voteSubmitloading: false });
    }
  };

  onEndVote = async () => {
    const ballot = Ballot(this.props.address);
    alert("Vote Ended!");
    this.setState({ voteEndLoading: true, errorMessageOnVoteEnd: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await ballot.methods.endVote().send({
        from: accounts[0],
      });
      this.setState({ ballotState: "Ended", ballotColor: "Red" });
    } catch (err) {
      this.setState({ errorMessageOnVoteEnd: err.message });
    }
    alert("Now no one can vote in this election!");
    this.setState({ voteEndLoading: false });
  };

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h1>{this.props.ballotName}</h1>
              {/* <Header
                as="h3"
                content={this.props.ballotName}
                inverted
                style={{
                  fontSize: "3em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "1em",
                }}
              /> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row>
            <Grid.Column width={2} centered style={{ marginTop: 60 }}>
              <Container centered>
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
                    backgroundColor: "green",
                  }}
                  color="green"
                  header="Candidates Count"
                  description={this.props.candidatesCount}
                />

                <Card
                  fluid
                  style={{
                    backgroundColor: "teal",
                  }}
                  color="purple"
                  header="Voters Count"
                  description={this.props.votersCount}
                />
              </Container>
            </Grid.Column>

            <Grid.Column width={1}></Grid.Column>
            <Grid.Column
              width={10}
              style={{ marginTop: 20, position: "relative" }}
            >
              <Container centered>
                <h2>Candidates Table</h2>
                <Table inverted striped cell selectable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Id</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>VoteCount</Table.HeaderCell>
                      <Table.HeaderCell>Decision</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>{this.props.candidates[0].id}</Table.Cell>
                      <Table.Cell>
                        {this.props.candidates[0].candidateName}
                      </Table.Cell>
                      <Table.Cell>
                        {this.props.candidates[0].voteCount}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          name={this.props.candidates[0].id}
                          positive
                          onClick={(event) => {
                            this.onVote(event.target.name);
                          }}
                          loading={this.state.voteSubmitloading}
                        >
                          Vote
                        </Button>
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>{this.props.candidates[1].id}</Table.Cell>
                      <Table.Cell>
                        {this.props.candidates[1].candidateName}
                      </Table.Cell>
                      <Table.Cell>
                        {this.props.candidates[1].voteCount}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          positive
                          loading={this.state.voteSubmitloading}
                          onClick={(event) => {
                            let candidateId = this.props.candidates[1].id;
                            this.onVote(candidateId);
                          }}
                        >
                          Vote
                        </Button>
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>{this.props.candidates[2].id}</Table.Cell>
                      <Table.Cell>
                        {this.props.candidates[2].candidateName}
                      </Table.Cell>
                      <Table.Cell>
                        {this.props.candidates[2].voteCount}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          positive
                          onClick={this.onVote}
                          loading={this.state.voteSubmitloading}
                        >
                          Vote
                        </Button>
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>{this.props.candidates[3].id}</Table.Cell>
                      <Table.Cell>
                        {this.props.candidates[3].candidateName}
                      </Table.Cell>
                      <Table.Cell>
                        {this.props.candidates[3].voteCount}
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          positive
                          onClick={this.onVote}
                          loading={this.state.voteSubmitloading}
                        >
                          Vote
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

                <Grid.Row style={{ marginTop: 60, position: "relative" }}>
                  <h2>Voters Table</h2>
                  <Grid.Column width={14}>
                    <Table inverted striped cell selectable size="large">
                      <Table.Header>
                        <Table.Row style={{ padding: "40px" }}>
                          <Table.HeaderCell>Id</Table.HeaderCell>
                          <Table.HeaderCell>Name</Table.HeaderCell>
                          <Table.HeaderCell>Address</Table.HeaderCell>

                          <Table.HeaderCell>Voted</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        <Table.Row style={{ padding: "40px" }}>
                          <Table.Cell>{this.props.voters[0].id}</Table.Cell>
                          <Table.Cell>
                            {this.props.voters[0].voterName}
                          </Table.Cell>
                          <Table.Cell>
                            {this.props.voters[0].voterAddress}
                          </Table.Cell>
                          <Table.Cell>
                            {this.props.voters[0].voted.toString()}
                          </Table.Cell>
                        </Table.Row>

                        <Table.Row style={{ padding: "40px" }}>
                          <Table.Cell>{this.props.voters[1].id}</Table.Cell>
                          <Table.Cell>
                            {this.props.voters[1].voterName}
                          </Table.Cell>
                          <Table.Cell>
                            {this.props.voters[1].voterAddress}
                          </Table.Cell>
                          <Table.Cell>
                            {this.props.voters[1].voted.toString()}
                          </Table.Cell>
                        </Table.Row>

                        <Table.Row style={{ padding: "40px" }}>
                          <Table.Cell>{this.props.voters[2].id}</Table.Cell>
                          <Table.Cell>
                            {this.props.voters[2].voterName}
                          </Table.Cell>
                          <Table.Cell>
                            {this.props.voters[2].voterAddress}
                          </Table.Cell>
                          <Table.Cell>
                            {this.props.voters[2].voted.toString()}
                          </Table.Cell>
                        </Table.Row>

                        <Table.Row style={{ padding: "100px" }}>
                          <Table.Cell>{this.props.voters[3].id}</Table.Cell>
                          <Table.Cell>
                            {this.props.voters[3].voterName}
                          </Table.Cell>
                          <Table.Cell>
                            {this.props.voters[3].voterAddress}
                          </Table.Cell>
                          <Table.Cell>
                            {this.props.voters[3].voted.toString()}
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                </Grid.Row>
              </Container>
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>

            <Grid.Column style={{ marginTop: 60 }} width={2}>
              <h4>Manager's section</h4>
              <Container>
                <Button
                  size="massive"
                  positive
                  onClick={this.onStartVote}
                  loading={this.state.voteStartLoading}
                >
                  Start Voting!
                </Button>
                <Card
                  fluid
                  style={{
                    backgroundColor: "purple",
                  }}
                  color="green"
                  header="Ballot State"
                  description={this.state.ballotState}
                />

                <Button
                  size="massive"
                  negative
                  onClick={this.onEndVote}
                  loading={this.state.voteEndLoading}
                >
                  End Voting!
                </Button>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default ElectionShow;
