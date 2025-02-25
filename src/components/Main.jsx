import imgTerco1 from '../assets/Img/img-terco.jpg';
import React from 'react'

const Main = () => {
  return (
    <>
    <div>
        {/* Mensagem de Boas-Vindas */}
        <div className='mt-5 flex flex-col items-center p-4'>
            <h1 className='text-2xl font-bold text-center pt-20'>Bem-vindo ao Terço Online</h1>
            <p className='text-white-700 text-center mt-2 max-w-xl'>
                Este site foi criado para ajudar você a rezar o Terço, oferecendo orientações
                sobre os mistérios do dia, leituras diárias e um tutorial para quem está aprendendo.
            </p>
            <img src={imgTerco1} alt='' className='mb-5 mt-4 w-120 h-auto rounded-lg shadow-md' />
            <hr className="pl-4 border-t-3 border-red-400 my-7 w-full rounded" />
        </div>

        
    </div>

    </>
  )
}

export default Main
