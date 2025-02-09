import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';




const Contact = () => {
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