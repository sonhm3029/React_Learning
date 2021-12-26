const gifts = ['phan thuong 1', 'phan thuong 2', 'phan thuong 3'];

function App() {

    const [gift, setGift] = useState('');

    const takeGift = () => {
        const gift_index = Math.floor(Math.random(3));
        setGift(gifts[gift_index]);
    }

    return (
        <div id="App" style={{padding: 32}}>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick = {takeGift}>Lấy thưởng</button>
        </div>
    )
}