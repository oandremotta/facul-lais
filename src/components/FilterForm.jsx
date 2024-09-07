import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterForm extends Component {
  render() {
    const { filterChange, nameFilterField } = this.props;
    const { rarityFilterField } = this.props;
    const { trunfoFilter } = this.props;

    return (
      <form className="form">
        <label htmlFor="nameFilterField" className="label-up">
          Nome
          <input
            type="text"
            name="nameFilterField"
            data-testid="name-filter"
            value={ nameFilterField }
            onChange={ filterChange }
            disabled={ trunfoFilter }
          />
        </label>
        <label htmlFor="rarityFilterField" className="label-up">
          Raridade
          <select
            name="rarityFilterField"
            data-testid="rare-filter"
            value={ rarityFilterField }
            onChange={ filterChange }
            disabled={ trunfoFilter }
          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          <input
            className="checkbox"
            type="checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            onChange={ filterChange }
          />
          Super Trunfo
        </label>
      </form>
    );
  }
}

FilterForm.propTypes = {
  filterChange: PropTypes.func,
  nameFilterField: PropTypes.string,
  rarityFilterField: PropTypes.string,
  trunfoFilter: PropTypes.bool,
}.isRequired;

export default FilterForm;
