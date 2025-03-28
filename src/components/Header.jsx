import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import iconHeader from '/img2/christianity.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  // Fechar o menu quando clicar fora dele

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
    <>
  <div className="fixed w-full z-50 bg-gradient-to-t from-yellow-50 to-yellow-200 shadow-lg">
    <nav className="flex flex-row font-bold justify-between items-center px-6 py-4 mx-auto max-w-7xl">

      <Link
        id="title"
        to="/"
        className="text-base md:text-lg font-serif text-gray-800 flex items-center gap-2 hover:text-gray-600 transition-colors duration-200"
      >
        <img className='w-15 h-15 opacity-50 border-2 rounded-full p-1' src={iconHeader} alt="" />
        
        Digital Sanctum
      </Link>

      {/* Botão de menu (mobile) */}
      <button
        className="md:hidden p-2 rounded-full hover:bg-yellow-300 focus:outline-none transition-colors duration-200"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu className="hover:cursor-pointer" size={28} />}
      </button>

      {/* Menu (desktop) */}
      <ul className="hidden md:flex items-center gap-x-8">
        {menuItems()}
      </ul>
    </nav>

    {/* Menu lateral (mobile) */}
    <div
      className={`fixed top-0 right-0 h-full bg-yellow-100 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
        menuOpen ? "translate-x-0 w-64" : "translate-x-full w-0 overflow-hidden"
      }`}
      ref={menuRef}
    >
      {/* Botão de fechar */}
      <button
        className="absolute top-4 left-4 p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        onClick={() => setMenuOpen(false)}
      >
        <X className="hover:cursor-pointer" size={24} />
      </button>

      {/* Itens do menu */}
      <ul className="flex flex-col gap-y-6 mt-16 p-6">
        {menuItems()}
      </ul>
    </div>
  </div>
</>
  );
};

const menuItems = () => (
  <>
    <li id="menuNav" className="flex items-center">
      <Link
        id="title-nav1"
        onClick={() => setMenuOpen(false)}
        to="/home/misterio"
        className="text-sm md:text-base border-2 border-amber-600 bg-stone-50 rounded-xl px-4 py-1 text-gray-800 hover:bg-amber-100 hover:shadow-md transition-all duration-200"
      >
        Mistérios
      </Link>
    </li>

    <li id="menuNav" className="flex items-center">
      <Link
        id="title-nav2"
        onClick={() => setMenuOpen(false)}
        to="/home/leituras"
        className="text-sm md:text-base border-2 border-amber-600 bg-stone-50 rounded-xl px-4 py-1 text-gray-800 hover:bg-amber-100 hover:shadow-md transition-all duration-200"
      >
        Leituras
      </Link>
    </li>

    <li id="menuNav" className="flex items-center">
      <Link
        id="title-nav3"
        onClick={() => setMenuOpen(false)}
        to="/home/tutorial"
        className="text-sm md:text-base border-2 border-amber-600 bg-stone-50 rounded-xl px-4 py-1 text-gray-800 hover:bg-amber-100 hover:shadow-md transition-all duration-200"
      >
        Terço
      </Link>
    </li>

    <li id="menuNav" className="flex items-center pr-5 md:pr-0">
      <Link
        id="title-nav4"
        onClick={() => setMenuOpen(false)}
        to="/home/oracoes"
        className="text-sm md:text-base border-2 border-amber-600 bg-stone-50 rounded-xl px-4 py-1 text-gray-800 hover:bg-amber-100 hover:shadow-md transition-all duration-200"
      >
        Orações
      </Link>
    </li>
  </>
);

export default Header
