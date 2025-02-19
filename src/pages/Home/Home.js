import React from 'react';
import '../../App.css';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CenteredContainer from '../../components/CenteredContainer';
import PageName from '../../components/PageName';



const Home = () => {
    PageName("ホーム");

    return (<>
        <Header />
        <CenteredContainer>
            <h1 className='hello-world'>Hello, World</h1>
            <h2 style={{margin: 0}}>お探しの項目をお選びください</h2>
        </CenteredContainer>
        <Footer />
    </>);
};



export default Home;