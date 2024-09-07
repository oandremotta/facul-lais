import { Component } from 'react';
import PropTypes from 'prop-types';
import Attribute from './Attribute';
import RarityTrunfo from './RarityTrunfo';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteBtn,
      deleteCard,
    } = this.props;

    return (
      <div className="card-with-btn">
        <div className="card">
          <div className="card-second-border">
            <div className="card-subcontainer">
              <h2 data-testid="name-card" className="name-card">{ cardName }</h2>
              <img
                data-testid="image-card"
                src={ cardImage }
                alt={ cardName }
                className="image-card"
              />
              <p data-testid="description-card" className="description-card">
                { cardDescription }
              </p>
              <Attribute datatestid="attr1-card" attribute={ cardAttr1 } name="Tamanho" />
              <Attribute datatestid="attr2-card" attribute={ cardAttr2 }  name="Complexidade da Célula"/>
              <Attribute datatestid="attr3-card" attribute={ cardAttr3 }  name="Tempo de renovação"/>
              <RarityTrunfo cardRare={ cardRare } cardTrunfo={ cardTrunfo } />
            </div>
          </div>
        </div>
        { deleteBtn && (
          <button
            data-testid="delete-button"
            type="button"
            className="delete-btn"
            onClick={ () => deleteCard(cardName) }
          >
            Excluir
          </button>) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteBtn: PropTypes.bool,
  deleteCard: PropTypes.func,
};

Card.defaultProps = {
  deleteBtn: false,
  deleteCard: () => console.log('default'),
};

export default Card;
