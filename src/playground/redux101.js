import {createStore} from 'redux';

//action generator 

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: "INCREMENT",
        incrementBy
    };
}

const decrementCount = ({ decrementBy = 1 } = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
)

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: "SET",
    count
});

//reducers

const countReducer = (state = { count: 0 }, action) => {
    //handling action types
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        }
        case 'RESET':
        return {
            count: 0
        }

        case 'SET':
        return {
            count: action.count
        }
        default:
            return state;
    };
};


const store = createStore(countReducer);

//subscribing a function for a state change -> return value unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

//dispatching action with a type name
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
//calling unsubscribe


store.dispatch(incrementCount());


store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});


store.dispatch(resetCount());

store.dispatch(setCount({count: 102}));