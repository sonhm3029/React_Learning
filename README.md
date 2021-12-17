# REACTJS SELF LEARNING

## I. React.createElement()

Dùng để tạo ra các element trước khi render vào DOM, tương tự như `document.createElement()` nhưng có cú pháp và cách dùng như sau.

**Syntax:**

```Javascript
    const reactElement = React.createElement(
        type,
        props,
        children1,
        children2,
        ...
    );
```

**Ví dụ:**

```html
    <!-- Tạo ra element sau -->
    <ul id="demo">
        <li class="item" style="color:red;">1</li>
        <li class="item" style="color:blue;font-size:1.6rem;">2</li>
        <li>3<li>
    </ul>
```

Tạo với `React.createElement()`

```Javascript
    const list = React.createElement(
        "ul",
        {
            id: "demo",
            style: {
                backgroundColor: "blue",
                position: "absolute"
            }
        },
        React.createElement(
            "li",
            {
                class: "item",
                style: {
                    color: "red"
                }
            },
            "1"
        ),
        React.createElement(
            "li",
            {
                class: "item",
                style: {
                    color:"blue",
                    font-size:"1.6rem"
                }
            },
            "2"
        ),
        React.createElement(
            "li",
            null,
            "3"
        )
    )
```

## II. React-DOM

### 1. ReactDOM.render()

**Syntax:**

```Javascript
    ReactDOM.render(element, container, callback)
```

Ví dụ cho:

```html
    <div id="root"></div>
```

Cần render:

```html
    <div id="demo">
        <h1>Heading</h1>
        <p>Đây là đoạn văn demo</p>
    </div>
```

vào trong thẻ div, `id="root"`

```Javascript
    //Tạo  element
    const element = React.createElement(
        "div",
        {
            id:"demo"
        },
        React.createElement(,
            "h1",
            {},
            "Heading"
        ),
        React.createElement(,
            "p",
            {},
            "Đây là đoạn văn demo"
        ),
    );

    //Lấy ra container
    const container = document.getElementById("root");

    //Render
    ReactDOM.render(element, container);

```

## III. JSX

- Để render được element vào `root` thì cần truyền vào tham số `element` là ReactElement mà ReactElement thì được tạo bằng các cú pháp `React.createElement()` => rất phức tạp.

Vì vậy mà ta dùng `JSX (Javascript XML)` có cấu trúc tương tự như HTML để tạo các `ReactElement`. Việc biên dịch từ JSX ra Javascript để tạo `ReactElement` được thực thi bởi thư viện `babel` của javascript. Thư viện này sẽ biên dịch đoạn code viết bằng JSX ra Javascript thực hiện tạo element như các ví dụ ở bài trước.

Xem live demo babel chuyển đổi JSX thành Javascript ở web sau:

[babel live demo](https://babeljs.io/repl#?browsers=&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEGAdRACcEATbAegMKA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact&prettier=false&targets=&version=7.15.6&externalPlugins=&assumptions=%7B%7D)

**Ví dụ:**

![jsx_1](img/JSX_1.png)

Ví dụ render mảng dữ liệu với JSX:

![jsx_2](img/JSX_2.png)

Chú ý khi với `javascript` thường, mảng names sau khi map sẽ cần phải join lại để dùng vs `innerHTML` method còn đối với `JSX` thì việc truyền vào mảng là hợp lý đối với cú pháp `React.createElement`. Xem hình ảnh sau để hiểu rõ tại sao ta không cần map mảng names khi dùng với `React` và `JSX`

![jsx_3](img/JSX_3.png)

Ta thấy children của `ul` có kiểu là `Array` => hợp lý.

**Lưu ý:**

Khi ta muốn render cặp element sau:

```html
    <h1>Heading</h1>
    <p>Parapraph</p>
```

Ta không thể dùng JSX như sau:

```Javascript
    const element = (
        <h1>Heading</h1>
        <p>Paragraph</p>
    )
```

Vì đoạn code như trên sẽ có lỗi:

![jsx_4](img/JSX_4.png)

Vì nó sẽ được phiên dịch thành:

```Javascript
    const element = (
        React.createElement("h1",null,"Heading")
        React.createElement("p",null,"Paragraph")
    )
```

=> Không có syntax như vậy.

Nhìn vào error message ta thấy rằng, JSX element phải được wrap trong một thẻ nào đó. Như vậy đoạn code trên ta có thể sửa như sau:

```Javascript
    const element = (
        <div>
            <h1>Heading</h1>
            <p>Paragraph</p>
        </div>
    )
```

Tuy nhiên việc làm như trên sẽ làm sinh ra một thẻ `div` không mong muốn. Thay vì vậy ta có thể làm như sau:

![jsx_5](img/JSX_5.png)

Thẻ `React.Fragment` được coi như là một container ảo cho `JSX` element mà không sinh thêm thẻ nào trong html thật.

