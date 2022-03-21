import React from 'react';
import './css/contentHeader.css';

interface Props {
    user: string | null;
    category: string;
}

export default function ContentHeader(props: Props) {

    return (
        <div className='content_header'>
            <p className='category'>{props.category}</p>
            {props.category === 'MainPage'
                ? <></>
                : <button className={props.user ? 'writing_button' : 'none_item'}>➕</button>
            }
        </div>
    );
}