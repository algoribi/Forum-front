import ContentHeader from 'components/contentHeader';
import React from 'react';
import '../css/content.css';
import contents from '../../db/album.json';

export default function Album(props : PropsUser) {
    return (
        <div className='content_box'>
            <ContentHeader user={props.user} category='Album' />
            <div className='content_album'>
                {contents.map(item => (
                    <div className='img_div' key={item.id}>
                        <img className='img' src={`/images/album/${item.img}`} alt={`${item.img}`} />
                        <p className='img_title'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}