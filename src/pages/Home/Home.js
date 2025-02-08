import React from 'react';
import '../../App.css';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const Home = () => {
    return (<>
        <Header />
        <div style={{
            margin: 'var(--common-body-margin)'
        }}>
            <h1 className='hello-world'>Hello, World</h1>
            <h2 style={{margin: 0}}>お探しの項目をお選びください</h2>
            <p>This is the main page of our application.</p>
        </div>
        <Footer />
    </>);
};



export default Home;