import React from 'react';
import {Link} from 'react-router-dom';

const About = () => (
    <div>
        <p>About Component</p>
        <Link to='/'><p>Home</p></Link>
        <Link to='/contact'><p>Contact</p></Link>
    </div>
)

export default About;