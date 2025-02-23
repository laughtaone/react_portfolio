import React, { useState } from 'react';
import '../../App.css';
import Spacer from '../../components/Spacer';
import Icon from '@mui/material/Icon';
import '../../App.css';
import OpenInNew, { OpenInNewOutlined } from '@mui/icons-material';



// -------------------- CSS ------------------------
export const style = `
    .open-link-tile-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
        position: fit-content;
        border-radius: 100px;
        transition: background-color 0.15s;
        text-decoration: none;
    }

    .sns-tile-content {
        position: relative;
        text-align: center;
        width: 100%;
        align-self: flex-start;
        display: flex;
        align-items: center;
        color: var(--common-main-color);
        font-weight: bold;
    }
`;
// -------------------------------------------------



const ComponentContactTile = ({
    title,
    customUrlTitle,
    url
}) => {
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    const [isHoveredTile, setIsHoveredTile] = useState(false);
    const hoveredTileEnter = () => setIsHoveredTile(true);
    const hoveredTileLeave = () => setIsHoveredTile(false);

    const [isHoveredUrl, setIsHoveredUrl] = useState(false);
    const hoveredUrlEnter = () => setIsHoveredUrl(true);
    const hoveredUrlLeave = () => setIsHoveredUrl(false);



    return (
        <div
            onMouseEnter={hoveredTileEnter}
            onMouseLeave={hoveredTileLeave}
            style={{
                color: 'var(--common-main-color)',
                backgroundColor: 'var(--common-back-color)',
                width: '290px',
                textAlign: 'center',
                borderRadius: '8px',
                padding: '20px 10px 30px 10px',
                margin: 'xxx3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                transition: 'transform 0.3s ease-in-out',
                position: 'relative',
                height: '120px',
                transformOrigin: 'top center'
            }}
        >
            <h2 style={{ color: 'var(--common-main-color)'}}>{title}</h2>

            <Spacer height={5} />

            <div
                onMouseEnter={hoveredUrlEnter}
                onMouseLeave={hoveredUrlLeave}
                style={{ cursor: 'pointer' }}
            >
                <a
                    href={url}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                        padding: '13px 50px',
                        backgroundColor:
                            isHoveredUrl
                                ? 'var(--common-back-deep2-color)'
                                : 'var(--common-back-deep-color)',
                    }}
                    className="open-link-tile-container"
                    onMouseEnter={hoveredUrlEnter}
                    onMouseLeave={hoveredUrlLeave}
                >
                    <div
                        className="open-link-tile-content"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        <span
                            style={{ textAlign: 'center', userSelect: 'none', fontWeight: 'bold' }}
                        >
                            {customUrlTitle ?? "開く"}
                        </span>
                        <Spacer width={5} />
                        <Icon style={{ paddingTop: 2, paddingBottom: 2 }}>
                            <OpenInNewOutlined />
                        </Icon>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ComponentContactTile;