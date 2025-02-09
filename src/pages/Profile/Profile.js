import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import ComponentProfileTile from './ComponentProfileTile';
import ComponentSnsTile, { style } from './ComponentSnsTile';
import Spacer from '../../components/Spacer'
import { BrushOutlined, ConstructionOutlined, GitHub, LanguageOutlined, PaletteOutlined, SchoolOutlined, ScienceOutlined, StarBorderOutlined, X } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import profileIcon from '../../assets/images/thinleaf_icon.jpg';
import CenteredContainer from '../../components/CenteredContainer';





const Profile = () => {
    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="プロフィール" />
            <Spacer height={40} />

            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, justifyContent: 'center', padding: '0 10px'}}>
                    <img
                        src={profileIcon}
                        alt="Logo"
                        style={{ width: '100%', height: 'auto', borderRadius: "50%", objectFit: "cover" }}
                    />
                </div>

                <Spacer width={30} />

                <div style={{ flex: 4 }}>

                    <p style={{margin: '0'}}>うすば たいち</p>
                    <h1 style={{margin: '0'}}>薄葉 太一</h1>

                    <Spacer height={10} />


                    <ComponentProfileTile
                        title="学校"
                        icon=<SchoolOutlined />
                        text="東京都立産業技術高等専門学校 ものづくり工学科 情報システム工学コース"
                    />

                    <ComponentProfileTile
                        title="趣味"
                        icon=<PaletteOutlined />
                        text="音楽鑑賞"
                        detail="特に好きなグループ：Official髭男dism, Mrs. GREEN APPLE"
                    />

                    <ComponentProfileTile
                        title="学習/使用経験のある技術"
                        subtitle="(程度問わず)"
                        icon=<ConstructionOutlined />
                        text="Flutter/Dart, Firebase, Python, AWS, React, Swift, Rust"
                        detail=<ul style={{ textAlign: "left" }}>
                            <li>日常的に学習/使用：Flutter/Dart, Python</li>
                            <li>開発使用経験あり：Flutter/Dart, Firebase, AWS, React, Swift</li>
                            <li>触った程度：Rust</li>
                        </ul>
                    />

                    <ComponentProfileTile
                        title="好きなアプリUI"
                        icon=<BrushOutlined />
                        text="Apple Music, PayPay, 三井住友銀行"
                        detail= <div style={{textAlign: "left" }}>
                            <p style={{color: "var(--common-main-green-color)"}}>【特に好きな部分】</p>
                            <ul style={{margin: 0}}>
                                <li style={{margin: '5px 0'}}>Apple Music<br />歌詞表示, ライブラリ表示, アニメーション</li>
                                <li style={{margin: '5px 0'}}>PayPay<br />全ての要素のサイズ感, 画面遷移時のアニメーション</li>
                                <li style={{margin: '5px 0'}}>三井住友銀行<br />ブランドカラーに沿ったUI, 振込などの重要な操作を直感的に落ち着いて行えるUI</li>
                            </ul>
                        </div>
                    />

                    <div style={{ display: 'flex', width: '100%' }}>
                        {/* 左側の要素 */}
                        <div style={{ width: '40%' }}>
                            <ComponentProfileTile
                                title="SNS等"
                                icon=<LanguageOutlined />
                                text=<div>
                                    <ComponentSnsTile
                                        icon=<GitHub />
                                        title="GitHub - @laughtaone"
                                        url='https://github.com/laughtaone'
                                    />
                                    <ComponentSnsTile
                                        icon=<X />
                                        title="X - @laughtaone_"
                                        url='https://github.com/laughtaone'
                                    />
                                    <ComponentSnsTile
                                        title="Zenn - @laughtaone"
                                        url='https://zenn.dev/laughtaone'
                                    />
                                    <ComponentSnsTile
                                        title="Wantedly"
                                        url='https://www.wantedly.com/id/usubataichi'
                                    />
                                    <ComponentSnsTile
                                        icon=<FontAwesomeIcon icon={faAppStoreIos} />
                                        title="AppStore"
                                        url='https://www.wantedly.com/id/usubataichi'
                                    />
                                </div>
                            />
                        </div>

                        {/* 右側のColumnに当たる要素 */}
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, width: '60%' }}>
                            <ComponentProfileTile
                                title="ゼミナールでの学習テーマ"
                                icon=<ScienceOutlined />
                                text="PythonやKaggleを用いたデータ分析手法学習"
                            />
                            <ComponentProfileTile
                                title="学生生活で印象に残ったこと"
                                icon=<StarBorderOutlined />
                                text="Hack Uへの参加・研修旅行"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CenteredContainer>
        <Footer />
    </>);
};



export default Profile;