import React, { Component } from 'react';
import FilterForm from './FilterForm';

class Filter extends Component {
  render() {
    return (
      <div className="filter-container">
        <div className="filter-subcontainer">
          <h2 className="title">Filtros de busca</h2>
          <FilterForm { ...this.props } />
        </div>
      </div>
    );
  }
}

export default Filter;
