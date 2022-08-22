import React from "react";

class App extends React.Component {
  state = {
    numeroDeCliques1: 0,
    numeroDeCliques2: 0,
    numeroDeCliques3: 0,
  };

  handleClick1 = () => {
    this.setState((estadoAnterior) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }));
  };

  handleClick2 = () => {
    this.setState((estadoAnterior) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }));
  };

  handleClick3 = () => {
    this.setState((estadoAnterior) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }));
  };

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
      <div>
        <button onClick={this.handleClick1}>
          {numeroDeCliques1}
        </button>
        <button onClick={this.handleClick2}>
          {numeroDeCliques2}
        </button>
        <button onClick={this.handleClick3}>
          {numeroDeCliques3}
        </button>
      </div>
    );
  }
}

export default App;
