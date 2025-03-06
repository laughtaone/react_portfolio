// キャプション用のPタグ
import React from "react";

const Pcaption = ({ children, customMarginTop=2 }) => {
    return (
        <p style={{
            fontSize: '12px',
            color: 'var(--common-main-light-color)',
            marginTop: `${customMarginTop}px`
        }}>
            {children}
        </p>
    );
}

export default Pcaption;