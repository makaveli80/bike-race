import React from 'react';

import './ListRacers.css';

const DEFAULT_CHILDREN = [];

const ListRacers = ({ children = DEFAULT_CHILDREN }) => {
  return (
    <div>
      {renderHeader}
      {renderList(children)}
    </div>
  );
}

const renderHeader = (
  <div className="list-racers__header">
    <div className="header__name">Coureurs</div>
    <div className="header__category">Catégories</div>
    <div className="header__actions">Actions</div>
  </div>
);

const renderList = (children) => {
  const hasRacers = React.Children.count(children) > 0;
  return hasRacers
    ? renderRacers(children)
    : renderNoRacer;
}

const renderRacers = (children) => {
  const renderEachChild = React.Children.map(children, child =>
    <li className="list-racers__racer">
      {child}
    </li>
  );

  return (
    <ul className="list-racers__racers divide-y divide-gray-400">
      {renderEachChild}
    </ul>
  );
}

const renderNoRacer = (
  <div className="list-racers__no-racer divide-y divide-gray-400">
    Aucun coureur encore enregistré
  </div>
);

export default ListRacers;
