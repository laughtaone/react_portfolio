import React, { useState } from 'react';
import Icon from '@mui/material/Icon';
import '../../App.css';
import { CodeOutlined, EmojiObjectsOutlined } from '@mui/icons-material';



// -------------------- CSS ------------------------
export const style = `
    .sns-tile-content {
        position: relative;
        text-align: center;
        width: 100%;
        align-self: flex-start;
        display: flex;
        align-items: center;
        color: var(--common-main-color);
        font-weight: bold;
        justify-content: center;
    }
`;
// -------------------------------------------------



const ComponentCategoryInfomation = ({
    kind
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
        <div
            style={{
                padding: '4px 12px',
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                width: 'fit-content',
                marginBottom: '3px',
                textAlign: 'center',
                borderRadius: '50px',
                alignItems: 'center',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="sns-tile-content">
                <Icon style={{ fontSize: '140%' }} >{
                    kind=="app"
                        ? <CodeOutlined fontSize='100%' />
                        : kind=="idea"
                            ? <EmojiObjectsOutlined />
                            : null
                }</Icon>
                <span style={{ marginLeft: 5, marginTop: 1, textAlign: 'center', width: '100%', fontSize: '85%'}}>{
                    kind=="app"
                        ? "開発"
                        : kind=="idea"
                            ? "アイデア"
                            : null
                }</span>
            </div>
        </div>
    );
};

export default ComponentCategoryInfomation;