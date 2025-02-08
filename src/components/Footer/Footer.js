import React from 'react';
import '../../App.css';



// ---------------- フッターのCSS --------------------
const footerStyles = `
    .footer-top-link {
        text-decoration: none;
    }

    .footer {
        background-color: var(--common-back-color);
        color: var(--common-main-color);
        padding: 0 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 190px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .footer-nav-list {
        display: flex;
        flex-direction: column;
        padding: 0;
        list-style-type: none;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .footer-nav-link {
        text-decoration: none;
        color: var(--common-main-color);
        padding: 0 10px;
        margin-left: 2px;
        height: 100%;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }
`;
// -------------------------------------------------


const Footer = () => {
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = footerStyles;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);


    return (
        <footer className="footer">
            <div className='left-container'>
                <h1 style={{margin: '3px 0'}}><a href="/" className='footer-top-link'>USUBA Taichi</a></h1>
                <h3 style={{margin: '3px 0'}}>ポートフォリオサイト</h3>
                <p>thinleaf.com</p>
            </div>
            <div className="right-container">
                <ul className="footer-nav-list">
                    <li style={{fontWeight: 'bold'}}>このサイトはAWSを使用して運営しています</li>
                    <li>リージョン：東京リージョン</li>
                    <li>AZ：?つ目/2つ中</li>
                    <li style={{marginTop: '20px'}}>当サイトの設計については<a href="aboutthissite">こちら</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;