import React from 'react';
import ComponentSnsTile from '../../Profile/ComponentSnsTile';



const ComponentHoverLinkTile = ({
    icon,
    title,
    subtitle,
    url = "",
    isPreparing=false,
    isSubtitleColumn=false,
    customPreparingMessage
}) => {
    return <ComponentSnsTile
        icon={icon}
        title={title}
        subtitle={subtitle}
        url={url}
        customMainColor="var(--common-main-green-color)"
        customBackColor='var(--common-back-green-deep-color)'
        customHoverBackColor='var(--common-back-green-deep2-color)'
        isFullWidth={false}
        isMiniSize={true}
        isPreparing={isPreparing}
        isSubtitleColumn={isSubtitleColumn}
        customPreparingMessage={customPreparingMessage}
    />;
};


export default ComponentHoverLinkTile;