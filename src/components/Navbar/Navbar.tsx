import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [activeItem, setActiveItem] = useState<string>('home');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <ul className="">
      <li
        className={` ${activeItem === 'home' ? 'text-primary' : ''}`}
        onClick={() => handleItemClick('home')}
      >
        <Link to="/home" className=""></Link>
      </li>
    </ul>
  );
};

export default Navbar;
