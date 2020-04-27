import React, { Component } from "react";
import { Container, Input, Form, Button, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class ElectionNew extends Component {
  state = {
    ballotName: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts(); //fetching accounts from web3
      await factory.methods.createBallot(this.state.ballotName).send({
        from: accounts[0],
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Container
          style={{ width: "1000px", position: "relative", top: "50px" }}
        >
          <h1>New Election!</h1>

          <Form
            size="large"
            inverted
            onSubmit={this.onSubmit}
            error={!!this.state.errorMessage}
            loading={!!this.state.loading}
          >
            <Form.Field>
              <label>Create Ballot</label>
              <Input
                label="Ballot name"
                value={this.state.ballotName}
                onChange={(event) =>
                  this.setState({ ballotName: event.target.value })
                }
              />
            </Form.Field>

            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button primary>Create!</Button>
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default ElectionNew;
