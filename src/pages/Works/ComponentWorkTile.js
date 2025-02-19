import React, { useEffect, useRef, useState } from 'react';
import Icon from '@mui/material/Icon';
import '../../App.css';
import ComponentHoverDetailTile from './mini_components/ComponentHoverDetailTile';
import ComponentHoverLinkTile from './mini_components/ComponentHoverLinkTile';
import Spacer from '../../components/Spacer';
import ComponentCategoryInfomation from './ComponentCategoryInfomation';


// -------------------- CSS ------------------------
export const style = `
`;
// -------------------------------------------------



const ComponentWorkTile = ({ title, subtitle, image, year, month, isDateStart=false, kind, detailTitle, detailTiles, detailLinks }) => {
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                color: isHovered ? 'var(--common-main-color)' : 'var(--common-main-green-color)',
                backgroundColor: isHovered ? 'var(--common-back-green-color)' : 'var(--common-back-color)',
                width: '290px',
                textAlign: 'center',
                borderRadius: '8px',
                padding: '20px 10px 30px 10px',
                margin: '3px 3px 3px 3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: isHovered ? 'space-between' : 'space-between',
                alignItems: 'center',
                transition: 'transform 0.3s ease-in-out',
                transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                zIndex: isHovered ? 10 : 1,
                position: 'relative',
                height: isHovered ? 'auto' : '300px',
                minHeight: '300px',
                transformOrigin: 'top center'
            }}
        >
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ComponentCategoryInfomation kind={kind} />
                </div>
                <h2 style={{ color: isHovered ? 'var(--common-main-green-color)' : 'var(--common-main-color)' }}>{title}</h2>
                <p style={{ fontSize: '85%', color: isHovered ? 'var(--common-main-green-color)' : 'var(--common-main-color)' }}>
                    {
                        (isDateStart)
                            ? (year && month)
                                ? <>{year}年{month}月-</>
                                : (year && !month)
                                    ? <>{year}年-</>
                                    : null
                            : (!isDateStart)
                                ? (year && month)
                                    ? <>{year}年{month}月</>
                                    : (year && !month)
                                        ? <>{year}年</>
                                        : null
                                : null
                    }
                </p>
                <Spacer height={5} />
                <p style={{ fontSize: '85%', color: isHovered ? 'var(--common-main-green-color)' : 'var(--common-main-color)' }}>{subtitle}</p>
            </div>

            {!isHovered
                ? (image)
                    ? <img
                        src={image}
                        alt="画像"
                        style={{ width: 'auto', height: '65%' }}
                    />
                    : null
                : <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    flexGrow: 1,
                    marginTop: '10px'
                }}>
                    <div style={{width: '100%', marginBottom: '20px'}}>
                        <h3 style={{fontSize: '90%', color: 'var(--common-main-green-color)'}}>{detailTitle}</h3>
                        <Spacer height={10} />
                        {detailTiles}
                    </div>
                    {detailLinks}
                </div>
            }
        </div>
    );
};

export default ComponentWorkTile;