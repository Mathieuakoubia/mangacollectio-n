import React from 'react';
import Collection from '../view/collection';
import NotFound from '../view/notfound';
import Home from '../view/home';
import { Route, Routes, useLocation } from "react-router-dom";

export default function AnimatedRoute() {
    const location = useLocation()
    console.log('step1');

  return (
    <Routes location={location} key={location.pathname}>
        <Route path="/collection">
            <Route index element={<Collection />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
