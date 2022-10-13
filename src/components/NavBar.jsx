import React from 'react';
import Logo from "./Logo";


const NavBar = () => {
    return (
        <div>
            
            <nav className='flex md:grow-0 space-x-20'>
                <div className="flex">
                    <Logo />
                </div>
                <div className='flex space-x-20'>
                    <ul className='flex'>
                        <li>
                            Model S
                        </li>
                        <li>
                            Model 3
                        </li>
                        <li>
                            Model X
                        </li>
                        <li>
                            Model Y
                        </li>
                        <li>
                            Solar Roof
                        </li>
                        <li>
                            Solar Panels
                        </li>
                    </ul>
                </div>

                <div className='flex flex-end'>
                    <ul className='flex'>
                        <li>
                            Shop
                        </li>

                        <li>
                            Account
                        </li>
                        <li>
                            Menu
                        </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    );
}

export default NavBar;