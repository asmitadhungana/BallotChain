import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Ballot from "../ethereum/ballot";

//we'll import it to our show component and render one of these for every candidates we have in  our list
class CandidatesRow extends Component {
  state = {};

  onVote = async () => {
    const ballot = Ballot(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await ballot.methods.castVote(this.props.candidate.id).send({
      from: accounts[0],
    });
  };

  render() {
    return (
      <Table.Row >
        <Table.Cell>{this.props.candidate.id}</Table.Cell>
        <Table.Cell>{this.props.candidate.name}</Table.Cell>
        <Table.Cell>{this.props.candidate.voteCount}</Table.Cell>
        <Table.Cell>
          <Button positive onClick={this.onVote}>
            Vote
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default CandidatesRow;
