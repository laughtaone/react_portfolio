import React from 'react';
import { useState, useEffect } from "react";
import '../../App.css';
import './Home.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CenteredContainer from '../../components/CenteredContainer';
import PageName from '../../components/PageName';
import Spacer from '../../components/Spacer';
import purpleLeaf from '../../assets/images/purple_leaf.png';
import greenLeaf from '../../assets/images/green_leaf.png';
import ComponentLeaf from './ComponentLeaf';



const Home = () => {
    PageName("ホーム");

    return (<>
        <Header />
        <CenteredContainer>
            <h1 className='hello-world'>Hello, World</h1>
            <h2 style={{margin: 0}}>お探しの項目をお選びください</h2>

            <Spacer height={150} />

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ComponentLeaf
                    title="プロフィール"
                    url="/profile"
                />
                <Spacer width={23} />
                <ComponentLeaf
                    title="来歴"
                    url="/history"
                />
                <Spacer width={23} />
                <ComponentLeaf
                    title="制作物"
                    url="/works"
                />
            </div>
            <div
                style={{
                    width: '100%',
                    backgroundColor: 'var(--common-back-deep-color)',
                    height: '20px'
                }}>

            </div>
        </CenteredContainer>
        <Footer />
    </>);
};



export default Home;