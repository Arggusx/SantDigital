import imgTerco1 from '../assets/Img/img-terco.jpg';
import React from 'react'

const Main = () => {
  return (
    <>
    <div>
        {/* Mensagem de Boas-Vindas */}
        <div className='mt-5 flex flex-col items-center p-4'>
            <h1 className='text-2xl font-bold text-center pt-20'>Bem-vindo ao Digital Sanctum</h1>
            <p className='text-white-700 text-center mt-2 max-w-xl border-2 border-yellow-400 rounded-lg pt-10 pb-10 '>
                Este site foi criado para ajudar você a rezar o Terço, oferecendo orientações sobre os mistérios do dia,  liturgias atualizadas todos o dias, além disso o site conta com uma lista completa de várias orações, para o caso de voçe deixar suas orações mais 
                completas. Possivelmente, no futuro iremos adicionar mais recursos se necessário.
            </p>
            <img src={imgTerco1} alt='' className='mb-5 mt-4 w-120 h-auto rounded-lg shadow-md' />
            <hr className="text-yellow-400 border-2 my-7 w-full rounded" />
        </div>

        
    </div>

    </>
  )
}

export default Main
