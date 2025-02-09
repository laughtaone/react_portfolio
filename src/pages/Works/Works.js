import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';




const Works = () => {
    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="制作物" />
            <p>Works</p>
        </CenteredContainer>
        <Footer />
    </>);
};



export default Works;