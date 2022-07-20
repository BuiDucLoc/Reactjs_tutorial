import { useState, useEffect } from 'react';
import App1 from './App1';
import Cmt from './Cmt';
import UseLayouteffect from './UseLayouteffect';
import UseRef from './UseRef';
import Memo from './Memo';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import Todolist from './Todolist';

const courses = [
    { id: 1, name: 'toan' },
    { id: 2, name: 'ly' },
    { id: 3, name: 'hoa' },
    { id: 4, name: 'sinh' },
];

function App() {
    const arr = [100, 200, 400];
    const arr1 = ['toan', 'ly', 'hoa'];
    const [couter, setCouter] = useState(() => {
        const totlal = arr.reduce((pre, nex) => pre + nex);
        return totlal;
    });
    const [couter1, setCouter1] = useState(arr1);
    const handleIncrease = () => {
        setCouter((preve) => preve + 1);
    };
    const handleIncrease1 = (index) => {
        setCouter1([...couter1, index]);
    };
    console.log(couter1);

    const girt = ['toan', 'ly', 'hoa'];
    const [pre2, setPre2] = useState();

    const handlegift = () => {
        const index = Math.floor(Math.random() * girt.length);
        setPre2(girt[index]);
    };
    const [pre3, setPre3] = useState();

    const [pre4, setPre4] = useState(1);
    const handlesumit = () => {
        console.log('hihi');
    };

    // todolisst
    const [todo, list] = useState('');
    const [todo1, list1] = useState(JSON.parse(localStorage.getItem('job')) || []);

    // list1(todo)
    const handleadd = () => {
        list1((thamso) => {
            const newtodo1 = [...thamso, todo];
            const newtodo11 = JSON.stringify(newtodo1);
            localStorage.setItem('job', newtodo11);
            return newtodo1;
        });
        list('');
    };

    // Mounted & Unmounted? userEffect
    const [toogle, settoogle] = useState(false);
    const [commnet, setcomment] = useState(false);

    const [layouteffect, Setlayouteffect] = useState(false);

    const handleuseLayouteffect = () => {
        Setlayouteffect(!layouteffect);
    };

    const [useRef1, setUseRef] = useState(false);
    const handleUseRef = () => {
        setUseRef(!useRef1);
    };

    const [memo, etMemo] = useState(false);
    const handlmemo = () => {
        etMemo(!memo);
    };

    const [Layouteffect, setLayouteffect] = useState(false);

    const [usereduct, setUsereduct] = useState(false);
    const handluserreducer = () => {
        setUsereduct(!usereduct);
    };

    const [todolist, setTodo] = useState(false);
    const handletodo = () => {
        setTodo(!todolist);
    };

    return (
        <div className="App">
            <h1>{couter}</h1>
            <button onClick={handleIncrease}>Click me</button>
            <button
                onClick={() => {
                    handleIncrease1('hi');
                }}
            >
                Click me
            </button>
            <h2>{pre2 || 'Mời bạn click chuột'}</h2>
            <button onClick={handlegift}>clickme</button>
            <br />
            <input value={pre3} onChange={(e) => setPre3(e.target.value)} />
            {courses.map((index) => (
                <div key={index.id}>
                    <input type="radio" checked={pre4 === index.id} onChange={() => setPre4(index.id)} />
                    {index.name}
                </div>
            ))}
            <button onClick={handlesumit}>Dang ky</button>
            {courses.map((value) => (
                <div key={value.id}>
                    <input type="checkbox" checked={pre4 === value.id} onChange={() => setPre4(value.id)} />
                    {value.name}
                </div>
            ))}
            <button onClick={handlesumit}>Dang ky</button>
            {/* todolisst */}
            <br />
            <input
                value={todo}
                onChange={(e) => {
                    list(e.target.value);
                }}
            />
            <button onClick={handleadd}>Add</button>
            <ul>
                {todo1.map((index, value) => (
                    <li key={value}>{index}</li>
                ))}
            </ul>
            <br />
            {/* Mounted & Unmounted? */}
            {/* userEffect */}
            <button
                onClick={() => {
                    settoogle(!toogle);
                }}
            >
                Toogle app1
            </button>
            {toogle && <App1 />}

            <button
                onClick={() => {
                    setcomment(!commnet);
                }}
            >
                comment
            </button>
            {commnet && <Cmt />}

            <button onClick={handleuseLayouteffect}>useLayouteffect</button>
            {layouteffect && <UseLayouteffect />}
            <button onClick={handleUseRef}>UseRef</button>
            {useRef1 && <UseRef />}
            <button onClick={handlmemo}>usememo</button>
            {memo && <UseMemo />}
            <button onClick={handluserreducer}>UseReducer</button>
            {usereduct && <UseReducer />}
            <button onClick={handletodo}>UseReducertodo</button>
            {todolist && <Todolist />}
            <Memo thamso={arr1} a={1} b={2}></Memo>
        </div>
    );
}

export default App;
