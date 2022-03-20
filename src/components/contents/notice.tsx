import ContentHeader from 'components/contentHeader';
import React from 'react';
import '../css/content.css';
import contents from '../../db/notice.json';

export default function Notice(props : PropsUser) {
    return (
        <div className='content_box'>
            <ContentHeader user={props.user} category='Notice' />
            <div className='content_column'>
                {contents.map(item => (
                    <div className='post_div notice' key={item.id}>
                        <p className='post_title'>{item.title}</p>
                        <p className='post_content'>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}