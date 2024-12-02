import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Users from './pages/Users';
import NewUser from './pages/NewUser';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/user/new" element={<NewUser />} />
            </Routes>
        </BrowserRouter>
    );
}

