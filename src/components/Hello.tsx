import * as React from 'react';
interface Hello {
  props: {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
  };
}

class Hello extends React.Component implements Hello {
  render() {
    const { name, enthusiasmLevel = 1, onIncrement, onDecrement  } = this.props;
    return (
      <div data-sumo-test="hello">
        <div className="greeeting">
          Hello {name + Array(enthusiasmLevel + 1).join('!')}
        </div>
        <button className="increment" onClick={onIncrement}> + </button>
        <button onClick={onDecrement}> - </button>
      </div>
    );
  }
}
export default Hello;
