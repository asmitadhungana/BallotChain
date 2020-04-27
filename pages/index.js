import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import Layout from "../components/Layout";

const HomepageHeading = () => (
  <Container text>
    <Header
      as="h1"
      content="Imagine-an-Election"
      inverted
      style={{
        fontSize: "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "3em",
      }}
    />
    <Header
      as="h2"
      content="Where Every Ballot Is Transparent"
      inverted
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginTop: "1.5em",
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

const HomepageLayout = () => {
  return (
    <Layout>
      <HomepageHeading />
    </Layout>
  );
};

export default HomepageLayout;
