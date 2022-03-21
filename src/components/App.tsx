import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import MainPage from './contents/mainPage';
import Notice from './contents/notice';
import Album from './contents/album';
import Forum from './contents/forum';
import Guest from './contents/guest';

export default function App() {
    const [user, setUser] = useState<string | null>(null);

    return (
        <div className='app'>
            <Sidebar user={user}/>
            <div className='header_and_content'>
                <Header user={user} setUser={setUser} />

                <Routes>
                    <Route path='/' element={<MainPage user={user}/>} />
                    <Route path='/notice' element={<Notice user={user}/>} />
                    <Route path='/forum' element={<Forum user={user}/>} />
                    <Route path='/album' element={<Album user={user}/>} />
                    <Route path='/guest' element={<Guest user={user}/>} />
                </Routes>
            </div>
        </div>
    );
}