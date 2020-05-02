import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import Ballot from "../ethereum/ballot";

class VotersTable extends Component {
  async componentWillMount() {
    await this.loadBlockChainData();
  }

  async loadBlockChainData() {
    const ballot = Ballot(this.props.address);
    const _votersCount = this.props.votersCount;
    this.setState({ votersCount: _votersCount });
    try {
      for (var i = 1; i < votersCount; i++) {
        const voter = await ballot.methods.voterMapping(i).call();
        this.setState({
          voters: [...this.state.voters, voter],
        });
      }

      console.log(this.state.voters);
      console.log(votersCount);
    } catch (err) {
      console.log(err.message);
    }
  }

  state = {
    voters: [],
    votersCount: 0,
  };

  render() {
    return (
      <div>
        <h3>{this.state.loading}</h3>
        <Table inverted striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}>Id</Table.HeaderCell>
              <Table.HeaderCell width={4}>Name</Table.HeaderCell>
              <Table.HeaderCell width={2}>Address</Table.HeaderCell>
              <Table.HeaderCell width={3}>Voted</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.voters.map((voter, key) => {
              return (
                <Table.Row key={key}>
                  <Table.Cell>{voter.id}</Table.Cell>
                  <Table.Cell>{voter.voterName}</Table.Cell>
                  <Table.Cell>{voter.voterAddress}</Table.Cell>
                  <Table.Cell>{voter.voted}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default VotersTable;

// {this.state.voters.map((voter, key) => {
//     return (
//       <Table.Row key={key}>
//         <Table.Cell>{voter.id.toString()}</Table.Cell>
//         <Table.Cell>{voter.voterName}</Table.Cell>
//         <Table.Cell>{voter.voterAddress}</Table.Cell>
//         <Table.Cell>{voter.voted}</Table.Cell>
//       </Table.Row>
//     );
//   })}
