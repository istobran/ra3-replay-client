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
    return (
      <div>initialized</div>
    )
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(e(App), domContainer);