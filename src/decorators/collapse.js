import React, { Component } from "react";

const collapse = OriginalComponent =>
  class CollapseComponent extends Component {
    state = {
      isItemsOpen: false
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleItems={this.toggleItems}
        />
      );
    }

    toggleItems = () => {
      this.setState({
        isItemsOpen: !this.state.isItemsOpen
      });
    };
  };

export { collapse };
