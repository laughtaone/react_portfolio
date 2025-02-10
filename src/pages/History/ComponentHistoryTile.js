import React from 'react';
import '../../App.css';
import ComponentDateTile from './mini_components/ComponentDateTile';
import Spacer from '../../components/Spacer';





// -------------------- CSS ------------------------
export const style = `

`;
// -------------------------------------------------



const ComponentHistoryTile = ({ year, month, title, subtitle, detailTiles, links }) => {
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    return (
        <div style={{ marginBottom: "30px" }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {year!=null && month!=null
                    ? <ComponentDateTile year={year} month={month} />
                    : <div><Spacer width={70+6*2} /></div>
                }
                <Spacer width={15} />
                <div>
                    <div>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div><Spacer width={70+6*2+15} /></div>
                <div>
                    <Spacer height={3} />
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {detailTiles}
                    </div>
                    <Spacer height={2} />
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {links}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentHistoryTile;