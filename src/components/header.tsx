import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

interface Props {
    user: string | null;
    setUser: (name: string | null) => void;
}

export default function Header(props: Props) {
    const [toggleModal, setToggleModal] = useState(false);
    const [userName, setUserName] = useState("");

    const modal_button = () => {
        return (
            props.user
                ? <button className='logout button' onClick={() => { props.setUser(null) }} />
                : <button className='login button' onClick={() => { setToggleModal(true) }} />
        );
    }
    
    const setUser = () => {
        if (userName === "") {
            props.setUser("User");
        } else {
            props.setUser(userName);
            setUserName("");
        }
        setToggleModal(false);
    }

    return (
        <div className='header'>
            <Link to='/' className='blog_title'>💜We_log💜</Link>
            {modal_button()}
            {toggleModal
                ? <div className='modal_box'>
                    <div className='modal_message_box'>
                        <div className='close_box'>
                            <button className='close_button' onClick={() => setToggleModal(false)}>✖</button>
                        </div>
                        <div className='input_box'>
                            <input className='input_username' type='text'
                                placeholder="Please enter your username."
                                value={userName}
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                }}
                                onKeyDown={(e) => { if (e.key === 'Enter') { setUser() } }} />
                            <button className='modal_button button' onClick={() => setUser()}>✔</button>
                        </div>
                    </div>
                </div>
                : <div className='none_item'></div>
            }
        </div>
    );
}