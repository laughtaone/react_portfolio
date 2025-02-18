import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';
import ComponentWorkTile from './ComponentWorkTile';
import ComponentHoverDetailTile from './mini_components/ComponentHoverDetailTile';
import ComponentHoverLinkTile from './mini_components/ComponentHoverLinkTile';

import ThumbnailChallenge from './thumbnail_images/challenge-app.png';
import Sushiwari from './thumbnail_images/sushiwari.png';
import ShinagawaRunners from './thumbnail_images/shinagawa-runners.png';





const Works = () => {
    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="制作物" />

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                alignItems: 'flex-start',
                position: 'relative',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'var(--common-main-green-deep-color)',
                // minHeight: "300px",
                // height: "auto"
            }}>
                <ComponentWorkTile
                    title={"挑戦応援アプリ"}
                    subtitle={"2023年7月 | アプリ甲子園 | 個人"}
                    image={ThumbnailChallenge}
                    width= 'calc(33.33% - 5px)'
                    detailTitle={<>
                        <p style={{color: 'var(--common-main-green-deep-color)'}}>挑戦応援アプリを考案</p>
                        <p style={{color: 'var(--common-main-green-deep-color)'}}>アイデアをアプリ甲子園へ応募</p>
                    </>}
                    detailTiles={<ComponentHoverDetailTile
                        title="参加人数"
                        content="個人"
                    />}
                    detailLinks={<ComponentHoverLinkTile
                        url='https://drive.google.com/file/d/1eNNoBpYQfrtQpOL7fFGEI37SjNs3VcMe/view?usp=drive_link'
                        icon="file"
                        title="アイデア資料"
                    />}
                />
                <ComponentWorkTile
                    title={"スシワリ"}
                    subtitle={"2024年1月 | Hack U | 2人"}
                    image={Sushiwari}
                    width= 'calc(33.33% - 5px)'
                    detailTitle="回転寿司店での割り勘に特化したアプリ"
                    detailTiles={<>
                        <ComponentHoverDetailTile
                            title="開発手法"
                            content="Flutter"
                        />
                        <ComponentHoverDetailTile
                            title="担当"
                            content="グループ/お店管理ページ, 発表資料作成, 発表"
                        />
                        <ComponentHoverDetailTile
                            title="経験"
                            content="発表時にスライドが自動再生されてしまうアクシデント"
                        />
                    </>}
                    detailLinks={<>
                        <ComponentHoverLinkTile icon={"file"} title={"HackU紹介ページ"} />
                        <ComponentHoverLinkTile icon={"youtube"} title={"HackU発表時の映像"} />
                        <ComponentHoverLinkTile icon={"github"} title={"GitHubリポジトリ"} />
                    </>}
                />
                <ComponentWorkTile
                    title={"品川ランナーズ"}
                    subtitle={"2024年2月 | 品川ビジネスコンテスト(区民の部) | 3人"}
                    image={ShinagawaRunners}
                    width= 'calc(33.33% - 5px)'
                    detailTitle={<>
                        <p style={{color: 'var(--common-main-green-deep-color)'}}>Hack U 都立産技高専 2023 参加</p>
                        <p style={{color: 'var(--common-main-green-deep-color)'}}>回転寿司店での割り勘に特化したアプリ</p>
                    </>}
                    detailTiles={<>
                        <ComponentHoverDetailTile
                            title="開発手法"
                            content="Flutter"
                        />
                        <ComponentHoverDetailTile
                            title="担当"
                            content="グループ/お店管理ページ, 発表資料作成, 発表"
                        />
                        <ComponentHoverDetailTile
                            title="経験"
                            content="発表時にスライドが自動再生されてしまうアクシデント"
                        />
                    </>}
                    detailLinks={<>
                        <ComponentHoverLinkTile icon={"file"} title={"HackU紹介ページ"} />
                        <ComponentHoverLinkTile icon={"youtube"} title={"HackU発表時の映像"} />
                        <ComponentHoverLinkTile icon={"github"} title={"GitHubリポジトリ"} />
                    </>}
                />
                <ComponentWorkTile
                    title={"品川ランナーズ"}
                    subtitle={"2024年2月 | 品川ビジネスコンテスト(区民の部) | 3人"}
                    image={ShinagawaRunners}
                    width= 'calc(33.33% - 5px)'
                    detailTitle={<>
                        <p style={{color: 'var(--common-main-green-deep-color)'}}>Hack U 都立産技高専 2023 参加</p>
                        <p style={{color: 'var(--common-main-green-deep-color)'}}>回転寿司店での割り勘に特化したアプリ</p>
                    </>}
                    detailTiles={<>
                        <ComponentHoverDetailTile
                            title="開発手法"
                            content="Flutter"
                        />
                        <ComponentHoverDetailTile
                            title="担当"
                            content="グループ/お店管理ページ, 発表資料作成, 発表"
                        />
                        <ComponentHoverDetailTile
                            title="経験"
                            content="発表時にスライドが自動再生されてしまうアクシデント"
                        />
                    </>}
                    detailLinks={<>
                        <ComponentHoverLinkTile icon={"file"} title={"HackU紹介ページ"} />
                        <ComponentHoverLinkTile icon={"youtube"} title={"HackU発表時の映像"} />
                        <ComponentHoverLinkTile icon={"github"} title={"GitHubリポジトリ"} />
                    </>}
                />
            </div>

        </CenteredContainer>
        <Footer />
    </>);
};



export default Works;