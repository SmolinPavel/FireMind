import React from 'react';
import utils from './playUtils';
import defaultValues from './defaultValues';
import toastr from 'toastr';
toastr.options.timeOut = 1000;

export class PlayPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      right: utils.generateInteger(defaultValues.rangeMin, defaultValues.rangeMax),
      left: utils.generateInteger(defaultValues.rangeMin, defaultValues.rangeMax),
      sign: utils.generateSign(defaultValues.level),
      level: defaultValues.level,
      answer: ''
    };
  }

  checkAnswer() {
    if (this.state.answer == utils.mathMySign[this.state.sign](this.state.left, this.state.right)) {
      toastr.success('You are rigth!');
      this.setState(utils.generateStateByLevel(this.state.level, 'up'));
    } else {
      toastr.error('Wrong answer :(');
      this.setState(utils.generateStateByLevel(this.state.level, 'down'));
    }
  }

  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <h1>Your current level is: {utils.getHumanLevel(this.state.level)}</h1>
        <div className="Playground">
          <div className="grid-1">
            <div>{this.state.left}</div>
            <div>{this.state.sign}</div>
            <div>{this.state.right}</div>
          </div>
          <div className="grid-2"><div>=</div></div>
          <div className="grid-3">
            <div>
            <input
              value={this.state.answer}
              ref={(input) => { this.textInput = input; }}
              onChange={(e) => this.setState({ answer: e.target.value })}
              onKeyPress={(e) => {
                if (e.charCode == 13) {
                  this.checkAnswer();
                }
              }}
            />
            </div>
          </div>
          <div className="grid-4">
            <input
              type="submit"
              value="Click"
              className="button"
              onClick={() => this.checkAnswer()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayPage;
