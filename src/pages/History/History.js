import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';




const History = () => {
    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="来歴" />
            <p>History</p>
        </CenteredContainer>
        <Footer />
    </>);
};



export default History;