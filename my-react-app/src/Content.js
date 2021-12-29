import {useState, useEffect, useRef} from 'react'


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

export default Content;
