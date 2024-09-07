import { Component } from 'react';
import PropTypes from 'prop-types';

class Attribute extends Component {
  render() {
    const { datatestid, attribute, attNumber, name } = this.props;
    return (
      <div data-testid={ datatestid } className="attribute-container">
        <p>
          { `${name}` }
        </p>
        <h4 className="attribute-value">{ attribute }</h4>
      </div>
    );
  }
}

Attribute.propTypes = {
  datatestid: PropTypes.string,
  attribute: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default Attribute;
