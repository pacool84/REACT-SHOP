import React, { Component } from "react";

function ComponentWrapper(WrapperComponent) {
  class Wrapper extends Component {
    render() {
      return <WrapperComponent />;
    }
  }
  return Wrapper;
}

export default ComponentWrapper;
