import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Mac from '../Pages/Mac/Mac';
import Iphone from '../Pages/Iphone/iphone';
import Ipad from '../Pages/Ipad/Ipad';
import Productpage from '../Pages/Productpage/Productpage';
import Watch from '../Pages/Watch/Watch';
import TV from '../Pages/TV/TV';
import Music from '../Pages/Music/Music';
import Support from '../Pages/Support/Support';
import Cart from '../Pages/Cart/Cart';
import Search from '../Pages/Search/Search';
import Four04 from '../Pages/Four04/Four04';

function MyRouting() {
    return (
        <nav className="outer_wrapper">
            <div className="Head">
                <Nav />
            </div>
            <div className='Routes_wrapper'>
                <Router>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/mac" element={<Mac />} />
                        <Route path="/iphone" element={<Iphone />} />
                        <Route path="/iphone/:pid" element={<Productpage />} />
                        <Route path="/ipad" element={<Ipad />} />
                        <Route path="/watch" element={<Watch />} />
                        <Route path="/tv/" element={<TV />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Four04 />} />
                    </Routes>
                </Router>
            </div>
            <div className="Foot">
                <Footer />
            </div>
        </nav>

    );
}

export default MyRouting;