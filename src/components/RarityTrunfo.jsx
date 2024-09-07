import { Component } from 'react';
import PropTypes from 'prop-types';

class RarityTrunfo extends Component {
  getRarityClass(cardRare) {
    switch (cardRare) {
      case 'normal':
        return 'rarity-normal';
      case 'raro':
        return 'rarity-rare';
      case 'muito raro':
        return 'rarity-very-rare';
      default:
        return '';
    }
  }

  render() {
    const { cardRare, cardTrunfo } = this.props;
    const trunfoh2 = (
      <h2 data-testid="trunfo-card" className="trunfo-card">SUPER CARTA</h2>);
    const rarityClass = this.getRarityClass(cardRare);

    return (
      <div className={`rare-trunfo-container ${rarityClass}`}>
        <h3 data-testid="rare-card" className={`rare-card ${rarityClass}`}>{ cardRare }</h3>
        { cardTrunfo && <div className="trunfo-container">{trunfoh2}</div> }
      </div>
    );
  }
}

RarityTrunfo.propTypes = {
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default RarityTrunfo;
