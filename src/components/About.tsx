import * as React from 'react';
import Hello from './Hello';

interface About {
  state: {
    name: string;
    enthusiasmLevel?: number;
  };
}

interface Event {
  target: {
    value: string;
  };
}

class About extends React.Component implements About  {

  constructor(props: object) {
    super(props);
    this.state = {
      name: 'Ayan',
      enthusiasmLevel: 1,
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onNameChange(e: Event) {
    this.setState({
      name: e.target.value,
    });
  }

  onIncrement() {
    this.setState((prevState: { enthusiasmLevel: number}) => ({ enthusiasmLevel: prevState.enthusiasmLevel + 1 }));
  }

  onDecrement() {
    this.setState((prevState: { enthusiasmLevel: number }) => ({
      enthusiasmLevel: Math.max(1, prevState.enthusiasmLevel - 1)
    }));
  }

  render() {
    const { name, enthusiasmLevel } = this.state;
    return (
      <div>
        <div><h2>About {name}</h2></div>
        <input value={name} type="text" onChange={this.onNameChange}/>
        <Hello
          name={name}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          enthusiasmLevel={enthusiasmLevel}
        />
      </div>
    );
  }
}

export default About;
