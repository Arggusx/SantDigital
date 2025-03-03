import imgTerco1 from '../assets/Img/img-terco.jpg';
import React from 'react'

const Main = () => {
  return (
    <>
    <div>
        {/* Mensagem de Boas-Vindas */}
        <div className='mt-5 flex flex-col items-center p-4'>
            <h1 id='title2' className='text-4xl font-bold text-center pt-20'>Bem-vindo ao Digital Sanctum</h1>
            <p className='text-white-700 text-center mt-2 max-w-xl  pt-10 pb-10 italic text-gray-600'>
              <hr className="text-yellow-400 border-2 mb-5 w-full rounded" />
                Este site foi criado para ajudar quem deseja aprender a rezar o terço, oferecendo orientações sobre os mistérios do dia, 
                a liturgia diária e um guia detalhado para cada etapa da oração. Além disso, disponibiliza uma lista completa de diversas 
                orações para tornar seus momentos de fé mais significativos. No futuro, planejamos adicionar novos recursos e 
                funcionalidades para enriquecer ainda mais sua experiência de oração e espiritualidade.
                <hr className="text-yellow-400 border-2 mt-5 w-full rounded" />  
            </p>
            <img src={imgTerco1} alt='' className='mb-5 mt-4 w-120 h-auto rounded-lg shadow-md' />
            <hr className="text-yellow-400 border-2 my-7 w-full rounded" />
        </div>

        
    </div>

    </>
  )
}

export default Main
