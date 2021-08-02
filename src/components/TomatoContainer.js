import React from 'react';
import { buyTomato } from '../redux';
import { connect } from 'react-redux';

function TomatoContainer(props) {
    const { numOfTomato, buyTomato } = props;
    return (
        <div>
            {numOfTomato <= 0 ? (
                <h1>No tomatoes boss!</h1>
            ) : (
                <div>
                    <h2>Tomato - ({numOfTomato})</h2>
                    <button onClick={buyTomato}>Buy tomato</button>
                </div>
            )}
            
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
