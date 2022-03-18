import React, { useState } from 'react';
import './css/header.css';

interface Props {
    user: string | null;
    switchUserState: (name: string | null) => void;
}

export default function Header(props: Props) {
    const [toggleModal, setToggleModal] = useState(false);
    const [userName, setUserName] = useState("");

    const onClickLogin = () => {
        if (props.user) {
            props.switchUserState(null);
        } else {
            setToggleModal(true);
        }
    }

    const setUser = (button : boolean) => {
        if (button) {
            if (userName === "") {
                props.switchUserState("User");
            } else {
                props.switchUserState(userName);
                setUserName("");
            }
        }
        setToggleModal(false);
    }

    return (
        <div className='header'>
            <button className={props.user ? 'logout button' : 'login button'}
                onClick={() => { onClickLogin() }} />
            <div className={ toggleModal ? 'modal_box' : 'non_box' }>
                <div className='modal_message_box'>
                    <div className='close_box'>
                        <button className='close_button' onClick={() => setUser(false)}>✖</button>
                    </div>
                    <div className='input_box'>
                        <input className='input_username' type='text'
                            placeholder="Please enter your username."
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            onKeyDown={(e) => { if (e.key === 'Enter') { setUser(true) } }} />
                        <button className='modal_button button' onClick={() => setUser(true)}>✔</button>
                    </div>
                </div>    
            </div>
        </div>
    );
}