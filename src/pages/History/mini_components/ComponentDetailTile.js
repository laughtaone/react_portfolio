import React from 'react';
import '../../../App.css';
import Spacer from '../../../components/Spacer';



const ComponentDetailTile = ({ title, content }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--common-back-color)',
            padding: '9px 14px',
            borderRadius: '7px',
            marginBottom: '5px',
            marginRight: '5px',
            fontSize: '85%'
        }}>
            <p>{title}</p>
            <Spacer width={8} />
            <h3>{content}</h3>
        </div>
);
};

export default ComponentDetailTile;
