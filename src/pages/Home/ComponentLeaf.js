import React, { useState } from 'react';
import '../../App.css';
import purpleLeaf from '../../assets/images/purple_leaf.png';
import greenLeaf from '../../assets/images/green_leaf.png';
import { Link } from 'react-router-dom';


// -------------------- CSS ------------------------
export const style = `
`;
// -------------------------------------------------



const ComponentLeaf = ({
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

    const [isHovered, setIsHovered] = useState(false);
    const hoveredEnter = () => setIsHovered(true);
    const hoveredLeave = () => setIsHovered(false);

    return (
        <div
            onMouseEnter={hoveredEnter}
            onMouseLeave={hoveredLeave}
            style={{
                position: 'relative',
                display: 'inline-block',
                width: '28%',
                height: 'auto',
                textAlign: 'center'
            }}
        >
            <Link to={url} style={{ textDecoration: 'none' }}>
                {/* 画像 */}
                <img
                    src={(!isHovered) ? purpleLeaf : greenLeaf}
                    alt="Logo"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                {/* 中央配置のテキスト */}
                <div style={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: (!isHovered) ? 'var(--common-main-color)' : 'var(--common-main-green-color)',
                    fontSize: '1.3em',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '80%',
                }}>
                    {title}
                </div>
            </Link>
        </div>
    );
};

export default ComponentLeaf;