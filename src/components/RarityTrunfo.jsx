import { Component } from 'react';
import PropTypes from 'prop-types';

class RarityTrunfo extends Component {
  render() {
    const { cardRare, cardTrunfo } = this.props;
    const trunfoh2 = (
      <h2 data-testid="trunfo-card" className="trunfo-card">Super Carta</h2>);
    return (
      <div className="rare-trunfo-container">
        <h3 data-testid="rare-card" className="rare-card">{ cardRare }</h3>
        { cardTrunfo
        && <div className="trunfo-container">{trunfoh2}</div> }
      </div>
    );
  }
}

RarityTrunfo.propTypes = {
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default RarityTrunfo;
