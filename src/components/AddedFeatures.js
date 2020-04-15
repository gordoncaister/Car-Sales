import React from 'react';
import {connect} from "react-redux"
import AddedFeature from './AddedFeature';

const mapPropsToState = state => {
  console.log("added features state",
state)
  return {features: state.car.features}
}

const AddedFeatures = props => {
  console.log("addedFeatures props",props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(mapPropsToState, {})(AddedFeatures);
