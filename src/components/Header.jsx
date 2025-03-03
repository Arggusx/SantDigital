import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Icon from '../assets/Img/140133.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="w-full bg-yellow-200 shadow-md z-50">
      <nav className="flex flex-row font-bold justify-between items-center p-4 w-full mx-auto">
        {/* Título */}
        <Link id="title" to="/" className=" text-xl font-bold">Digital Sanctum</Link>

        {/* Botão de menu hambúrguer (aparece só no mobile) */}
        <button 
          className="md:hidden p-2 rounded focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu className='hover:cursor-pointer' size={28} />}
        </button>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex items-center gap-x-6">
          {menuItems()}
        </ul>
      </nav>

      {/* Menu lateral (mobile) */}
      <div 
        className={`hover: fixed top-0 right-0 h-full bg-yellow-100 shadow-lg transition-transform duration-300 ease-in-out md:hidden 
        ${menuOpen ? "translate-x-0 w-auto max-w-sm" : "translate-x-full w-40 overflow-hidden"}`}
        ref={menuRef}
      >
        {/* Botão de fechar dentro do menu */}
        <button className="absolute top-4 left-4" onClick={() => setMenuOpen(false)}>
          <X className='hover:cursor-pointer' size={24} />
        </button>

        {/* Itens do menu */}
        <ul className="flex flex-col gap-y-4 mt-12 p-4">
          {menuItems()}
        </ul>
      </div>
    </div>
  );
};
//-----------------------------------------------------------------
const menuItems = () => (
  <>
    <li className="flex items-center gap-x-2">
      <img className="h-5" src={Icon} alt="" />
      <Link 
          id='title-nav1' 
          onClick={() => setMenuOpen(false)} 
          to="/home/misterio" 
          className="text-xl">
        Mistérios
      </Link>
    </li>
    <li className='hidden md:block'>|</li>

    <li className="flex items-center gap-x-2">
      <img className="h-5" src={Icon} alt="" />
      <Link
            id='title-nav2'
            className="text-xl" Liturgia
            onClick={() => setMenuOpen(false)} 
            to="/home/leituras">
        Leituras
      </Link> 
    </li>
    <li className='hidden md:block'>|</li>

    <li className="flex items-center gap-x-2">
      <img className="h-5" src={Icon} alt="" />
      <Link 
          id='title-nav3'
          className="text-xl" 
          to="/home/tutorial" 
          onClick={() => setMenuOpen(false)}>
        Rezar o Terço
      </Link>
    </li>
    <li className='hidden md:block'>|</li>

    <li className="flex items-center gap-x-2 lg:mr-20 mr-5">
      <img className="h-5" src={Icon} alt="" />
      <Link 
          id='title-nav4'
          className="text-xl" 
          to="/home/oracoes" 
          onClick={() => setMenuOpen(false)}>
        Orações
        </Link>
    </li>
  </>
);

export default Header
