import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hamburger from '../../assets/icons/components/Header/hamburger.svg';
import devlogo from '../../assets/logos/devlogo.svg';
import HamburgerBar from './HamburgerBar';

const Header = () => {
  const navigate = useNavigate();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header className="flex justify-center items-center w-full h-[56px] bg-black">
      <div className="flex items-center justify-between w-[335px] h-[34px]">
        <img src={devlogo} alt="devlogo" className="w-[77px] h-[32px] cursor-pointer" onClick={() => navigate('/')}/>
        <img
          src={hamburger}
          alt="hamburger"
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={() => setHamburgerOpen(true)}
        />
      </div>

      <HamburgerBar isOpen={hamburgerOpen} onClose={() => setHamburgerOpen(false)} />
    </header>
  );
};

export default Header;
