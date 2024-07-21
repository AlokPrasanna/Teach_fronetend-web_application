import React from 'react';
import { NavigationBar } from '../../atoms';
import { Images } from '../../../constant';

const Header = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        <div className=''>
            <img className='w-[80px] ml-10 p-2' src={Images.logo} alt='Logo' />
        </div>
        <div>
            <NavigationBar 
                items={[
                    {title:"Contact" , path:"/contact"},
                    {title:"About" , path:"/about"},
                    {title:"Register" , path:"/register"},
                    {title:"Login" , path:"/"},
                ]}
            />
        </div>
    </div>
  )
}

export default Header