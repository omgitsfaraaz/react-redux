import React from 'react';
import { buyTomato } from '../redux';
import { connect } from 'react-redux';

function TomatoContainer(props) {
    const { cart, numOfTomato, buyTomato } = props;
    return (
        <div>
            <h1>Cart - {cart}</h1>
            <h2>Tomato - ({numOfTomato})</h2>
            <button onClick={buyTomato}>Buy tomato</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.tomato.cart,
        numOfTomato: state.tomato.numOfTomato
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyTomato: () => dispatch(buyTomato())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TomatoContainer);
