import React from 'react';
import Logo from "./Logo";


const NavBar = () => {
    return (
        <div>
            
            <nav className='flex m-3 max-w-full space-x-24'>
                <div className="justify-start">
                    <Logo />
                </div>
                <div>
                    <ul className='flex grow-1 mt-4 ml-20 mr-10 text-center'>
                        <li className='p-1 pl-6'>
                            Model S
                        </li>
                        <li className='p-1 pl-6'>
                            Model 3
                        </li>
                        <li className='p-1 pl-6'>
                            Model X
                        </li>
                        <li className='p-1 pl-6'>
                            Model Y
                        </li>
                        <li className='p-1 pl-6'>
                            Solar Roof
                        </li>
                        <li className='p-1 pl-6'>
                            Solar Panels
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className='flex mt-4 ml-20'>
                        <li className='p-1 pl-8' >
                            Shop
                        </li>

                        <li className='p-1 pl-8'>
                            Account
                        </li>
                        <li className='p-1 pl-8'>
                            Menu
                        </li>
                    </ul>
                </div>
            </nav>
            
        </div>
    );
}

export default NavBar;