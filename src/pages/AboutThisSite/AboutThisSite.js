import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';
import PageName from '../../components/PageName';




const AboutThisSite = () => {
    PageName("当サイト説明");

    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="当サイト説明" />
            <p>当サイト説明は、現在準備中です。</p>
        </CenteredContainer>
        <Footer />
    </>);
};



export default AboutThisSite;