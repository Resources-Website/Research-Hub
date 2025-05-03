import React from 'react';
import Example from './components/Example';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-3xl font-bold">Welcome to My Tailwind Node React App</h1>
                <Example />
            </header>
        </div>
    );
};

export default App;