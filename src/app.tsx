import * as React from 'react';
import * as ReactDOM from 'react-dom';

const e = React.createElement;

interface State {
  liked: boolean;
}

class App extends React.Component<{}, State> {
  state: State;
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return "You have already liked this.";
    }

    // return e("button", { onClick: () => this.setState({ liked: true }) }, "like")
    return (
      <button onClick={() => this.setState({ liked: true })}>like</button>
    )
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(e(App), domContainer);