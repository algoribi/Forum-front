import ContentHeader from 'components/contentHeader';
import React from 'react';
import '../css/content.css';

export default function MainPage(props : PropsUser) {
    return (
        <div className='content_box'>
            <ContentHeader user={props.user} category='MainPage' />
            <div className='content'>
                <h1>MainPage</h1>
            </div>
        </div>
    );
}