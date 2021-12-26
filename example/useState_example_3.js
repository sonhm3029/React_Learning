// Sử dụng useState làm việc với form : example

// Sử dụng với input:
function App() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // API để handle data từ form
    const handleForm = () => {
        console.table(name, email);
    }

    return (
        <div style={{padding: 32}}>
            <input
                value ={name}
                onChange={e => setName(e.target.value)} 
            />
            <input
                value ={email}
                onChange={e => setEmail(e.target.value)} 
            />
            <button onClick={handleForm}>Submit</button>
        </div>
    )
}

// Sử dụng với input type là radio

const options = ['option1', 'option2', 'option3'];

function App() {

    const [checked, setChecked] = useState();

    const handleForm = () => {
        console.log(checked);
    }

    return (
        <div style={{padding: 32}}>
            {options.map(
                (option, index) => {
                    return (
                        <div key={index +1}>
                            <input
                                checked= {checked === (index+1)}
                                type="radio"
                                onChange={() => {setChecked(index+1)}}
                            />
                            {option}
                        </div>
                    )
                } 
            )}
            <button onClick={handleForm}>Submit</button>
        </div>
    )
}

// Sử dụng với type là checkbox
const options = ['option1', 'option2', 'option3'];

function App() {

    const [checkeds, setCheckeds] = useState([]);

    const handleChecked = (id)=> {
        if(checkeds.includes(id)) {
            setCheckeds(checkeds.filter( item_id => item_id !=id ));
        }
        else{
            setCheckeds( prev => [...prev, id]);
        }
    }

    const handleForm = () => {
        console.log(checkeds);
    }

    return (
        <div style={{padding: 32}}>
            {options.map(
                (option, index) => {
                    return (
                        <div key={index +1}>
                            <input
                                checked={checkeds.includes(index+1)}
                                type="checkbox"
                                onChange={()=> {handleChecked(index+1)}}
                            />
                            {option}
                        </div>
                    )
                } 
            )}
            <button onClick={handleForm}>Submit</button>
        </div>
    )
}