import ContentHeader from 'components/contentHeader';
import React from 'react';
import '../css/content.css';
import contents from '../../db/forum.json';

export default function Forum(props : PropsUser) {
    return (
        <div className='content_box'>
            <ContentHeader user={props.user} category='Forum' />
            <div className='content_column'>
                {contents.map(item => (
                    <div className='post_div forum' key={item.id}>
                        <p className='post_title'>{item.title}</p>
                        <p className='post_content'>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}