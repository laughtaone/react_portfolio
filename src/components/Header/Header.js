import React from 'react';
import '../../App.css';
import { Link, useLocation } from 'react-router-dom';

// ---------------- ヘッダーのCSS --------------------
export const headerStyles = `
    .header {
        background-color: var(--common-back-color);
        color: var(--common-main-color);
        padding: 0 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    .header-top-link-container {
        height: 100%;
    }

    .header-top-link {
        padding: 0 15px;
        text-decoration: none;
        color: var(--common-main-color);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }

    // .header-top-link:hover {
        // background-color: var(--common-back-light-color);
    // }

    .header-nav-container {
        height: 100%;
    }

    .header-nav-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        height: 100%;
    }

    .header-nav-item {
        height: 100%;
        min-width: 120px;
    }

    .header-nav-link {
        text-decoration: none;
        color: var(--common-main-color);
        padding: 0 10px;
        margin-left: 2px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .header-nav-link:hover {
        background-color: var(--common-back-light-color);
        box-shadow: inset 0 -2px 0 0 #8289EC;
    }

    .header-nav-link.active {
        background-color: white;
        box-shadow: inset 0 -2px 0 0 var(--common-main-color);
    }

    .header-nav-link.active:hover {
        background-color: var(--common-back-light-color);
    }
`;
// -------------------------------------------------


const Header = () => {
    // スタイルを動的に適用
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = headerStyles;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    const location = useLocation(); // 現在選択中のタブを取得

    return (
        <header className="header">
            <h1 className='header-top-link-container'><a href="/" className="header-top-link">USUBA Taichi</a></h1>
            <div className="header-nav-container">
                <ul className="header-nav-list">
                    <li className="header-nav-item"><a href="profile" className={`header-nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>プロフィール</a></li>
                    <li className="header-nav-item"><a href="history" className={`header-nav-link ${location.pathname === '/history' ? 'active' : ''}`}>来歴</a></li>
                    <li className="header-nav-item"><a href="works" className={`header-nav-link ${location.pathname === '/works' ? 'active' : ''}`}>制作物</a></li>
                    <li className="header-nav-item"><a href="aboutthissite" className={`header-nav-link ${location.pathname === '/aboutthissite' ? 'active' : ''}`}>当サイト説明</a></li>
                    <li className="header-nav-item"><a href="contact" className={`header-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>お問合せ</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;