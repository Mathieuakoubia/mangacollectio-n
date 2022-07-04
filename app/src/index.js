import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Navbar from './js/component/Navbar';

ReactDOM.render(
<div className="app">
    <BrowserRouter>
        <Navbar />
        <AnimatedRoute />
        <Footer />
    </BrowserRouter>
</div>, document.getElementById('root'));
