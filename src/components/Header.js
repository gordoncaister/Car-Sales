import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    src: state.car.image,
    name: state.car.name,
    price: state.car.price
  }
}

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.src} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

export default connect(mapStateToProps, {})(Header);
