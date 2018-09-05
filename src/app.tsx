import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReplayTool } from '../server';

const e = React.createElement;

interface State {
  showList: boolean;
}

class App extends React.Component<{}, State> {
  state: State;
  constructor(props) {
    super(props);
    this.state = { showList: false };
  }
  render() {
    if (this.state.showList) {
      const { ReplayTool }: { ReplayTool: ReplayTool } = process.mainModule.exports;
      let list: string[] = ReplayTool.getReplayList();
      return (
        <ul>{ list.map(r => <li>{r}</li>) }</ul>
      )
    } else {
      return (
        <button onClick={() => this.setState({ showList: true })}>show file list</button>
      )
    }
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(e(App), domContainer);