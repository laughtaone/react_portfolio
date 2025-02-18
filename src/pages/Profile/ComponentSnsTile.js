import React, { useState } from 'react';
import Icon from '@mui/material/Icon';
import '../../App.css';
import { AttachFileOutlined, GitHub, YouTube } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';



// -------------------- CSS ------------------------
export const style = `
    .sns-tile-container {
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



const ComponentSnsTile = ({
    icon,
    title,
    url="",
    needsRightPadding=false,
    needsBottomMargin=true,
    isMiniSize=false,
    customBackColor,
    customHoverBackColor,
    isFullWidth=true
}) => {
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);


    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };



    return (
        <div style={{marginRight: needsRightPadding ? 5 : 0, fontSize: isMiniSize ? '90%' : null}}>
            <a
                href={url}
                target="_blank" rel="noopener noreferrer"
                style={{
                    padding: isMiniSize ? '3px 18px' : '6px 23px',
                    backgroundColor: isHovered ? (customHoverBackColor ?? 'var(--common-back-deep2-color') : (customBackColor ?? 'var(--common-back-deep-color)'),
                    width: isFullWidth ? 'null' : 'fit-content',
                    marginBottom: needsBottomMargin ? '5px' :'0px'
                }}
                className="sns-tile-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="sns-tile-content">
                    <Icon style={{ paddingTop: 2, paddingBottom: 2 }} >{
                        icon=="file"
                            ? <AttachFileOutlined />
                            : icon=="github"
                                ? <GitHub />
                                : icon=="youtube"
                                    ? <YouTube />
                                    : icon=="appstore"
                                        ? icon=<div style={{ display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faAppStoreIos} /></div>
                                        : icon
                    }</Icon>
                    <span style={{ marginLeft: 5, textAlign: 'center', width: '100%' }}>{title}</span>
                </div>
            </a>
        </div>
    );
};

export default ComponentSnsTile;