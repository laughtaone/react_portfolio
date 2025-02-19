import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';
import ComponentWorkTile from './ComponentWorkTile';
import ComponentHoverDetailTile from './mini_components/ComponentHoverDetailTile';
import ComponentHoverLinkTile from './mini_components/ComponentHoverLinkTile';

// import ShinagawaRunners from './thumbnail_images/shinagawa-runners.png';
import { ThumbnailChallenge, Sushiwari, ShinagawaRunners } from './thumbnail_images';
import PageName from '../../components/PageName';


// 制作物データをインポート(制作物データはWorkData.jsという別ファイルに分けて管理)
import workData from './WorkData';


const Works = () => {
    PageName("制作物");

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
                {/* ----------------------------------------- 制作物要素開始 ---------------------------------------- */}
                {workData.map((item, index) => (
                    <ComponentWorkTile
                        key={index}
                        title={item.title}
                        subtitle={
                            (typeof item.subtitle === 'string')
                            ? item.subtitle
                            : (Array.isArray(item.subtitle))
                                ? <>{item.subtitle.map((text, index) => <p key={index}>{text}</p>)}</>
                                : null
                        }
                        image={item.image}
                        year={item.year}
                        month={item.month}
                        kind={item.kind}
                        isDateStart={item.isDateStart}
                        detailTitle={
                            (typeof item.detailTitle === 'string')
                            ? item.detailTitle
                            : (Array.isArray(item.detailTitle))
                                ? <>{item.detailTitle.map((text, index) => <p key={index}>{text}</p>)}</>
                                : null
                        }
                        detailTiles={
                            (typeof item.detailTiles === 'string')
                            ? item.detailTiles
                            : (Array.isArray(item.detailTiles))
                                ? <>{item.detailTiles.map((detail, index) => (
                                    <ComponentHoverDetailTile
                                        key={index}
                                        title={detail.title}
                                        content={detail.content}
                                    />
                                ))}</>
                                : null
                        }
                        detailLinks={
                            (typeof item.detailLinks === 'string')
                            ? item.detailLinks
                            : (Array.isArray(item.detailLinks))
                                ? <>{item.detailLinks.map((link, index) => (
                                    <ComponentHoverLinkTile
                                        key={index}
                                        icon={link.icon}
                                        title={link.title}
                                        url={link.url}
                                    />
                                ))}</>
                                : null
                        }
                    />
                ))}
                {/* -----------------------------------------ーーーーーーーー---------------------------------------- */}
            </div>
        </CenteredContainer>
        <Footer />
    </>);
};



export default Works;