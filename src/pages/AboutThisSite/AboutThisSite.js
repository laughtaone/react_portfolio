import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';
import PageName from '../../components/PageName';
import ComponentSnsTile from '../Profile/ComponentSnsTile';
import { Spa } from '@mui/icons-material';
import Spacer from '../../components/Spacer';




const AboutThisSite = () => {
    PageName("当サイト説明");

    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="当サイト説明" />
            <p>当サイト説明は、現在準備中です。</p>

            <div style={{ display: "flex", marginTop: "20px", justifyContent: "center", alignItems: "center" }}>
                <p>GitHub公開中：</p>
                <ComponentSnsTile
                    title="GitHubリポジトリ"
                    icon="github"
                    url="https://github.com/laughtaone/react_portfolio"
                />
            </div>
        </CenteredContainer>
        <Footer />
    </>);
};



export default AboutThisSite;