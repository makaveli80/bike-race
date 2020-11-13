import React from 'react';
import { MdHelpOutline, MdHighlightOff, MdPersonAdd, MdFormatListNumbered, MdSearch, MdDeleteForever } from 'react-icons/md';

import './RacersSumary.css';

const DEFAULT_STATE = { showTipsMode: false };

class RacersSumary extends React.Component {

  state = DEFAULT_STATE;

  constructor(props) {
    super(props);
    this.handleClickTitle = this.handleClickTitle.bind(this);
  }

  render() {
    return (
      <div>
        <h1 className="racers-sumary__title"
            onClick={this.handleClickTitle}>
          Gestion des coureurs
          {this.renderHelpIconTitle()}
        </h1>

        {this.renderTips()}
      </div>
    );
  }

  handleClickTitle() {
    const { showTipsMode } = this.state;
    const nextMode = !showTipsMode;

    this.setState({ showTipsMode: nextMode });
  }

  renderHelpIconTitle() {
    const { showTipsMode } = this.state;

    if (showTipsMode) {
      return (<MdHighlightOff className="title__icon" />);
    } else {
      return (<MdHelpOutline className="title__icon" />);
    }
  }

  renderTips() {
    const { showTipsMode } = this.state;

    if (showTipsMode) {
      return (
        <div className="racers-sumary__tips">
          <div className="tips__left-tips">
            <p className="tips__introduction-text">
              <span>Sur la partie gauche:</span>
            </p>
            <p>
              <MdPersonAdd className="tips__icon-list" />
              Utilisez le formulaire pour ajouter des coureurs.
            </p>
          </div>
          <div className="tips__right-tips">
            <p className="tips__introduction-text">
              <span>Sur la partie droite:</span>
            </p>
            <p>
              <MdFormatListNumbered className="tips__icon-list" />
              Visualisez la liste des coureurs dans le tableau.
              <br/>
              <MdSearch className="tips__icon-list" />
              Filtrez les coureurs à l'aide de la barre de recherche.
              <br/>
              <MdDeleteForever className="tips__icon-list" />
              Supprimer un des coureurs de la liste (ne pas oublier de confirmer la suppression en cliquant sur le bouton rouge).
            </p>
          </div>
        </div>
      );
    } else {
      return (null);
    }
  }
}

export default RacersSumary;
