import { useEffect, useLayoutEffect, useState, useRef } from 'react';
function UseRef() {
    let id = useRef();
    let giatritruoc = useRef();
    const [coutdow, setcoutdow] = useState(200);
    useEffect(() => {
        giatritruoc.current1 = coutdow;
    }, [coutdow]);
    const handlestart = () => {
        id.current = setInterval(() => {
            setcoutdow((doiso) => {
                return doiso - 1;
            });
        }, 1000);
        console.log(id.current);
    };
    const handlend = () => {
        clearInterval(id.current);
        console.log(id.current);
    };

    console.log(coutdow, giatritruoc.current1);
    return (
        <div>
            <h1>{coutdow}</h1>
            <button onClick={handlestart}>start</button>
            <button onClick={handlend}>end</button>
        </div>
    );
}
export default UseRef;
