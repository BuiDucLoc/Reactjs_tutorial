import { useState, useReducer } from 'react';

//1 innit state

const initState = 0;
//2 action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

//3 reduce
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('invalid action');
    }
};
function UseReducer() {
    // dispatch
    const [count, setCount] = useReducer(reducer, initState);
    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(UP_ACTION);
                }}
            >
                up
            </button>
            <button
                onClick={() => {
                    setCount(DOWN_ACTION);
                }}
            >
                down
            </button>
        </div>
    );
}

export default UseReducer;
