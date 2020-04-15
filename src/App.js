import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from "react-redux";
import {addAdditionalFeatures} from "./actions"


const App = (props) => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
    
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log("Additional Feature:",props.addAdditionalFeatures)
    props.addAdditionalFeatures(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures

  }
}

export default connect(mapStatetoProps,{addAdditionalFeatures})(App);
