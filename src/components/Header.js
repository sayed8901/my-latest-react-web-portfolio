import React from 'react';

const Header = () => {
  
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>

        {/* logo */}
        <a href="#" className="text-[30px] font-bold leading-[0.8]">
        <span className="text-gradient">Sayed</span> Hossain
        </a>

        {/* btn */}
        <button className='btn btn-sm'>Resume</button>
      </div>
    </div>
  </header>;
};

export default Header;
