import React, { useState } from 'react';
import Icon from '@mui/material/Icon';
import '../../App.css';
import Spacer from '../../components/Spacer'



// -------------------- CSS ------------------------
export const profileStyle = `
    .container {
        margin: 0 0 10px 0;
        padding: 10px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
        position: fit-content;
        background-color: var(--common-back-color);
        border-radius: 10px;
        transition: background-color 0.3s ease;
    }

    .container:hover {
        background-color: var(--common-back-green-color);
    }

    .title {
        position: relative;
        text-align: left;
        width: 100%;
        align-self: flex-start;
        display: flex;
        align-items: center;
        color: var(--common-main-color);
        font-weight: bold;
    }

    .centerText {
        text-align: center;
        color: var(--common-main-color);
        font-weight: bold;
        word-wrap: break-word;
        word-break: break-word;
        white-space: normal;
        font-size: 110%;
        margin: 5px 0;
    }

    .detail {
        margin-top: 10px;
        color: var(--common-main-green-color);
        width: 100%;
        font-weight: 600;
    }

    .detail-content {
        background-color: white;
        border-radius: 10px;
        padding: 10px 15px;
        text-align: center;
        color: var(--common-main-green-color);
    }
`;
// -------------------------------------------------




const ComponentProfileTile = ({ title, icon, text, subtitle="", detail }) => {
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = profileStyle;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);


    // ホバー状態管理
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);


    return (
        <div
            className="container"
            onMouseEnter={handleMouseEnter} // ホバー時
            onMouseLeave={handleMouseLeave} // ホバー解除時
        >
            {/* 左上のタイトル */}
            <div className="title">
                <Icon style={{margin: 0 }}>{icon}</Icon>
                <span style={{ marginLeft: 5 }}>{title}</span>
                <span style={{ marginLeft: 2, fontSize: '70%' }}>{subtitle}</span>
            </div>

            <Spacer height={5} />

            {/* 真ん中のテキスト */}
            <div className="centerText">
                {text}
            </div>

            {isHovered && detail!=null && (
                <div className={'detail'}>
                    <div className='detail-content'>
                        {detail}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComponentProfileTile;