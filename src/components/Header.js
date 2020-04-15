import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
  src: state.car.image,
  carName: state.car.name,
  price: state.car.price
  }

}
const Header = props => {

  return (
    <>
      <figure className="image is-128x128">
        <img src={props.src} alt={props.alt} />
      </figure>
      <h2>{props.carName}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

// export default Header;
export default connect(mapStateToProps, {})(Header)