import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const menus = [
        { name : 'Notice', path : '/notice' },
        { name : 'Album', path : '/album' },
        { name : 'Diary', path : '/diary' },
        { name : 'Guest', path : '/guest' }
    ];

    return (
        <div className='sidebar'>
            <div className='blog_title'>
                <Link to='/'>Blog</Link>
            </div>
            {menus.map(item => {
                return (
                <Link to={item.path} key={item.name}>
                    <div className='idebar_category'>{item.name}</div>
                </Link>
            )})}
        </div>
    );
}