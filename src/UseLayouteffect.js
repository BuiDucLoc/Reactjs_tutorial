import { useEffect, useLayoutEffect, useState } from 'react';
function UseLayouteffect() {
    const [sum, Setsum] = useState(0);
    useEffect(() => {
        if (sum > 3) {
            Setsum(0);
        }
    }, [sum]);
    const handlesums = () => {
        Setsum(sum + 1);
    };
    return (
        <div>
            {sum}
            <button onClick={handlesums}>click</button>
        </div>
    );
}

export default UseLayouteffect;
