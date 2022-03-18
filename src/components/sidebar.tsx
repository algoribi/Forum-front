import React from 'react';
import { Link } from 'react-router-dom';
import './css/sidebar.css';

export default function Sidebar(props : PropsUser) {

    const menus = [
        { name : 'Notice', path : '/notice' },
        { name : 'Album', path : '/album' },
        { name : 'Diary', path : '/diary' },
        { name : 'Guest', path : '/guest' }
    ];

    return (
        <div className='sidebar'>
            <Link to='/' className='blog_title'>💜My_log💜</Link>
            <Link to='/notice' className='user_info'>
                <img className='user_icon' src='/images/basic_user_icon.png' />
                <p className='user_name'>{props.user ? props.user : 'guest'}</p>
            </Link>    
            {menus.map(item => {
                return (
                <Link to={item.path} key={item.name}>
                    <div className='sidebar_category'>{item.name}</div>
                </Link>
            )})}
        </div>
    );
}