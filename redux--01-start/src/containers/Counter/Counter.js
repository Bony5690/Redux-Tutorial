import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    <li>{this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={this.props.onDeleteResult}>{strResult.value}</li>
                        ))}</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
      onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
      onAdd: () => dispatch({type: 'Add', val: 15}),
      onSubtract: () => dispatch({type: 'Subtract', val: 15}),
      onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
      onDeleteResult: () => dispatch({type: 'DELETE_RESULT'}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);