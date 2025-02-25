import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="fixed top-0 left-0 w-full bg-yellow-200 shadow-md z-50">
          <nav className="whitespace-nowrap font-bold flex justify-between items-center p-4 max-w-7xl mx-auto">
            {/* Título */}
            <Link id='title' to="/home" className="text-4xl font-bold">Terço Online</Link>

            {/* Menu */}
            <ul className="flex items-center gap-x-6">
              <li className="flex items-center gap-x-2">
                <img className="h-5" src="./src/assets/Img/140133.png" alt="" />
                <Link to="/home/misterio" className="text-xl">Mistério do dia</Link>
              </li>
              <li>|</li>

              <li className="flex items-center gap-x-2">
                <img className="h-5" src="./src/assets/Img/140133.png" alt="" />
                <Link to="/home/leituras" className="text-xl">Leituras do dia</Link>
              </li>
              <li>|</li>

              <li className="flex items-center gap-x-2">
                <img className="h-5" src="./src/assets/Img/140133.png" alt="" />
                <Link to="/home/tutorial" className="text-xl">Como Rezar o Terço</Link>
              </li>
              <li>|</li>

              <li className="flex items-center gap-x-2">
                <img className="h-5" src="./src/assets/Img/140133.png" alt="" />
                <Link to="/home/oracoes" className="text-xl">Orações</Link>
              </li>
            </ul>
          </nav>
        </div>





    </>
  )
}

export default Header
