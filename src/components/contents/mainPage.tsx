import ContentHeader from 'components/contentHeader';
import React from 'react';
import '../css/content.css';

export default function MainPage(props : PropsUser) {
    return (
        <div className='content_box'>
            <ContentHeader user={props.user} category='Hello!' />
            <div className='main_page'>
                <img className='main_img' src={`/images/main_page.jpg`} alt={`main_page.jpg`} />
                <p className='main_text'>Welcome to We_log.</p>
            </div>
        </div>
    );
}