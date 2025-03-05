import React from 'react';
import '../../App.css';
import Icon from '@mui/material/Icon';
import { FlagOutlined, PlaceOutlined, SchoolOutlined, TagOutlined } from '@mui/icons-material';
import Spacer from '../../components/Spacer'
// import './Footer.css';
import { useState, useEffect } from "react";



// ---------------- ヘッダーのCSS --------------------
export const styles = `
    .footer-top-link {
        text-decoration: none;
    }

    .footer {
        margin: 0;
        background-color: var(--common-back-color);
        color: var(--common-main-color);
        padding: 20px 25px 30px 25px;
        // height: var(--footer-height);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .footer-aws-list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 6px 5px;
        border-radius: 5px;
        list-style-type: none;
        text-align: center;
        background-color: var(--common-back-deep-color)
    }

    .footer-aws-list-p {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .container-space-between {
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        // height: 100%;
    }

    .footer-aws-icon {
        margin-right: 3px;
    }
`;
// -------------------------------------------------




const Footer = () => {
    // スタイルを動的に適用
    React.useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
        return () => styleSheet.remove();
    }, []);

    const [isDesktop, setIsMobile] = useState(window.innerWidth > 767);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth > 767);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const [az, setAz] = useState("");
    useEffect(() => {
        fetch("/metadata.php")
            .then((res) => res.json())
            .then((data) => {
                setAz(data.az);
            })
            .catch((err) => console.error("EC2メタデータ取得エラー:", err));
    }, []);

    console.log(`az: ${az}`);
    const instanceId = (az === "ap-northeast-1a") ? 1 : (az === "ap-northeast-1d") ? 2 : null;


    return (
        <footer
            className="footer"
            style={{
                display: (isDesktop) ? 'flex' : 'block',
                justifyContent: 'space-between',
                height: (isDesktop) ? 'var(--footer-height)' : 'auto',
            }}
        >
            <div
                // className="container-space-between"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: (isDesktop) ? 'space-between' : 'center',
                    height: '100%'
                }}
            >
                <div>
                    <h1 style={{margin: '3px 0'}}><a href="/" className='footer-top-link'>USUBA Taichi</a></h1>
                    <h3 style={{margin: '3px 0'}}>ポートフォリオサイト</h3>
                </div>
                <p><a href="/" className='footer-top-link'>thinleaf.net</a></p>
            </div>

            <Spacer height={30} />

            <div
                className="container-space-between"
                style={{
                    textAlign: (isDesktop) ? 'right' : 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: (isDesktop) ? 'space-between' : 'center',
                    height: '100%'
                }}
            >
                <div>
                    <h3 style={{margin: '3px 0', fontSize: '17px'}}>当サイトはReactおよびAWSを用いて構築・運営しています</h3>
                    <Spacer height={5} />
                    <div
                        className='footer-aws-list'
                        style={{
                            // marginLeft: (isDesktop) ? 'auto' : '0',
                            margin: (isDesktop) ? '0 0 0 auto' : 'auto',
                            maxWidth: '260px'
                        }}
                    >
                        <p className='footer-aws-list-p'>
                            <Icon className='footer-aws-icon'><PlaceOutlined style={{fontSize: '22px'}} /></Icon>
                            リージョン：東京
                        </p>
                        <p className='footer-aws-list-p' style={{fontSize: '90%'}}>
                            （ AZ　{(instanceId!=null) ? `${instanceId ?? ''}個目/2個中` :'取得できませんでした'} ）
                        </p>
                    </div>
                </div>

                <Spacer height={30} />

                <p>当サイトの設計については <a href="aboutthissite">こちら</a></p>
            </div>
        </footer>
    );
};

export default Footer;
