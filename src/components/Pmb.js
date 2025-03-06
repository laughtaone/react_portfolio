// 下側にMarginがあるPタグ
import React from "react";

const Pmb = ({ children }) => {
    return (
        <p style={{ marginBottom: '9px' }}>
            {children}
        </p>
    );
}

export default Pmb;