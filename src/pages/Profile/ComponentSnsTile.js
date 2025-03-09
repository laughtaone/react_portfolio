import React, { useRef, useEffect, useState } from 'react';
import Icon from '@mui/material/Icon';
import '../../App.css';
import { AttachFileOutlined, GitHub, InsertLinkOutlined, LanguageOutlined, YouTube } from '@mui/icons-material';
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

    .sns-icon {
        font-size: 22px;
    }
`;
// -------------------------------------------------



const ComponentSnsTile = ({
    icon,
    title,
    subtitle,
    url="",
    needsRightPadding=false,
    needsBottomMargin=true,
    isMiniSize=false,
    customMainColor="var(--common-main-color)",
    customBackColor="var(--common-back-deep-color)",
    customHoverBackColor="var(--common-back-deep2-color",
    isFullWidth=false,
    isPreparing=false,
    customLRMargin=0,
    customTBPadding=8,
    customMaxWidth=null,
    isSubtitleColumn=false,
    customPreparingMessage="掲載準備中"
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

    const divRef = useRef(null);
    const [initialWidth, setInitialWidth] = useState(null);
    useEffect(() => {
        if (divRef.current) {
            setInitialWidth(divRef.current.offsetWidth);
        }
    }, []);




    return (
        <div style={{marginRight: needsRightPadding ? 5 : 0, fontSize: isMiniSize ? '90%' : null}} ref={divRef}>
            <a
                href={(isPreparing) ? null : url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    padding: (isMiniSize)
                        ? `${customTBPadding}px 15px`
                        : `${(customTBPadding==8) ? (customTBPadding+3) : customTBPadding}px 20px`,
                    backgroundColor: (isPreparing)
                        ? '#f9f9f9'
                        : (isHovered)
                            ? customHoverBackColor
                            : customBackColor,
                    // width: isFullWidth ? 'null' : 'fit-content',
                    maxWidth: customMaxWidth,
                    width: (isFullWidth)
                        ? '100%'
                        : (initialWidth)
                            ? `${initialWidth}px`
                            : 'fit-content',
                    marginBottom: needsBottomMargin ? '5px' :'0px',
                    marginLeft: customLRMargin,
                    marginRight: customLRMargin
                }}
                className="sns-tile-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="sns-tile-content">
                    {icon=="file"
                        ? <AttachFileOutlined className='sns-icon' style={{color: (isPreparing) ? '#a0a0a0' : customMainColor}} />
                        : icon=="github"
                            ? <GitHub className='sns-icon' style={{color: (isPreparing) ? '#a0a0a0' : customMainColor}} />
                            : icon=="youtube"
                                ? <YouTube className='sns-icon' style={{color: (isPreparing) ? '#a0a0a0' : customMainColor}} />
                                : icon=="appstore"
                                    ? icon=<div style={{ display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faAppStoreIos} className='sns-icon' style={{color: (isPreparing) ? '#a0a0a0' : customMainColor}}/></div>
                                    : icon=="url"
                                        ? <LanguageOutlined className='sns-icon' style={{color: (isPreparing) ? '#a0a0a0' : customMainColor}} />
                                            : icon=="link"
                                                ? <InsertLinkOutlined className='sns-icon' style={{color: (isPreparing) ? '#a0a0a0' : customMainColor}} />
                                                : icon
                    }
                    <span
                        style={{
                            display: (subtitle !== null) ? 'inline-flex' : 'flex',
                            flexDirection: (isSubtitleColumn) ? 'column' : 'row',
                            justifyContent: 'center',
                            marginLeft: 0,
                            textAlign: 'center',
                            width: '100%',
                            color: isPreparing
                                ? isHovered
                                    ? "#df2046"
                                    : '#a0a0a0'
                                : customMainColor,
                            userSelect: isPreparing ? 'none' : 'auto',
                            display: 'inline-flex',
                            alignItems: 'center'
                        }}
                    >
                        {
                            isPreparing
                                ? isHovered
                                    ? customPreparingMessage
                                    : title
                                : title
                        }
                        {subtitle && (
                            <span
                                style={{
                                    fontSize: '0.8em',
                                    marginLeft: isSubtitleColumn ? '0px' : '6px',
                                    opacity: 0.7,
                                    textAlign: 'center'
                                }}
                            >
                                {subtitle}
                            </span>
                        )}
                    </span>
                </div>
            </a>
        </div>
    );
};

export default ComponentSnsTile;