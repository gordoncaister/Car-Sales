import React from 'react';

import {connect} from "react-redux"

const mapStateToProps = state => {
  return {
    state:state
  }
}


const AdditionalFeature = props => {
  const {buyItem} = props;

  const handleBuy = e => {
    e.preventDefault();
    buyItem(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleBuy} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(mapStateToProps,{})(AdditionalFeature);