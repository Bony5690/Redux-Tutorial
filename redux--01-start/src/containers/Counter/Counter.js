import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 15" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtract}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    <li>{this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() =>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                        ))}</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
      onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
      onAdd: () => dispatch({type: actionTypes.ADD, val: 15}),
      onSubtract: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
      onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
      onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);