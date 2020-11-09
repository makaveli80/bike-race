import React from 'react';
import { MdDelete, MdWarning } from 'react-icons/md';

import './ShowRacer.css'

const DEFAULT_RACER = { firstName: '', lastName: '' };
const DEFAULT_PROPS = { racer: DEFAULT_RACER };
const DEFAULT_STATE = { confirmationMode: false, countDown: 0 };
const STATE_START_COUNT_DOWN = { confirmationMode: true, countDown: 10 };
const INTERVAL_COUNT_DOWN = 1000;

class ShowRacer extends React.Component {
  static defaultProps = DEFAULT_PROPS;

  state = DEFAULT_STATE

  constructor(props) {
    super(props);
    this.handleClickDeleteButton = this.handleClickDeleteButton.bind(this);
  }

  render() {
    const { racer: { lastName, firstName }} = this.props;

    return (
      <div>
        {lastName} {firstName}
        {this.renderDeleteButton()}
      </div>
    );
  }

  renderDeleteButton() {
    const { confirmationMode, countDown } = this.state;

    if (!confirmationMode) {
      return (
        <button onClick={this.handleClickDeleteButton}
            className="show-racer__delete-button">
          <MdDelete className="delete-button__icon" />
        </button>
      );
    } else {
      return (
        <button className="show-racer__confirm-button">
          <span className="confirm-button__count-down">
            Cliquez à nouveau pour supprimer ({countDown})
          </span>
          <MdWarning className="confirm-button__icon" />
        </button>
      );
    }
  }

  handleClickDeleteButton() {
    this.setState(STATE_START_COUNT_DOWN);

    this.interval = setInterval(
      this.handleCountDown.bind(this),
      INTERVAL_COUNT_DOWN
    );
  }

  handleCountDown() {
    const { countDown } = this.state;
    if (countDown === 0) {
      this.setState(DEFAULT_STATE);
      clearInterval(this.interval);
    } else {
      this.setState({ ...this.state, countDown: countDown - 1 })
    }
  }
}

export default ShowRacer;
