import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
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
    return (
    <div>
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