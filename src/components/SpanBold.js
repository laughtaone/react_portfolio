import React from 'react';


const SpanBold = ({ children, customLRMargin=5 }) => {
    return (
        <span style={{ fontWeight: "bold", margin: `0 ${customLRMargin}px` }}>
            {children}
        </span>
    );
};

export default SpanBold;