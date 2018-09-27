import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App']
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};
const AppHeader = () => {
    return <h1>My Todo List</h1>;
};
const SearchPanel = () => {
    return <input placeholder='search' />;
};
const App = () => {
    const isLoggedIn = true; //change here for row 25
    const loginBox = <span>Log in please</span>;
    const welcomeBox = <span>Welcome Back</span>;
    return (
    <div>
    {isLoggedIn ? welcomeBox : loginBox}
    <p>{(new Date()).toString()}</p>
        <AppHeader />
        <SearchPanel />
        <TodoList />
    </div>
    );
};
// const el = <App />
// const el = (
//     <div>
//         <AppHeader />
//         <SearchPanel />
//         <TodoList />
//     </div>
// )
// const el = (
//     <div>
//         <h1>My Todo List</h1>
//         <input placeholder='search' />
//         <ul>
//             <li>Learn React</li>
//             <li>Build Awesome App</li>
//         </ul>
//     </div>
// )
// console.log(el);
// const el = React.createElement(
//     'h1', null, 'Hello World!!!');

ReactDOM.render(<App />,
    document.getElementById('root')
);