import React, { useState, useEffect } from "react";
import '../App.css';


const CenteredContainer = ({
    children,
    needsPaddingTop = true,
    needsPaddingBottom = true,
    needsPaddingLR = true,
    needsMinHeight = true
}) => {
    const [bodyHeight, setBodyHeight] = useState("auto");
    const [headerHeight, setHeaderHeight] = useState("null");
    const [footerHeight, setFooterHeight] = useState("null");
    const [windowHeight, setWindowHeight] = useState("null");

    useEffect(() => {
        const updateHeight = () => {
            // CSSカスタムプロパティの取得
            const rootStyles = getComputedStyle(document.documentElement);
            const headerHeight = parseInt(rootStyles.getPropertyValue("--header-height")) || 0;
            const footerHeight = parseInt(rootStyles.getPropertyValue("--footer-height")) || 0;
            const windowHeight = window.innerHeight;
            const newBodyHeight = Math.max(windowHeight - headerHeight - footerHeight, 0);
            setBodyHeight(`${newBodyHeight}px`);
            setHeaderHeight(`${headerHeight}px`);
            setFooterHeight(`${footerHeight}px`);
            setWindowHeight(`${windowHeight}px`);
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);



    return (
        <div style={{
            margin: '0 auto',
            // padding: 'var(--common-body-margin)',
            paddingTop: (needsPaddingTop) ? 'var(--common-body-margin-top)' : 0,
            paddingBottom: (needsPaddingBottom) ? 'var(--common-body-margin-bottom)' : 0,
            paddingLeft: (needsPaddingLR) ? 'var(--common-body-margin-LR)' : 0,
            paddingRight: (needsPaddingLR) ? 'var(--common-body-margin-LR)' : 0,
            maxWidth: '1000px',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: (needsMinHeight) ? bodyHeight : 'auto',
        }}>
            {children}
        </div>
    );
};

export default CenteredContainer;
