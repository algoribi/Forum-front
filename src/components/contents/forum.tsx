import ContentHeader from 'components/contentHeader';
import React from 'react';
import '../css/content.css';

export default function Forum(props : PropsUser) {
    return (
        <div className='content_box'>
            <ContentHeader user={props.user} category='Forum' />
            <div className='content'>
                <h1>Forum</h1>
            </div>
        </div>
    );
}