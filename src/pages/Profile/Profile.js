import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import ComponentProfileTile from './ComponentProfileTile';
import Spacer from '../../components/Spacer'
import profileIcon from '../../assets/images/thinleaf_icon.jpg';
import CenteredContainer from '../../components/CenteredContainer';
import PageName from '../../components/PageName';

// プロフィールデータをインポート(プロフィールデータはProfileData.jsという別ファイルに分けて管理)
import { profileDataLeft, profileDataMain, profileDataRight } from './ProfileData';




const Profile = () => {
    PageName("プロフィール");


    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="プロフィール" />

            <div style={{ display: 'flex' }}>
                {/* --------------------------------------- プロフィール 画像 -------------------------------------- */}
                <div style={{ flex: 1, justifyContent: 'center', padding: '0 10px'}}>
                    <img
                        src={profileIcon}
                        alt="Logo"
                        style={{ width: '100%', height: 'auto', borderRadius: "50%", objectFit: "cover" }}
                    />
                </div>
                {/* --------------------------------------------------------------------------------------------- */}


                <Spacer width={30} />

                <div style={{ flex: 4 }}>

                    <p>うすば たいち</p>
                    <h1>薄葉 太一</h1>

                    <Spacer height={10} />

                    {/* -------------------------------------- プロフィール タイル ------------------------------------- */}
                    {profileDataMain.map((item, index) => (
                        <ComponentProfileTile
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            text={item.text}
                            detail={item.detail}
                        />
                    ))}

                    <div style={{ display: 'flex', width: '100%' }}>
                        {/* 左側の要素 */}
                        <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                        {profileDataLeft.map((item, index) => (
                            <ComponentProfileTile
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                text={item.text}
                                detail={item.detail}
                            />
                        ))}
                        </div>

                        {/* 右側のColumnに当たる要素 */}
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, width: '60%' }}>
                            {profileDataRight.map((item, index) => (
                                <ComponentProfileTile
                                    key={index}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    icon={item.icon}
                                    text={item.text}
                                    detail={item.detail}
                                />
                            ))}
                        </div>
                    </div>
                    {/* --------------------------------------------------------------------------------------------- */}
                </div>
            </div>
        </CenteredContainer>
        <Footer />
    </>);
};



export default Profile;