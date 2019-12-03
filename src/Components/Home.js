import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => (
    <div>
        <p>Home Component</p>
        <Link to='/about'><p>About</p></Link>
        <Link to='/contact'><p>Contact</p></Link>
        <Link to='/user/1'><p>Profile</p></Link>
    </div>
)

export default Home;