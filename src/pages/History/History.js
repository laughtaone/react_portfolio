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
import PageName from '../../components/PageName';


// 来歴データをインポート(来歴データはHistoryData.jsという別ファイルに分けて管理)
import historyData from './HistoryData';



// ----------------------------------------- 使用関数類 ------------------------------------------
// SNSタイルの共通オプション
const SnsTileCommonOption = ({ icon, title, url = "" }) => {
    return <ComponentSnsTile icon={icon} title={title} url={url} needsRightPadding={true} isMiniSize={true}  />;
};

// 来歴データを年月でソートしsortedHistoryDataとして保存
const sortedHistoryData = historyData
    .sort((a, b) => {
        const yearA = parseInt(a.year, 10);
        const yearB = parseInt(b.year, 10);

        const monthA = getMinMonth(a.month);
        const monthB = getMinMonth(b.month);

        // 年が同じ場合は月で並べ替え
        if (yearA === yearB) {
        return monthA - monthB; // 月の昇順
        }
        return yearA - yearB; // 年の昇順
    });

// 月が「月の数字-月の数字」の場合、最小の月を取得する関数
function getMinMonth(monthString) {
    const months = monthString.split('-').map(month => parseInt(month, 10));
    return Math.min(...months); // 最小の月を返す
}
// ---------------------------------------------------------------------------------------------




const History = () => {
    PageName("来歴");

    return (<>
        <Header />
        <CenteredContainer>
            <ComponentPageTitle title="来歴" />

            {/* ----------------------------------------- 来歴要素開始 ----------------------------------------- */}
            {sortedHistoryData.map((item, index) => (
                <ComponentHistoryTile
                    key={index}
                    year={item.year}
                    month={item.month}
                    title={item.title}
                    subtitle={
                        (typeof item.subtitle === 'string')
                        ? item.subtitle
                        : (Array.isArray(item.subtitle))
                            ? <>{item.subtitle.map((text, index) => <p key={index}>{text}</p>)}</>
                            : null
                    }
                    detailTiles={
                        (typeof item.details === 'string')
                        ? item.details
                        : (Array.isArray(item.details))
                            ? <>{item.details.map((detail, index) => (
                                <ComponentDetailTile
                                    key={index}
                                    title={detail.title}
                                    content={detail.content}
                                />
                            ))}</>
                            : null
                    }
                    links={
                        (typeof item.links === 'string')
                        ? item.links
                        : (Array.isArray(item.links))
                            ? <>{item.links.map((link, index) => (
                                <SnsTileCommonOption
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
            {/* --------------------------------------------------------------------------------------------- */}
        </CenteredContainer>
        <Footer />
    </>);
};



export default History;