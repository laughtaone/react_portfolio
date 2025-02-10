import React from 'react';
import Icon from '@mui/material/Icon';
import '../../App.css';
import { AttachFileOutlined, GitHub, YouTube } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';



// -------------------- CSS ------------------------
export const style = `
    .sns-tile-container {
        margin: 0 0 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
        position: fit-content;
        border-radius: 100px;
        background-color: var(--common-back-deep-color);
        transition: background-color 0.15s;
        text-decoration: none;
    }

    .sns-tile-container:hover {
        background-color: var(--common-back-deep2-color);
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



const ComponentSnsTile = ({ icon, title, url="", needsRightPadding=false, isMiniSize=false }) => {
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    return (
        <div style={{marginRight: needsRightPadding ? 5 : 0, fontSize: isMiniSize ? '90%' : null}}>
            <a href={url} className="sns-tile-container" target="_blank" rel="noopener noreferrer" style={{padding: isMiniSize ? '3px 18px' : '6px 23px'}}>
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