import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';
import ComponentDateTile from './mini_components/ComponentDateTile';
import Spacer from '../../components/Spacer';
import ComponentDetailTile from './mini_components/ComponentDetailTile';
import ComponentHistoryTile from './ComponentHistoryTile';
import ComponentSnsTile from '../Profile/ComponentSnsTile';




const SnsTileCommonOption = ({ icon, title, url = "" }) => {
    return <ComponentSnsTile icon={icon} title={title} url={url} needsRightPadding={true} isMiniSize={true}  />;
};




const History = () => {
    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="来歴" />

            <ComponentHistoryTile
                year={2021}
                month={4}
                title={"東京都立産業技術高等専門学校 品川キャンパス 入学"}
            />

            <ComponentHistoryTile
                year={2022}
                month={1}
                title={"Python 学習開始"}
            />

            <ComponentHistoryTile
                year={2023}
                month={7}
                title={"アプリ甲子園 アイデア部門 応募"}
                subtitle={"挑戦応援アプリを考案し応募"}
                detailTiles={
                    <ComponentDetailTile title={"参加人数"} content={"個人"} />
                }
                links={
                    <SnsTileCommonOption icon="file" title={"アイデア資料"} url="https://drive.google.com/file/d/1eNNoBpYQfrtQpOL7fFGEI37SjNs3VcMe/view?usp=drive_link" />
                }
            />

            <ComponentHistoryTile
                year={2023}
                month={9}
                title={"Flutter 学習開始"}
            />

            <ComponentHistoryTile
                year={2024}
                month={1}
                title={"Hack U 都立産技高専 2023 参加"}
                subtitle={"回転寿司店に特化した割り勘アプリ「スシワリ」を開発"}
                detailTiles={<>
                    <ComponentDetailTile title={"参加人数"} content={"2人"} />
                    <ComponentDetailTile title={"開発手法"} content={"Flutter"} />
                    <ComponentDetailTile title={"担当"} content={"グループ/お店管理ページ, 発表資料作成, 発表"} />
                    <ComponentDetailTile title={"経験"} content={"発表時にスライドが自動再生されてしまうアクシデント"} />
                </>}
                links={<>
                    <SnsTileCommonOption icon={"file"} title={"HackU紹介ページ"} />
                    <SnsTileCommonOption icon={"youtube"} title={"HackU発表時の映像"} />
                    <SnsTileCommonOption icon={"github"} title={"GitHubリポジトリ"} />
                </>}
            />

            <ComponentHistoryTile
                year={2024}
                month={2}
                title={"品川ビジネスコンテスト(区民の部)　優秀賞受賞"}
                subtitle={"風情ある旧東海道の品川区内部分をランニングコースとして活用するアイデアを応募"}
                detailTiles={<>
                    <ComponentDetailTile title={"参加人数"} content={"3人"} />
                    <ComponentDetailTile title={"結果"} content={"第2位にあたる優秀賞を受賞"} />
                </>}
                links={<>
                    <SnsTileCommonOption icon={"file"} title={"受賞紹介ページ"} />
                    <SnsTileCommonOption icon={"file"} title={"アイデア資料"} />
                </>}
            />

            <ComponentHistoryTile
                year={2024}
                month={4}
                title={"本校事務室 一部の事務作業DXアプリ 開発開始"}
                subtitle={"本校事務室の職員の方にヒアリングを実施することで見つけた一部の事務作業をDXするアプリ"}
                detailTiles={<>
                    <ComponentDetailTile title={"参加人数"} content={"5人"} />
                    <ComponentDetailTile title={"開発手法"} content={"Flutter, Firebase Storage/Cloud Firestore/Authentication"} />
                    <ComponentDetailTile title={"UIアイデア作成"} content={"Figma, PowerPoint"} />
                </>}
                links={<>
                    <SnsTileCommonOption icon={"file"} title={"デモページ"} />
                    <SnsTileCommonOption icon={"github"} title={"GitHubリポジトリ(デモ用)"} />
                    <SnsTileCommonOption icon={"file"} title={"ヒアリング資料"} />
                </>}
            />

            <ComponentHistoryTile
                year={2024}
                month={5}
                title={"さいたまICTコンテスト2024 応募"}
                subtitle={<>
                    <p>Word2Vecというモデル群を活用した英単語学習アプリ「chaen」を開発し応募</p>
                    <p>Word2Vecの処理はサーバー上で行い、APIでアプリとサーバー間でやり取りする仕組みを採用</p>
                </>}
                detailTiles={<>
                    <ComponentDetailTile title={"参加人数"} content={"4人"} />
                    <ComponentDetailTile title={"開発手法"} content={"Flutter"} />
                    <ComponentDetailTile title={"UIアイデア作成"} content={"Figma"} />
                    <ComponentDetailTile title={"担当"} content={"UIアイデア作成, UI実装"} />
                </>}
                links={<>
                    <SnsTileCommonOption icon={"file"} title={"資料"} />
                </>}
            />

            <ComponentHistoryTile
                year={2024}
                month={6}
                title={"BeReal.リハーサル撮影アプリ「BeRehearsal.」開発開始"}
                subtitle={"BeReal.の撮影をリハーサルできるアプリ"}
                detailTiles={<>
                    <ComponentDetailTile title={"開発人数"} content={"個人"} />
                    <ComponentDetailTile title={"開発手法"} content={"Flutter"} />
                </>}
                links={<>
                    <SnsTileCommonOption icon={"github"} title={"GitHubリポジトリ"} />
                    <SnsTileCommonOption icon={"appstore"} title={"AppStoreページ"} />
                </>}
            />

            <ComponentHistoryTile
                year={2024}
                month={7}
                title={"置き勉管理アプリ「okiben」開発"}
                subtitle={"置き勉の有無を教材ごとにスイッチのオン/オフで簡単に管理できるアプリ"}
                detailTiles={<>
                    <ComponentDetailTile title={"開発人数"} content={"個人"} />
                    <ComponentDetailTile title={"開発手法"} content={"Flutter"} />
                </>}
                links={<>
                    <SnsTileCommonOption icon={"github"} title={"GitHubリポジトリ"} />
                    <SnsTileCommonOption icon={"appstore"} title={"AppStoreページ"} />
                </>}
            />

            <ComponentHistoryTile
                year={2024}
                month={"8-9"}
                title={"インターンシップ参加"}
                subtitle={"10日間 Reactを用いた開発体験, 0.5日間 グループディスカッション, 0.5日間 IT業界研究セミナー の計3社・11日間 参加"}
            />

            <ComponentHistoryTile
                year={2024}
                month={12}
                title={"Hack U KOSEN 2024 参加"}
                subtitle={<>
                    <p>「お正月をHackせよ」というテーマに対し、撮影した年賀状データからAIで俳句を作成し、カルタとして遊ぶアプリを開発</p>
                    <p>画像データBase64にエンコードしGPT APIでAIに投げ俳句を生成</p>
                </>}
                detailTiles={<>
                    <ComponentDetailTile title={"開発人数"} content={"4人"} />
                    <ComponentDetailTile title={"開発手法"} content={<p>Flutter, GPT API<span style={{fontSize: '70%'}}>(4o mini)</span></p>} />
                </>}
                links={<>
                    <SnsTileCommonOption icon={"file"} title={"アプリ紹介資料"} />
                </>}
            />

            <ComponentHistoryTile
                title={"Swift 学習開始"}
            />


        </CenteredContainer>
        <Footer />
    </>);
};



export default History;