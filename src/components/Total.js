import React from 'react';
import {connect} from "react-redux"

const mapStateToProps = state => {
  console.log("state",state)
  return {
    price: state.price,
    additionalPrice: state.additionalPrice
  }
}

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect(mapStateToProps, {}) (Total);
