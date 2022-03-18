import ContentHeader from 'components/contentHeader';
import React from 'react';
import '../css/content.css';

export default function Guest(props : PropsUser) {
    return (
        <div className='content_box'>
            <ContentHeader user={props.user} category='Guest' />
            <div className='content'>
                <h1>Guest</h1>
            </div>
        </div>
    );
}