import React from 'react';

const CenteredContainer = ({ children }) => {
    return (
        <div style={{
            margin: 'var(--common-body-margin)',
            maxWidth: '1000px',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            {children}
        </div>
    );
};

export default CenteredContainer;
