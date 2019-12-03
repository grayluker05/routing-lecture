import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () => (
    <div>
        <p>Contact Component</p>
        <Link to='/'><p>Home</p></Link>
        <Link to='/about'><p>About</p></Link>
    </div>
)

export default Contact;