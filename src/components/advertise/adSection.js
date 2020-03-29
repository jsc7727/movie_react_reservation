import React from 'react';
import { connect } from 'react-redux';

let Counter = () =>{
    return (
        <h1>VALUE: { this.props.value }</h1>
    );
};

const mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
};

Counter = connect(mapStateToProps)(Counter);

export default Counter;
