import React from 'react';
import ComponentSnsTile from '../../Profile/ComponentSnsTile';



const ComponentHoverLinkTile = ({ icon, title, url = "", isPreparing=false }) => {
    return <ComponentSnsTile
        icon={icon}
        title={title}
        url={url}
        customMainColor="var(--common-main-green-color)"
        customBackColor='var(--common-back-green-deep-color)'
        customHoverBackColor='var(--common-back-green-deep2-color)'
        isFullWidth={false}
        isMiniSize={true}
        isPreparing={isPreparing}
    />;
};


export default ComponentHoverLinkTile;