import { useReducer, useRef } from 'react';

//1 innit state
const initState = {
    job: '',
    jobs: [],
};
//2 action
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setjob = (pre) => {
    return {
        type: SET_JOB,
        payload: pre,
    };
};

const addjob = (pre) => {
    return {
        type: ADD_JOB,
        payload: pre,
    };
};

const deletejob = (pre) => {
    return {
        type: DELETE_JOB,
        payload: pre,
    };
};

//3 reduce
const reduce = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };

        case DELETE_JOB:
            const arra_moi = [...state.jobs];
            arra_moi.splice(action.payload);
            return {
                ...state,
                jobs: arra_moi,
            };
        default:
            throw new Error('invalid action');
            console.log(state);
    }
};

//2 dispatch
function Todolist() {
    const focus1 = useRef();
    const [state, dispatch] = useReducer(reduce, initState);
    const { job, jobs } = state;
    const handlesubmit = () => {
        dispatch(addjob(job));
        state.job = '';
        focus1.current.focus();
    };
    const handleclick = (a) => {};
    return (
        <div>
            <input
                ref={focus1}
                value={job}
                onChange={(e) => {
                    dispatch(setjob(e.target.value));
                }}
            />
            <button onClick={handlesubmit}>Add</button>
            <ul>
                {jobs.map((index, key) => {
                    return (
                        <li key={index}>
                            {index}
                            <span
                                onClick={() => {
                                    dispatch(deletejob(key));
                                }}
                            >
                                &times;
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Todolist;
