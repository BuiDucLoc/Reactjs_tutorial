import { useEffect, useState } from 'react';

function App1() {
    {
        /* userEffect */
    }
    // thp1
    const tab = ['posts', 'comments', 'albums'];
    const [title, setTitle] = useState('');
    const [title3, setTitle3] = useState('xinchao');
    console.log(title3);

    const [title2, setTitle2] = useState([]);
    useEffect(() => {
        document.title = title;
    });
    // th3 thay doi khi set state
    const [tab1, settab1] = useState('posts');

    // thp2
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${tab1}`)
            .then((Response) => Response.json())
            .then((script) => setTitle2(script));
    }, [tab1]);

    // addevent scroll
    const [scroll, setEvent] = useState(false);
    console.log(scroll);
    const handleclick = () => {
        window.scrollY >= 200 ? setEvent(true) : setEvent(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleclick);

        // clieaup bộ nhớ nếu không sử dụng window
        return () => {
            window.removeEventListener('scroll', handleclick);
        };
    }, []);

    const [chieurong, setchieurong] = useState(window.innerWidth);
    const handlecresi = () => {
        setchieurong(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handlecresi);

        // clieaup bộ nhớ nếu không sử dụng window
        return () => {
            window.removeEventListener('resize', handlecresi);
        };
    }, []);

    // bàitoandemnguoc
    const [count, setCount] = useState(108);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((re) => {
                return re - 1;
            });
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);
    // api

    // thaydoianh

    const [img, handleimg1] = useState();

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(img);
        };
    }, [img]);

    const handleimg = (e) => {
        const file = e.target.files[0];
        file.img = URL.createObjectURL(file);
        handleimg1(file.img);
    };

    return (
        <div>
            <div>
                <h1>{chieurong}</h1>
            </div>
            <h2>Xin chào ae</h2>
            <input onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {tab.map((index) => (
                    <button
                        key={index}
                        style={index === tab1 ? { color: '#ffff', backgroundColor: '#000' } : {}}
                        onClick={() => settab1(index)}
                    >
                        {index}
                    </button>
                ))}
            </ul>
            {/* <ul>
                {title2.map((index) => (
                    <li key={index.id}>{index.title ? index.title : index.name}</li>
                ))}
            </ul> */}
            {scroll && <button style={{ position: 'fixed', bottom: 20, right: 20 }}>gototop</button>}

            {/* demnguoc */}
            <div>{count}</div>

            {/* chankhithaydoianh */}
            <input type="file" onChange={handleimg} />
            {img && <img src={img} alt="" />}
        </div>
    );
}
export default App1;
