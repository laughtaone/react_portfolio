import React from 'react';
import '../../../App.css';



// -------------------- CSS ------------------------
export const style = `
`;
// -------------------------------------------------




const ComponentDateTile = ({ year, month }) => {
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = style;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <div style={{
                padding: '6px',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'var(--common-back-color)',
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}>
                <p style={{lineHeight: '1'}}>
                    <span style={{fontWeight: '500', padding: 0}}>{year}</span><br />
                    <span style={{fontWeight: '700', fontSize: '230%'}}>{month}</span>
                </p>
            </div>
        </div>
);
};

export default ComponentDateTile;