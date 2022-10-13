import React from 'react';
import logo from './assets/tesla.svg';

const Logo = () => {
    return (
        <div>
            <img className='h-10 w-20 md-3' src={logo} alt='logo' />
        </div>
    );
}

export default Logo;