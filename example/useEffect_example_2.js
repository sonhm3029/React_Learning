// code ở đây sẽ thay thế vào file Content.js
// Sử dụng useEffect(callback, [])
// Để làm việc với DOM event

import { useEffect } from "react";

// Ví dụ 1: làm nut go to top

const types = ['posts', 'albums', 'todos'];

function GoToTopBtn() {
    return (
        <button
            style={{
                position: 'fixed',
                bottom: 20,
                right: 20
            }}
        >
                Go to top
        </button>
    )
}

function Content() {

    const [contents, setContents] = useState([]);
    const [slug, setSlug] = useState('posts');
    const [goToTop, setGoToTop] = useState(false);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${slug}`)
            .then(res => res.json())
            .then(results => setContents(results))
    },[slug]);

    // Làm nut Goto top

    const handleGotoTop = ()=> {
        setGoToTop(window.scrollY >= 200);
    }
    useEffect(()=> {
        document.addEventListener('scroll', handleGotoTop);

        // Cleanup function
        return ()=> {
            document.removeEventListener('scroll', handleGotoTop);
        }
    },[])

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
            {goToTop && <GoToTopBtn/>}
        </div>
    )
}

// Chú ý khi thêm event có phạm vi là window, cửa số trình duyệt
//  KHi component unmounted cần phải gỡ bỏ event, nếu không
// Sẽ gây ra tình trạng memory leak vì event cũ vẫn còn trong
// Bộ nhớ, khi component được mounted lại thì lại thêm event
// Khác.
// Để gỡ bỏ thì cần cleanup function ( hàm được trả về trong callbackk
// Của useEffect).

