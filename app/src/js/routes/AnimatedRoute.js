import React from 'react';
import Home from '../view/home';
import NotFound from '../view/notfound';
import { Route, Routes, useLocation } from "react-router-dom";

export default function AnimatedRoute() {
    const location = useLocation()
    console.log('step1');

  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/">
            <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
