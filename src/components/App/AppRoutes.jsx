import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Feed />} />
  </Routes>
);

export default AppRoutes;
