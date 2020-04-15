import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from "react-redux";
import {addAdditionalFeatures} from "./actions"

const mapStatetoProps = state => {
  return {
    state:state
  }
}

const App = (props) => {
  console.log("app props: ", props)

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
        <AddedFeatures  />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem}/>
        <Total  />
      </div>
    </div>
  );
};



export default connect(mapStatetoProps,{addAdditionalFeatures})(App);
