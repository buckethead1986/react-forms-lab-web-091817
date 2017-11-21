import React from "react";

const countWords = line => line.split(" ").filter(l => l).length;

const checkIfValid = poem => {
  if (poem) {
    const poemLines = poem.split("\n").filter(l => l);
    const isRightAmountOfLines = poemLines.length === 3;
    const hasRightAmountOfWords =
      countWords(poemLines[0]) === 5 &&
      countWords(poemLines[1]) === 3 &&
      countWords(poemLines[2]) === 5;
    return isRightAmountOfLines && hasRightAmountOfWords;
  }
  return false;
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      validity: true
    };
  }

  handleInput = event => {
    const textInput = event.target.value;

    this.setState({
      textInput,
      validity: checkIfValid(textInput)
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          name="text"
          value={this.state.text}
          onChange={this.handleInput}
        />
        {!this.state.validity && (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        )}
      </div>
    );
  }
}

export default PoemWriter;
