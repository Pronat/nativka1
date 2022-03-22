import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // const names = ["Alex", "John", "Matios", "Eugen",]
    const users = [{id: 1, name: "Alex"}, {id: 123, name: "John"}, {id: 56, name: "Matios"}, {id: 967, name: "Eugen"}]
    const liNames = users.map(u => <li key={u.id}>{u.name}</li>)
    return (
        <div className="App">
            {liNames}
        </div>
    );
}

export default App;
