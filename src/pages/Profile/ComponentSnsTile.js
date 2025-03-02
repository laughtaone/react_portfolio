import React, { useRef, useEffect, useState } from 'react';
import Icon from '@mui/material/Icon';
import '../../App.css';
import { AttachFileOutlined, GitHub, LanguageOutlined, YouTube } from '@mui/icons-material';
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
    url="",
    needsRightPadding=false,
    needsBottomMargin=true,
    isMiniSize=false,
    customMainColor="var(--common-main-color)",
    customBackColor="var(--common-back-deep-color)",
    customHoverBackColor="var(--common-back-deep2-color",
    isFullWidth=true,
    isPreparing=false
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
                    padding: isMiniSize ? '8px 15px' : '11px 20px',
                    backgroundColor: (isPreparing)
                        ? '#f9f9f9'
                        : (isHovered)
                            ? customHoverBackColor
                            : customBackColor,
                    // width: isFullWidth ? 'null' : 'fit-content',
                    width: (initialWidth)
                        ? `${initialWidth}px`
                        : 'fit-content',
                    marginBottom: needsBottomMargin ? '5px' :'0px'
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
                                        : icon
                    }
                    <span
                        style={{
                            marginLeft: 0,
                            textAlign: 'center',
                            width: '100%',
                            color: (isPreparing)
                                ? (isHovered)
                                    ? "#df2046"
                                    :  '#a0a0a0'
                                : customMainColor
                            }}
                    >
                        {
                            (isPreparing)
                                ? (isHovered)
                                    ? "掲載準備中"
                                    : title
                                : title
                        }
                    </span>
                </div>
            </a>
        </div>
    );
};

export default ComponentSnsTile;