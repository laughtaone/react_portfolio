import React from 'react';


const Home = () => {
    return (<>
        <header style={
            { backgroundColor: '#f0f0f0', color: 'white', display: 'flex', height: '60px', alignItems: 'center', padding: '0 20px'}
        }>
            <h1>My App</h1>
        </header>
        <div>
            <h1>Welcome to the Home Page!</h1>
            <p>This is the main page of our application.</p>
        </div>
    </>);
};

export default Home;
