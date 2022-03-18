import ContentHeader from 'components/contentHeader';
import React from 'react';
import '../css/content.css';

export default function Notice(props : PropsUser) {
    return (
        <div className='content_box'>
            <ContentHeader user={props.user} category='Notice' />
            <div className='content'>
                <h1>Notice</h1>
            </div>
        </div>
    );
}