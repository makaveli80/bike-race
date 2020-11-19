import React from 'react';
import { MdDelete, MdWarning } from 'react-icons/md';

import './ShowRacer.css'

const DEFAULT_RACER = { id: 1, firstName: '', lastName: '', category: '' };
const DEFAULT_ON_DELETE_RACER = () => {};
const DEFAULT_PROPS = { racer: DEFAULT_RACER, onDeleteRacer: DEFAULT_ON_DELETE_RACER };

const DEFAULT_STATE = { confirmationMode: false, countDown: 0 };
const STATE_START_COUNT_DOWN = { confirmationMode: true, countDown: 10 };
const INTERVAL_COUNT_DOWN = 1000;

class ShowRacer extends React.Component {
  static defaultProps = DEFAULT_PROPS;

  state = DEFAULT_STATE

  constructor(props) {
    super(props);
    this.handleClickDeleteButton = this.handleClickDeleteButton.bind(this);
    this.handleClickConfirmButton = this.handleClickConfirmButton.bind(this);
  }

  render() {
    const { racer: { lastName, firstName, category }} = this.props;

    return (
      <div className="show-racer">
        <div className="show-racer__name">{lastName} {firstName}</div>
        <div className="show-racer__category">{category}</div>
        <div className="show-racer__actions">{this.renderDeleteButton()}</div>
      </div>
    );
  }

  renderDeleteButton() {
    const { confirmationMode, countDown } = this.state;

    const deleteButton = (
      <button onClick={this.handleClickDeleteButton}
          className="actions__delete-button">
        <MdDelete className="delete-button__icon" />
      </button>
    );

    const confirmDeleteButton = (
      <div>
        <button onClick={this.handleClickConfirmButton}
            className="actions__confirm-delete-button">
          <MdWarning className="confirm-delete-button__icon" />
          ({countDown})
        </button>

        <span className="confirm-delete-button__helper">
          Cliquez de nouveau pour supprimer
        </span>
      </div>
    );

    return !confirmationMode
      ? deleteButton
      : confirmDeleteButton;
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

  handleClickConfirmButton() {
    const { racer, onDeleteRacer } = this.props;

    onDeleteRacer(racer);
  }
}

export default ShowRacer;
