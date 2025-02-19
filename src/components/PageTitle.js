import React from 'react';
import purpleLeaf from '../assets/images/deep-purple_leaf.png';
import Spacer from './Spacer';




const ComponentPageTitle = ({ title }) => {
    return (<>
        <h1>
            <img
                src={purpleLeaf}
                alt="Logo"
                style={{ width: '25px', height: 'auto', marginRight: '10px' }}
            />
            {title}
        </h1>
        <Spacer height={40} />
    </>);
};

export default ComponentPageTitle;
