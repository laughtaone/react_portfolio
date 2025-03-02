import React, { useEffect, useState } from 'react';
import Header, { headerStyles } from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import ComponentProfileTile from './ComponentProfileTile';
import Spacer from '../../components/Spacer'
import profileIcon from '../../assets/images/thinleaf_icon.jpg';
import CenteredContainer from '../../components/CenteredContainer';
import PageName from '../../components/PageName';

// プロフィールデータをインポート(プロフィールデータはProfileData.jsという別ファイルに分けて管理)
import { profileDataLeft, profileDataMain, profileDataRight } from './ProfileData';



// ---------------------- CSS ----------------------
export const styles = `
    .profile-title-icon {
        font-size: 22px;
    }
`;
// -------------------------------------------------





const Profile = () => {
    PageName("プロフィール");

    // スタイルを動的に適用
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    const [isDesktop, setIsMobile] = useState(window.innerWidth > 767);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth > 767);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="プロフィール" />

            <div style={{
                display: (isDesktop) ? 'flex' : 'block'
            }}>
                {/* --------------------------------------- プロフィール 画像 -------------------------------------- */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: (isDesktop) ? 'start' : 'center',
                    padding: '0 10px',
                    width: '100%'
                }}>
                    <img
                        src={profileIcon}
                        alt="Logo"
                        style={{
                            width: (isDesktop) ? '100%' : '30%',
                            height: 'auto',
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
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

                    <div style={{
                        display: (isDesktop) ? 'flex' : 'block',
                        width: '100%'
                    }}>
                        {/* 左側の要素 */}
                        <div style={{
                            display: (isDesktop) ? 'flex' : 'block',
                            flexDirection: 'column',
                            width: (isDesktop) ? '40%' : '100%'
                        }}>
                        {profileDataLeft.map((item, index) => (
                            <ComponentProfileTile
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                icon={item.icon}
                                text={item.text}
                                detail={item.detail}
                                customLRPadding={20}
                            />
                        ))}
                        </div>

                        {/* 右側のColumnに当たる要素 */}
                        <div style={{
                            display: (isDesktop) ? 'flex' : 'block',
                            flexDirection: 'column',
                            marginLeft: (isDesktop) ? 10 : 0,
                            width: (isDesktop) ? '60%' : '100%'
                        }}>
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