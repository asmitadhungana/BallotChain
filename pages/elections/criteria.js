import React, { Component } from "react";
import { Container, Form } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Ballot from "../../ethereum/ballot";

class ElectionCriteria extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }
  state = {};
  render() {
    return (
      <Layout>
        <Container
          style={{ width: "1000px", position: "relative", top: "70px" }}
        >
          <h1>Election Form</h1>

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
            <Form inverted style={{ marginTop: 30, position: "relative" }}>
              <Form.Group>
                <Form.Input
                  fluid
                  label="Candidate Name"
                  placeholder="Asmita Dhungana"
                  width={16}
                />
              </Form.Group>
            </Form>
          </Container>

          <Container
            inverted
            style={{ border: "1px solid", padding: "30px", marginTop: 80 }}
          >
            <h3>Voter's Registration</h3>
            <Form inverted style={{ marginTop: 30, position: "relative" }}>
              <Form.Group>
                <Form.Input
                  fluid
                  label="Voter Address"
                  placeholder="0xad4980bb4a6fF42c45C5bCCa3DC9B9cC153A6090"
                  width={10}
                />
                <Form.Input
                  fluid
                  label="Voter Name"
                  placeholder="Polarj Sapkota"
                  width={6}
                />
              </Form.Group>
            </Form>
          </Container>
        </Container>
      </Layout>
    );
  }
}

export default ElectionCriteria;
