import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';




const AboutThisSite = () => {
    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="当サイト説明" />
            <p>AboutThisSite</p>
        </CenteredContainer>
        <Footer />
    </>);
};



export default AboutThisSite;