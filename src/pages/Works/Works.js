import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ComponentPageTitle from '../../components/PageTitle';
import CenteredContainer from '../../components/CenteredContainer';
import ComponentWorkTile from './ComponentWorkTile';
import ComponentHoverDetailTile from './mini_components/ComponentHoverDetailTile';
import ComponentHoverLinkTile from './mini_components/ComponentHoverLinkTile';
import Spacer from '../../components/Spacer';
import PageName from '../../components/PageName';


// 制作物データをインポート(制作物データはWorkData.jsという別ファイルに分けて管理)
import { workData, workPlanData } from './WorkData';


const Works = () => {
    PageName("制作物");

    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="制作物" />

            {/* ----------------------------------------- 制作物要素開始 ---------------------------------------- */}
            <h2 style={{textAlign: 'center', marginBottom: '50px'}}>- 完了したプロジェクト -</h2>
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
                            ? <p style={{color: 'var(--common-main-green-color)'}}>{item.detailTitle}</p>
                            : (Array.isArray(item.detailTitle))
                                ? <>{item.detailTitle.map((text, index) => <p
                                    key={index}
                                    style={{color: 'var(--common-main-green-color)', marginBottom: '6px'}}
                                >{text}</p>)}</>
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
                                        subtitle={link.subtitle}
                                        url={link.url}
                                        isPreparing={link.isPreparing}
                                        isSubtitleColumn={link.isSubtitleColumn}
                                        customPreparingMessage={link.customPreparingMessage}
                                    />
                                ))}</>
                                : null
                        }
                        isNotCodeAllowed={item.isNotCodeAllowed}
                    />
                ))}
            </div>
            {/* ---------------------------------------------------------------------------------------------- */}

            <Spacer height={100} />
            <hr style={{ border: "1.2px solid", width: "100%", color: "var(--common-back-deep2-color)" }} />
            <Spacer height={100} />

            {/* --------------------------------------- 制作物予定要素開始 -------------------------------------- */}
            <h2 style={{textAlign: 'center', marginBottom: '50px'}}>- 現在進行中のプロジェクト -</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                alignItems: 'flex-start',
                position: 'relative',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'var(--common-main-green-deep-color)',
            }}>
                {workPlanData.map((item, index) => (
                    <ComponentWorkTile
                        key={index}
                        isPlanData={true}
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
                                ? <>{item.detailTitle.map((text, index) => <p
                                    key={index} style={{ color: 'var(--common-main-green-color)', marginBottom: '6px' }}
                                >
                                    {text}
                                </p>)}</>
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
                                        isPreparing={link.isPreparing}
                                        isSubtitleColumn={link.isSubtitleColumn}
                                        customPreparingMessage={link.customPreparingMessage}
                                    />
                                ))}</>
                                : null
                        }
                        isNotCodeAllowed={item.isNotCodeAllowed}
                    />
                ))}
            </div>
            {/* -----------------------------------------ーーーーーーーー---------------------------------------- */}
        </CenteredContainer>
        <Footer />
    </>);
};



export default Works;