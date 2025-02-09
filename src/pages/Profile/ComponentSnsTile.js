import React from 'react';
import Icon from '@mui/material/Icon';
import '../../App.css';



// -------------------- CSS ------------------------
export const style = `
    .sns-tile-container {
        margin: 0 0 10px 0;
        padding: 6px 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
        position: fit-content;
        border-radius: 1000px;
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



const ComponentSnsTile = ({ icon, title, url="" }) => {
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    return (
        <a href={url} className="sns-tile-container" target="_blank" rel="noopener noreferrer">
            <div className="sns-tile-content">
                <Icon style={{ margin: 0, paddingTop: 2, paddingBottom: 2 }}>{icon}</Icon>
                <span style={{ marginLeft: 5, textAlign: 'center', width: '100%' }}>{title}</span>
            </div>
        </a>
    );
};

export default ComponentSnsTile;