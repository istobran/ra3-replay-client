import React from "react";
import ReactDOM from "react-dom";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return "You have already liked this.";
    }

    return e("button", { onClick: () => this.setState({ liked: true }) }, "like")
  }
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);