import React from 'react';
import Card from './components/Card';
import Filter from './components/Filter';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      nameFilterField: '',
      rarityFilterField: '',
      trunfoFilter: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.checkForTrunfo = this.checkForTrunfo.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.filterChange = this.filterChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.formValidation());
  }

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }), () => this.checkForTrunfo());
  }

  checkForTrunfo() {
    const { savedCards } = this.state;
    const testTrunfo = savedCards.some(({ cardTrunfo }) => cardTrunfo);
    this.setState({ hasTrunfo: testTrunfo });
  }

  formValidation() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const attr1 = +cardAttr1;
    const attr2 = +cardAttr2;
    const attr3 = +cardAttr3;
    const maxAtt = 90;
    const maxAttrSum = 210;
    const notEmpty = (cardName && cardDescription && cardImage);
    const attrLimit = (attr1 <= maxAtt && attr2 <= maxAtt && attr3 <= maxAtt);
    const attrMin = (attr1 >= 0 && attr2 >= 0 && attr3 >= 0);
    const attrSum = (attr1 + attr2 + attr3 <= maxAttrSum);

    if (notEmpty && attrLimit && attrMin && attrSum) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  deleteCard(name) {
    const { savedCards } = this.state;
    const newDeck = savedCards
      .filter(({ cardName }) => cardName !== name);
    this.setState({
      savedCards: newDeck,
    }, () => this.checkForTrunfo());
  }

  filterChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value });
  }

  render() {
    const { savedCards, nameFilterField, rarityFilterField, trunfoFilter } = this.state;
    const filteredCards = savedCards
      .filter(({ cardName }) => cardName.includes(nameFilterField))
      .filter((card) => ((rarityFilterField === '')
        ? card
        : card.cardRare === rarityFilterField));

    return (
      <>
        <main className="main-container">
          <div className="form-title-container">
            <div className="form-title-subcontainer">
              <h2 className="title">Adicionar nova carta</h2>
              <Form
                { ...this.state }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
              />
            </div>
          </div>
          <div className="preview-title-container">
            <div className="preview-title-subcontainer">
              <h2 className="title">Preview</h2>
              <Card { ...this.state } />
            </div>
          </div>
        </main>
        <section className="filter-deck-container">
          <Filter
            { ...this.state }
            filterChange={ this.filterChange }
          />
          <section className="card-list">
            {!trunfoFilter
              ? (filteredCards
                .map((card) => (<Card
                  key={ card.cardName }
                  deleteBtn
                  deleteCard={ this.deleteCard }
                  { ...card }
                />)))
              : (savedCards.filter(({ cardTrunfo }) => cardTrunfo)
                .map((card) => (<Card
                  key={ card.cardName }
                  deleteCard={ this.deleteCard }
                  deleteBtn
                  { ...card }
                />)))}
          </section>
        </section>
      </>
    );
  }
}

export default App;
