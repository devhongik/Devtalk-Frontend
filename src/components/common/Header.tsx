import { useState } from 'react';
import hamburger from '../../assets/icons/components/Header/hamburger.svg';
import devlogo from '../../assets/logos/devlogo.svg';
import HamburgerBar from './HamburgerBar';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header className="relative flex justify-center items-center w-full h-[56px] bg-black">
      <div className="flex items-center justify-between w-[335px] h-[34px]">
        <img src={devlogo} alt="devlogo" className="w-[77px] h-[32px]" />
        <img
          src={hamburger}
          alt="hamburger"
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={() => setHamburgerOpen((prev) => !prev)}
        />
      </div>

      {hamburgerOpen && <HamburgerBar onClose={() => setHamburgerOpen(false)} />}
    </header>
  );
};

export default Header;
