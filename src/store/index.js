import { createStore } from "redux"


const counterReducer = (state = { counter: 0, toggle: true }, action) => {

    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
            toggle: state.toggle
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            toggle: state.toggle
        }
    }
    if (action.type === 'INCRESE') {
        return {
            counter: state.counter + action.amount,
            toggle: state.toggle
        }
    }
    if (action.type === 'TOGGLE') {
        return {
            counter: state.counter,
            toggle: !state.toggle
        }
    }

    return state;
}
const store = createStore(counterReducer);

export default store;