import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import MainPage from './contents/mainPage';
import Notice from './contents/notice';
import Album from './contents/album';
import Diary from './contents/diary';
import Guest from './contents/guest';

export default function App() {
    const [user, setUser] = useState<string | null>(null);

    const switchUserState = (name : string | null) => {
        setUser(name);
    }

    return (
        <div className='app'>
            <Sidebar user={user}/>
            <div className='header_and_content'>
                <Header user={user} switchUserState={switchUserState} />

                <Routes>
                    <Route path='/' element={<MainPage user={user}/>} />
                    <Route path='/notice' element={<Notice user={user}/>} />
                    <Route path='/album' element={<Album user={user}/>} />
                    <Route path='/diary' element={<Diary user={user}/>} />
                    <Route path='/guest' element={<Guest user={user}/>} />
                </Routes>
            </div>
        </div>
    );
}