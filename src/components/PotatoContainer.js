import React from 'react';
import { buyPotato } from '../redux';
import { connect } from 'react-redux';

function PotatoContainer(props) {
    const { numOfPotatoes, buyPotato } = props;
    return (
        <div>
            {numOfPotatoes <= 0 ? (
                <h1>No potatoes boss!</h1>
            ) : (
                <div>
                    <h2>Potato - ({numOfPotatoes})</h2>
                    <button onClick={buyPotato}>Buy potato</button>
                </div>
            )}
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
