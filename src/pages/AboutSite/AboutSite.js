import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';
import PageName from '../../components/PageName';
import ComponentSnsTile from '../Profile/ComponentSnsTile';
import { InfoOutlined, LanguageOutlined, LinkOffOutlined, LinkOutlined, Spa } from '@mui/icons-material';
import Spacer from '../../components/Spacer';
import ComponentP from '../Contact/ComponentP';
import ComponentAboutSiteTile from './ComponentAboutSiteTile';
import SpanBold from '../../components/SpanBold';
import Pmb from '../../components/Pmb';
import Icon from '@mui/material/Icon';
import {ComponentDetailTileP, ComponentDetailTile} from './ComponentDetailTile';
import ComponentHistoryTile from '../History/ComponentHistoryTile';
import footerAz1 from '../../assets/images/aboutsite/footer_az1.png';
import footerAz2 from '../../assets/images/aboutsite/footer_az2.png';
import { useState, useEffect } from "react";
import ComponentInfoZone from '../../components/Footer/ComponentInfoZone';
import Pcaption from '../../components/Pcaption';
import purpleLeaf from '../../assets/images/deep-purple_leaf.png';



const AboutSite = () => {
    PageName("当サイト説明");

    const [az, setAz] = useState("");
    useEffect(() => {
        fetch("/metadata.php")
            .then((res) => res.json())
            .then((data) => {
                setAz(data.az);
            })
            .catch((err) => console.error("EC2メタデータ取得エラー:", err));
    }, []);
    const instanceId = (az === "ap-northeast-1a") ? 1 : (az === "ap-northeast-1d") ? 2 : null;


    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="当サイト説明" />

            <ComponentAboutSiteTile
                content={<>
                    <p>当サイトは、ReactとAWSを用いて構築・運営しています。</p>
                    <p>それぞれについて、詳しく説明していきます。</p>
                </>}
            />

            <ComponentAboutSiteTile
                title="Webサイト作成"
                content={<>
                    <Pmb>当サイトは<SpanBold>React</SpanBold>を用いて開発しました。</Pmb>

                    <ComponentDetailTile
                        title="React採用理由"
                        content={<>
                            <ComponentDetailTileP>2024年8月に参加した<SpanBold>インターンシップ</SpanBold>で、Reactを用いて簡単なシステムを開発し、Reactの<SpanBold>便利さ</SpanBold>を実感していたから</ComponentDetailTileP>
                        </>}
                    />

                    <ComponentDetailTile
                        title="デザイン設計"
                        content={<>
                            <ComponentDetailTileP>サイトデザインのアイデア設計には<SpanBold>Figma</SpanBold>を用いた</ComponentDetailTileP>
                            <Spacer height={5} />
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <ComponentSnsTile
                                    title="Figmaデザイン"
                                    icon="link"
                                    url="https://www.figma.com/design/v4fdEuMEFU7SqnMERndhuP/%E5%B0%B1%E6%B4%BB%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA---%E6%A1%881?node-id=0-1&t=rk4NYSk6FJUBOFKL-1"
                                    isMiniSize={true}
                                    customTBPadding={6}
                                    customMaxWidth={150}
                                />
                            </div>
                        </>}
                    />

                    <ComponentDetailTile
                        title="工夫点1"
                        content={<>
                            <ComponentDetailTileP>私の苗字につく「<SpanBold customLRMargin={0}>葉</SpanBold>」のアイコン画像を、ファビコンやトップページ、各ページのタイトル部分に載せることで、より<SpanBold>印象に残る</SpanBold>ようなサイトデザインに仕上げました。</ComponentDetailTileP>
                            <Spacer height={10} />
                            <div style={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <img
                                    src={purpleLeaf}
                                    alt="Footer AZ1"
                                    style={{ width: "40px", height: "auto" }}
                                />
                                <Pcaption customMarginTop={5}>↑ 葉のアイコン画像</Pcaption>
                            </div>
                        </>}
                    />

                    <ComponentDetailTile
                        title="工夫点2"
                        content={<>
                            <ComponentDetailTileP>今回、2つのEC2インスタンスを用いて運用しているため、<SpanBold>フッター部分</SpanBold>にどちらのAZのものからサイトを閲覧しているか表示させました。</ComponentDetailTileP>

                            <Spacer height={10} />

                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <ComponentInfoZone instanceId={instanceId} isDesktop={false} />
                                <Pcaption>↑ フッターでの実際の表示</Pcaption>
                            </div>
                        </>}
                    />
                </>}
            />


            <ComponentAboutSiteTile
                title="AWSインフラ構築"
                content={<>
                    <Pmb>当サイトは<SpanBold>AWS</SpanBold>を用いて運用しています。</Pmb>
                    <ComponentDetailTile
                        title="使用サービス"
                        content={<>
                            <ComponentDetailTileP>当サイトでは、以下のAWSサービスを使用しています。</ComponentDetailTileP>
                            {[
                                'VPC',
                                'EC2',
                                'Route 53'
                            ].map((service, index) => {
                                return <ComponentDetailTileP key={index}>・<SpanBold>{service}</SpanBold></ComponentDetailTileP>;
                            })}
                        </>}
                    />
                    <ComponentDetailTile
                        title="リージョン/AZ"
                        content={<>
                            <ComponentDetailTileP><SpanBold>東京リージョン</SpanBold>内<SpanBold>2つのAZ</SpanBold>を使用</ComponentDetailTileP>
                        </>}
                    />
                    <ComponentDetailTile
                        title="EC2"
                        content={<>
                            <ComponentDetailTileP>各AZに1つずつ 計<SpanBold>2つ</SpanBold>を使用</ComponentDetailTileP>
                        </>}
                    />
                    <ComponentDetailTile
                        title="Route 53"
                        content={<>
                            <ComponentDetailTileP><SpanBold>Route 53</SpanBold>を使用</ComponentDetailTileP>
                        </>}
                    />
                    <ComponentDetailTile
                        title="ドメイン取得"
                        content={<>
                            <ComponentDetailTileP><SpanBold>お名前.com</SpanBold>を使用</ComponentDetailTileP>
                        </>}
                    />
                    <ComponentDetailTile
                        title="構築手順"
                        content={<>
                            <ComponentDetailTileP>構築の詳しい手順は、次章のZenn記事よりご覧いただけます</ComponentDetailTileP>
                        </>}
                    />
                </>}
            />

            <ComponentAboutSiteTile
                title="関連リンク"
                content={<>
                    <Pmb>関連リンクは 次の2つ です。</Pmb>
                    <ComponentDetailTile
                        icon={<LinkOutlined />}
                        title="GitHub"
                        content={
                            <ComponentSnsTile
                                title="GitHubリポジトリ"
                                icon="github"
                                url="https://github.com/laughtaone/react_portfolio"
                            />
                        }
                    />
                    <ComponentDetailTile
                        icon={<LinkOutlined />}
                        title="Zenn"
                        content={
                            <ComponentSnsTile
                                title="Zenn記事"
                                icon="link"
                                url="https://zenn.dev/laughtaone/articles/d102b83b8c0870"
                            />
                        }
                    />
                </>}
            />

        </CenteredContainer>
        <Footer />
    </>);
};



export default AboutSite;