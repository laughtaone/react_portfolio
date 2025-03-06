import React, { useState } from 'react';


const ComponentP = ({text, isMini}) => {
    return (
        <p
            style={{
                textAlign: 'center',
                width: '100%',
                margin: '0 auto 10px auto',
                fontWeight: (!isMini) ? 'bold' : 'normal',
                fontSize: (!isMini) ? '20px' : '10px',
            }}
        >
            {text}
        </p>
    );
};

export default ComponentP;