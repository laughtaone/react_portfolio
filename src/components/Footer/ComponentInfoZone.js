import React from 'react';
import Icon from '@mui/material/Icon';
import { PlaceOutlined } from '@mui/icons-material';
import '../../App.css';



const ComponentInfoZone = ({ instanceId, isDesktop }) => {
    return (
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
                （ AZ　{(instanceId!=null) ? `${instanceId ?? '？'}個目/2個中` :'取得できませんでした'} ）
            </p>
        </div>
    );
}


export default ComponentInfoZone;