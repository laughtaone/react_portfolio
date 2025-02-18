import React from 'react';
import '../../../App.css';
import Spacer from '../../../components/Spacer';



const ComponentHoverDetailTile = ({ title, content }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            color: 'var(--common-main-green-deep-color)',
            backgroundColor: 'var(--common-back-green-deep-color)',
            padding: '9px 14px',
            borderRadius: '7px',
            marginBottom: '5px',
            fontSize: '85%'
        }}>
            <p style={{color: 'var(--common-main-green-deep-color)', width: '25%'}}>{title}</p>
            <Spacer width={8} />
            <h3 style={{color: 'var(--common-main-green-deep-color)', textAlign: 'center', width: '75%'}}>{content}</h3>
        </div>
);
};

export default ComponentHoverDetailTile;
