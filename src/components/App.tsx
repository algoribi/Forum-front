import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import MainPage from './contents/mainPage';
import Notice from './contents/notice';
import Album from './contents/album';
import Diary from './contents/diary';
import Guest from './contents/guest';

export default function App() {

    return (
        <div className='app'>
            <Sidebar />
            <div className='header_and_content'>
                <Header />

                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/notice' element={<Notice />} />
                    <Route path='/album' element={<Album />} />
                    <Route path='/diary' element={<Diary />} />
                    <Route path='/guest' element={<Guest />} />
                </Routes>
            </div>
        </div>
    );
}