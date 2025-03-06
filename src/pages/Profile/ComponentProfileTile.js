import React, { useState } from 'react';
import Icon from '@mui/material/Icon';
import '../../App.css';
import Spacer from '../../components/Spacer'
import { ExpandMore } from '@mui/icons-material';



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
        word-wrap: break-word;
        word-break: break-word;
        white-space: normal;
        font-size: 110%;
        margin: 5px 0;
    }

    .detailIcon {
        color: var(--common-main-light2-color);
    }

    .detail {
        margin-top: 10px;
        color: var(--common-main-green-color);
        width: 100%;
        font-weight: 600;
    }

    .detailContent {
        background-color: white;
        border-radius: 10px;
        padding: 10px 15px;
        text-align: center;
        color: var(--common-main-green-color);
    }
`;
// -------------------------------------------------



/* 引数：
・title: タイトル（必須）
・subtitle: サブタイトル（任意）
・icon: アイコン（必須）
・text: テキスト（必須）
・detail: 詳細テキスト（任意・ホバー時に表示）
*/



const ComponentProfileTile = ({
    title,
    icon,
    text,
    subtitle="",
    detail,
    customLRPadding=15,
    isTextBold=true
}) => {
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
                {(icon!=null) ? <Icon style={{margin: 0 }}>{icon}</Icon> : null}
                <span style={{ marginLeft: (icon!=null) ? 5 : 0 }}>{title}</span>
                <span style={{ marginLeft: 2, fontSize: '70%' }}>{subtitle}</span>
            </div>

            <Spacer height={5} />

            {/* 真ん中のテキスト */}
            <div
                className="centerText"
                style={{ padding: `0 ${customLRPadding}px`, fontWeight: (isTextBold) ? 'bold' : 'normal' }}>
                {text}
            </div>

            {/* detailの要素が存在する場合、下側を指すアイコンを表示 */}
            {detail!=null && (
                <Icon className='detailIcon ' style={{ margin: 0 }}><ExpandMore /></Icon>
            )}


            {/* ホバー時の詳細 */}
            {isHovered && detail!=null && (
                <div className={'detail'}>
                    <div className='detailContent'>
                        {detail}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComponentProfileTile;