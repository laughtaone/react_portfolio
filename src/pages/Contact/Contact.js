import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';
import PageName from '../../components/PageName';
import ComponentContactTile from './ComponentContactTile';
import Spacer from '../../components/Spacer';
import ComponentP from './ComponentP';




const Contact = () => {
    PageName("お問合せ");

    return (<>
        <Header />
        <CenteredContainer>
        <ComponentPageTitle title="お問合せ" />

            <ComponentP text={"ご連絡は、チャット形式で使いやすい Wantedly のDMを推奨しております"} />

            <Spacer height={20} />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ComponentContactTile
                    title="Wantedly"
                    url="https://www.wantedly.com/id/usubataichi"
                />
            </div>

            <Spacer height={110} />

            <ComponentP text={"XのDM や Googleフォーム でも可能です"} />
            <Spacer height={20} />
            <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center' }}>
                <ComponentContactTile
                    title="X (Twitter)"
                    url="https://twitter.com/laughtaone"
                />
                <ComponentContactTile
                    title="Googleフォーム"
                    url="https://forms.gle/Gqd9U7EXc4iGgzPW8"
                />
            </div>

        </CenteredContainer>
        <Footer />
    </>);
};



export default Contact;