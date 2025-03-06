import React from 'react';
import ComponentProfileTile from '../Profile/ComponentProfileTile';

const characterColor = '#9B3EBB';       // 文字色 (このファイルで共通の紫文字色)


const ComponentDetailTileP = ({ children }) => {
    return (
        <p style={{
            // color: characterColor
            color: "var(--common-main-color)"
        }}>
            {children}
        </p>
    );
}



const ComponentDetailTile = ({ icon, title, content }) => {
    return (
        <ComponentProfileTile
            icon={icon}
            title={title}
            text={content}
            isTextBold={false}
            customWidth='70%'
            isMerginAuto={true}
        />
    );
}


export {ComponentDetailTileP, ComponentDetailTile};








// ---------------------------- 旧デザインのコード ----------------------------
// const ComponentDetailTile = ({ title, content, titleAlign="center" }) => {
//     return (
//         <div style={{
//             display: 'flex',
//             justifyContent: ' flex-start',
//             marginTop: '10px',
//             // backgroundColor: '#FBF7FC',
//             backgroundColor: 'var(--common-back-color)',
//             padding: '10px 12px',
//             borderRadius: '10px',
//             alignItems: titleAlign
//         }}>
//             <div
//                 style={{
//                     padding: '12px 15px',
//                     // backgroundColor: '#f2edf7',
//                     backgroundColor: 'var(--common-back-deep-color)',
//                     borderRadius: '30px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     height: 'fit-content',
//                     marginRight: '10px',
//                     width: '17%',
//                     height: '100%'
//                 }}
//             >
//                 {/* <InfoOutlined style={{fontSize: "19px", color: "var(--common-main-color)", marginRight: '6px'}}/> */}
//                 <p style={{
//                     // color: characterColor,
//                     color: "var(--common-main-color)",
//                     width: '100%',
//                     fontWeight: 'bold',
//                     userSelect: 'none',
//                     textAlign: 'center'
//                 }}>
//                     {title}
//                 </p>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'flex-start', width: '83%', flexDirection: 'column' }}>
//                 {content}
//             </div>
//         </div>
//     );
// };
