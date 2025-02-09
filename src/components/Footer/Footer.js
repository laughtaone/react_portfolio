import React from 'react';
import '../../App.css';
import Icon from '@mui/material/Icon';
import { FlagOutlined, PlaceOutlined, SchoolOutlined, TagOutlined } from '@mui/icons-material';
import Spacer from '../../components/Spacer'
import './Footer.css';





const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-space-between">
                <div>
                    <h1 style={{margin: '3px 0'}}><a href="/" className='footer-top-link'>USUBA Taichi</a></h1>
                    <h3 style={{margin: '3px 0'}}>ポートフォリオサイト</h3>
                </div>
                <p><a href="/" className='footer-top-link'>thinleaf.com</a></p>
            </div>
            <div className="container-space-between" style={{textAlign: 'right'}}>
                <div>
                    <h3 style={{margin: '3px 0'}}>当サイトはReactおよびAWSを用いて構築・運営しています</h3>
                    <Spacer height={7} />
                    <div className='footer-aws-list'>
                        <p className='footer-aws-list-p'>
                            <Icon className='footer-aws-icon'><PlaceOutlined /></Icon>
                            リージョン　東京リージョン
                        </p>
                        <p className='footer-aws-list-p' style={{fontSize: '90%'}}>
                            （ AZ　?個目/2個中 ）
                        </p>
                    </div>
                </div>
                <p>当サイトの設計については <a href="aboutthissite">こちら</a></p>
            </div> 
        </footer>
    );
};

export default Footer;
