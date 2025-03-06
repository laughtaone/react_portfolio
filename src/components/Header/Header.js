import React from 'react';
import '../../App.css';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { useState, useEffect } from "react";
import Spacer from '../Spacer';

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



    .header-nav-item-mobile {
        padding-bottom: 25px;
        width: 95%;
    }
    .header-nav-link-mobile.active {
        background-color: white;
        padding: 30px 0;
        border-left: 3px solid var(--common-main-color);
        font-weight: bold;
    }
    .header-nav-link-mobile {
        font-size: 22px;
        text-decoration: none;
        color: var(--common-main-color);
        padding: 10px 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease,
        box-shadow 0.3s ease;
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

    const [isDesktop, setIsMobile] = useState(window.innerWidth > 767);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth > 767);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [isHoverMenu, setIsHoverMenu] = useState(false);



    return (
        <header>
            <div
                className='header'
                style={{
                    position: 'relative',
                    borderBottomLeftRadius: (isOpen && !isDesktop) ? 0 : '25px',
                    borderBottomRightRadius: (isOpen && !isDesktop) ? 0 : '25px'
            }}>
                <h1 className='header-top-link-container'><a href="/" className="header-top-link">USUBA Taichi</a></h1>
                <div className="header-nav-container">
                    {(isDesktop)
                        ? <ul className="header-nav-list">
                            <li className="header-nav-item"><a href="profile" className={`header-nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>プロフィール</a></li>
                            <li className="header-nav-item"><a href="history" className={`header-nav-link ${location.pathname === '/history' ? 'active' : ''}`}>来歴</a></li>
                            <li className="header-nav-item"><a href="works" className={`header-nav-link ${location.pathname === '/works' ? 'active' : ''}`}>制作物</a></li>
                            <li className="header-nav-item"><a href="aboutsite" className={`header-nav-link ${location.pathname === '/aboutsite' ? 'active' : ''}`}>当サイト説明</a></li>
                            <li className="header-nav-item"><a href="contact" className={`header-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>お問合せ</a></li>
                        </ul>
                        : <div
                            style={{height: "100%", display: "flex", alignItems: "center", cursor: "pointer"}}
                        >
                            <div
                                onMouseEnter={() => setIsHoverMenu(true)}
                                onMouseLeave={() => setIsHoverMenu(false)}
                                style={{
                                    color: "var(--common-main-color)",
                                    padding: "13px",
                                    borderRadius: "100%",
                                    alignItems: "center",
                                    display: "flex",
                                    backgroundColor:
                                        (isHoverMenu)
                                            ? "var(--common-back-light-color)"
                                            : (isOpen)
                                                ? "white"
                                                : "var(--common-back-color)"
                                }}
                            >
                                {(!isOpen)
                                    ? <Menu
                                        style={{fontSize: "33px"}}
                                        onClick={() => setIsOpen(!isOpen)}
                                    />
                                    : <Close
                                        style={{fontSize: "33px"}}
                                        onClick={() => setIsOpen(!isOpen)}
                                    />
                                }
                            </div>
                        </div>
                    }
                </div>

                {(isOpen && !isDesktop &&
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        backgroundColor: "#EFF2FB",
                        zIndex: 10,
                        borderBottomLeftRadius: '25px',
                        borderBottomRightRadius: '25px',
                        alignItems: 'center',
                        alignContent: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <ul
                            className="header-nav-list-mobile"
                            style={{
                                listStyleType: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: "100%",
                                width: "100%",
                                padding: "50px 0"
                            }}
                        >
                            <li className="header-nav-item-mobile"><a href="profile" className={`header-nav-link-mobile ${location.pathname === '/profile' ? 'active' : ''}`}>プロフィール</a></li>
                            <li className="header-nav-item-mobile"><a href="history" className={`header-nav-link-mobile ${location.pathname === '/history' ? 'active' : ''}`}>来歴</a></li>
                            <li className="header-nav-item-mobile"><a href="works" className={`header-nav-link-mobile ${location.pathname === '/works' ? 'active' : ''}`}>制作物</a></li>
                            <li className="header-nav-item-mobile"><a href="aboutsite" className={`header-nav-link-mobile ${location.pathname === '/aboutsite' ? 'active' : ''}`}>当サイト説明</a></li>
                            <li className="header-nav-item-mobile"><a href="contact" className={`header-nav-link-mobile ${location.pathname === '/contact' ? 'active' : ''}`}>お問合せ</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;