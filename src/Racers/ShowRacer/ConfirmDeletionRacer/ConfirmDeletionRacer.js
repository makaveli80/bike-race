import React from 'react';
import { MdDelete, MdWarning } from 'react-icons/md';

import './ConfirmDeletionRacer.css';

const DEFAULT_RACER = { id: 1, firstName: '', lastName: '', category: '' };
const DEFAULT_ON_DELETE_RACER = () => {};
const DEFAULT_PROPS = { racer: DEFAULT_RACER, onDeleteRacer: DEFAULT_ON_DELETE_RACER };

const DEFAULT_STATE = { confirmationMode: false, countDown: 0 };
const STATE_START_COUNT_DOWN = { confirmationMode: true, countDown: 10 };
const INTERVAL_COUNT_DOWN = 1000;

class ConfirmDeletionRacer extends React.Component {
  static defaultProps = DEFAULT_PROPS;

  state = DEFAULT_STATE;

  constructor(props) {
    super(props);
    this.handleClickDeleteButton = this.handleClickDeleteButton.bind(this);
    this.handleClickConfirmButton = this.handleClickConfirmButton.bind(this);
    this.handleCountDown = this.handleCountDown.bind(this)
  }

  render() {
    const { confirmationMode, countDown } = this.state;

    return !confirmationMode
      ? this.renderDeleteButton()
      : this.renderConfirmDeleteButton(countDown);
  }

  renderDeleteButton() {
    return (
      <button onClick={this.handleClickDeleteButton}
          className="confirm-deletion-racer__delete-button">
        <MdDelete className="delete-button__icon" />
      </button>
    );
  }

  handleClickDeleteButton() {
    this.setState(STATE_START_COUNT_DOWN);
    this.interval = setInterval( this.handleCountDown, INTERVAL_COUNT_DOWN);
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

  renderConfirmDeleteButton(countDown) {
    return (
      <div>
        <button onClick={this.handleClickConfirmButton}
            className="confirm-deletion-racer__confirm-delete-button">
          <MdWarning className="confirm-delete-button__icon" />
          ({countDown})
        </button>

        <span className="confirm-delete-button__helper">
          Cliquez de nouveau pour supprimer
        </span>
      </div>
    );
  }

  handleClickConfirmButton() {
    const { racer, onDeleteRacer } = this.props;

    onDeleteRacer(racer);
  }
}

export default ConfirmDeletionRacer;
