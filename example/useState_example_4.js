// ví dụ useState và localStorage vào làm todoList

function App() {

    const [work, setWork] = useState('');
    const [listWorks, setListWorks] = useState(()=>{
        return JSON.parse(localStorage.getItem('works')) ??[];
    });


    const addWork = () => {
        setListWorks( pre => {
            const newListWorks = [...pre, work]
            localStorage.setItem('works', JSON.stringify(newListWorks));
            return newListWorks;
        });
        setWork('');
    }

    return (
        <div id='App' style={{padding:32}}>
            <input
                value={work}
                onChange={e => setWork(e.target.value)}
            />
            <button onClick={addWork}>Thêm</button>
            <ul>
                {listWorks.map( (item,index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}