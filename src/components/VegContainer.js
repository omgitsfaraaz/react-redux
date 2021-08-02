import React from 'react';
import PotatoContainer from './PotatoContainer';
import TomatoContainer from './TomatoContainer';
import { connect } from 'react-redux';

function VegContainer(props) {
    return (
        <div>
            <h1>Cart - {props.cart}</h1>
            <PotatoContainer />
            <TomatoContainer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(VegContainer);
