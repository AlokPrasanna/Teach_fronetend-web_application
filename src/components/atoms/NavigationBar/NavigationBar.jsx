import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({items}) => {
  return (
    <div className='px-10'>
        <nav>
            <ul className='flex items-center justify-center gap-5 font-semibold '>
                {items.length > 0 && items.map((item , index) => (
                    <li className='px-5 py-3 hover:border-b-2 hover:border-b-red-500' key={index}>
                        <Link  to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default NavigationBar