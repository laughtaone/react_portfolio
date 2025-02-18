import React from 'react';
import ComponentSnsTile from '../../Profile/ComponentSnsTile';



const ComponentHoverLinkTile = ({ icon, title, url = "" }) => {
    return <ComponentSnsTile
        icon={icon}
        title={title}
        url={url}
        customBackColor='var(--common-back-green-deep-color)'
        customHoverBackColor='var(--common-back-green-deep2-color)'
        isFullWidth={false}
        isMiniSize={true}
    />;
};


export default ComponentHoverLinkTile;