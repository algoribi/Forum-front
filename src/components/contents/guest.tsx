import ContentHeader from 'components/contentHeader';
import React from 'react';
import '../css/content.css';
import contents from '../../db/guest.json';

export default function Guest(props: PropsUser) {
    
    const setCommentUserName = () => {
        return (
            <div className='comment_name'>
                {
                    props.user
                        ? <p>{props.user}</p>
                        : <input type="text" id='' />
                }
                <button className={props.user ? 'writing_button' : 'none_item'}>🖋</button>
            </div>    
        );
    }

    return (
        <div className='content_box'>
            <ContentHeader user={props.user} category='Guest' />
            <div className='content_column'>
                <div className='comment'>
                    {setCommentUserName()}
                    <input type="text" id='comment_content'name='comment_content'/>
                </div>
                {contents.map(item => (
                    <div className='post_div guest' key={item.id}>
                        <div className='post_header'>
                            <p className='post_name'>{item.name}</p>
                            <p className='post_time'>{item.time}</p>
                        </div>
                        <div className='post_guest'>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}