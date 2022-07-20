import { useEffect, useState } from 'react';
const arr3 = [
    { id: 1, name: 'noidungcomment 1' },
    { id: 2, name: 'noidungcomment 2 ' },
    { id: 3, name: 'noidungcomment 3' },
];
function Cmt() {
    const [cmt, Setcmt] = useState(1);
    useEffect(() => {
        const handlvent = ({ detail }) => {
            console.log(detail);
        };
        window.addEventListener(`lesson-${cmt}`, handlvent);
        return () => {
            window.removeEventListener(`lesson-${cmt}`, handlvent);
        };
    }, [cmt]);
    return (
        <div>
            {arr3.map((index) => (
                <li
                    key={index.id}
                    style={{ color: cmt === index.id ? 'red' : '#333' }}
                    onClick={() => {
                        Setcmt(index.id);
                    }}
                >
                    {index.name}
                </li>
            ))}
        </div>
    );
}
export default Cmt;
