// Example with binding:
// one way binding (ràng buộc một chiều): Khi thay đổi UI thì state thay đổi.
// two way biding (ràng buộc 2 chiều): Khi thay đổi UI thì state thay đổi
// Và khi thay đổi state trong code thì UI cũng thay đổi.

// Một chiều: Khi click button thì chỉ có name được in ra
// mà giá trị của ô input hay UI không thay đổi.
function App() {

    const [name, setName] = useState('');

    console.log(name);

    return (
        <div style={{padding: 32}}>
            <input
                onChange= {e => setName(e.target.value)}
            />
            <button onClick={() => setName('hoàng Minh SƠn')}>Submit</button>
        </div>
    )
}

// Nếu ta code:
/* <input
        value={name}
        onChange= {e => setName(e.target.value)}
    />
*/
// thì khi click submit button nó sẽ thay đổi value
// Như vậy cả code và UI đều tác động lẫn nhau => 2 way binding.