import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './Main.js';
import Post from '../Components/Post.js';

function Page() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/post/:id' element={<Post/>}></Route>
    </Routes>
  );
}

export default Page;