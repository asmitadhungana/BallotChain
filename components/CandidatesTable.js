import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Ballot from "../ethereum/ballot";

class CandidatesTable extends Component {
  state = {
    errorMessage: "",
    loading: false,
  };
  render() {
    return (
      <div>
        {this.props.candidates.map((candidate) => {
          return (
            <Card>
              <Card.Content>
                <Card.Header>{this.candidate.id.toString()}</Card.Header>
                <Card.Meta>{this.candidate.candidateName}</Card.Meta>
                <Card.Description>{this.candidate.voteCount}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default CandidatesTable;
