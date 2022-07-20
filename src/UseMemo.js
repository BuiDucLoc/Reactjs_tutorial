import { useEffect, useMemo, useState, useRef } from 'react';
function UseMemo() {
    const [name, setName] = useState('');
    const [gia, setGia] = useState('');
    const [listcart, setListcart] = useState([]);
    const bien = useRef();
    const addCart = () => {
        setListcart([...listcart, { name: name, gia: parseInt(gia) }]);
        setGia('');
        setName('');
        bien.current.focus();
    };
    //sủ dụng vì khi go thì tong bi rerander- nen sử dụng use memo
    const tong1 = useMemo(() => {
        const tong = listcart.reduce((bien, giatri) => {
            return bien + giatri.gia;
        }, 0);
        return tong;
    }, [listcart]);
    return (
        <div>
            <input
                ref={bien}
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                placeholder="Nhập name"
            />
            <br />
            <input
                value={gia}
                onChange={(e) => {
                    setGia(e.target.value);
                }}
                placeholder="Nhập giá"
            />
            <br />
            <button onClick={addCart}>Thêm</button>
            <h1>Total:{tong1}</h1>
            {listcart.map((index) => {
                return (
                    <li key={index.name}>
                        {index.name}
                        {index.gia}
                    </li>
                );
            })}
        </div>
    );
}
export default UseMemo;
