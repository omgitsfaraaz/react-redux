import React from 'react';
import { buyPotato } from '../redux';
import { connect } from 'react-redux';

function PotatoContainer(props) {
    const { cart, numOfPotatoes, buyPotato } = props;
    return (
        <div>
            <h1>Cart - {cart}</h1>
            <h2>Tomato - ({numOfPotatoes})</h2>
            <button onClick={buyPotato}>Buy potato</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.potato.cart,
        numOfPotatoes: state.potato.numOfPotatoes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyPotato: () => dispatch(buyPotato())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PotatoContainer);
