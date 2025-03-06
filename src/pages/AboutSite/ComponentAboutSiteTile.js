import React from 'react';


const ComponentAboutSiteTile = ({ title, content }) => {
    return (
        <div style={{ marginBottom: '40px' }}>
            <h2
                style={{
                    textAlign: 'left',
                    width: '95%',
                    margin: '0 auto 10px auto',
                    fontWeight: 'bold',
                    fontSize: '24px'
                }}
            >
                {title}
            </h2>
            <div style={{ width: "90%", alignItems: 'center', margin: '0 auto' }}>
                {content}
            </div>
        </div>
    );
};

export default ComponentAboutSiteTile;