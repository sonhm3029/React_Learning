// code ở đây sẽ thay thế vào file Content.js

// Ví dụ với: useEffect(callback) để thay đổi title

function Content() {

    const [title, setTitle] = useState('');

    useEffect(()=> {
        document.title = title;
        console.log('title changed')
    })

    return (
        <div id="Content">
            <input
                onChange={e => setTitle(e.target.value)}
            />
        </div>
    )
}


// Ví dụ sử dụng useEffect(callback,[]) để call API

function Content() {

    const [contents, setContents] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(results => setContents(results))
    },[])

    return (
        <div id="Content">
            <ul>
                {contents.map( content => {
                    return (
                        <li key={content.id}>
                            {content.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

// Ví dụ với useEffect để call các API khác nhau một phần
// Ở ví dụ dưới đây ta sẽ call các API:
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/todos
// Ta thấy các API url chỉ khác nhau về /:slug cuối cùng
// Nên có thể dùng useEffect(callback, [deps])

const types = ['posts', 'albums', 'todos'];

function Content() {

    const [contents, setContents] = useState([]);
    const [slug, setSlug] = useState('posts')

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${slug}`)
            .then(res => res.json())
            .then(results => setContents(results))
    },[slug])

    return (
        <div id="Content">
            <div id="menu">
                {types.map( type => {
                    <button
                        key={type}
                        onClick={() => setSlug(type)}
                        style={type === slug ? {
                            color: 'white',
                            backgroundColor: '#333'
                        }:{}}
                    >
                        {type}
                    </button>
                })}
            </div>
            <ul>
                {contents.map( content => {
                    return (
                        <li key={content.id}>
                            {content.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

