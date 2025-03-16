import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <div className="w-full bg-yellow-100 shadow-md z-50">
      <nav className="flex flex-row font-bold justify-between items-center p-6 w-full mx-auto">
        {/* Título */}
        <Link id="title" to="/"  className="text-xl">Digital Sanctum</Link>

        {/* Botão de menu (mobile) */}
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
        className={`hover:cursor-pointer fixed top-0 right-0 h-full bg-yellow-100 shadow-lg transition-transform duration-300 ease-in-out md:hidden 
        ${menuOpen ? "translate-x-0 w-auto max-w-sm" : "translate-x-full w-40 overflow-hidden"}`}
        ref={menuRef}
      >
        {/* Botão de fechar dentro do menu */}
        <button className="absolute top-4 left-4" onClick={() => setMenuOpen(false)}>
          <X className='hover:cursor-pointer' size={24} />
        </button>

        {/* Itens do menu */}
        <ul className=" flex flex-col gap-y-4 mt-12 p-4">
          {menuItems()}
        </ul>
      </div>
    </div>
  );
};

const menuItems = () => (
  <>
    <li id='menuNav' className="flex items-center gap-x-2">
      <Link 
          id='title-nav1' 
          onClick={() => setMenuOpen(false)} 
          to="/home/misterio" 
          className="text-xl border-2 border-amber-500 bg-stone-100 rounded-3xl px-4 py-1">
        Mistérios
      </Link>
    </li>
    <li className='hidden md:block'>|</li>

    <li id='menuNav' className="flex items-center gap-x-2">
      <Link
            id='title-nav2'
            className="text-xl border-2 border-amber-500 bg-stone-100 rounded-3xl px-4 py-1"
            onClick={() => setMenuOpen(false)} 
            to="/home/leituras">
        Leituras
      </Link> 
    </li>
    <li className='hidden md:block'>|</li>

    <li id='menuNav' className="flex items-center gap-x-2">
      <Link 
          id='title-nav3'
          className="text-xl border-2 border-amber-500 bg-stone-100 rounded-3xl px-4 py-1" 
          to="/home/tutorial" 
          onClick={() => setMenuOpen(false)}>
        Terço
      </Link>
    </li>
    <li className='hidden md:block'>|</li>

    <li id='menuNav' className="flex items-center gap-x-2 lg:mr-20 mr-5">
      <Link 
          id='title-nav4'
          className="text-xl border-2 border-amber-500 bg-stone-100 rounded-3xl px-4 py-1" 
          to="/home/oracoes" 
          onClick={() => setMenuOpen(false)}>
        Orações
        </Link>
    </li>
  </>
);

export default Header
