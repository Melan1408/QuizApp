import React from 'react';
import { Routes, Route } from 'react-router-dom';
import QuizStart from '../pages/QuizStart';
import NotFound from '../pages/NotFound';
import Favorite from '../pages/Favorite';
import Create from '../pages/Create';

const QuizRoute = () => (
    <>
        <Routes>
            <Route path='/add_new' element={<Create />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/:name' element={<QuizStart />} />
        </Routes>
    </>
);

export default QuizRoute;
