import PropTypes from "prop-types";
import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";

class Layout extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 1000, padding: "1em 0em" }}
          vertical
        >
          <MyHeader />
          {children}

          <MyFooter />
        </Segment>
      </div>
    );
  }
}

export default Layout;
