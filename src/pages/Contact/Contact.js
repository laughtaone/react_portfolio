import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';
import PageName from '../../components/PageName';




const Contact = () => {
    PageName("お問合せ");

    return (<>
        <Header />
        <CenteredContainer>
        <ComponentPageTitle title="お問合せ" />
            <p>Contact</p>
        </CenteredContainer>
        <Footer />
    </>);
};



export default Contact;