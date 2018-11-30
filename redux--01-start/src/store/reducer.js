
const initialState = {
    counter: 0,
    results: []
}


const reducer = (state = initialState, action) => {
        switch(action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    counter: state.counter + 1
                }
            case 'DECREMENT': 
                return {
                    ...state,
                    counter: state.counter - 1
                }
            case 'Add': 
                return {
                    ...state,
                    counter: state.counter + action.val
                }
            case 'Subtract':
                return {
                    ...state,
                    counter: state.counter - action.val
                }
                case 'STORE_RESULT':
                return {
                    ...state,
                    results: state.results.concat({id: new Date(), value: state.counter})
                }
        }

  return state;
}

export default reducer;