
import React from 'react'

const Main = () => {
  return (
    <>
    <div>
  {/* Mensagem de Boas-Vindas */}
  <div className="flex flex-col items-center p-6 pt-15 bg-gradient-to-b from-stone-100 to-stone-400">
    <h1
      id="title2"
      className="text-3xl md:text-4xl font-serif font-bold text-gray-800 text-center pt-16 pb-6"
    >
      Bem-vindo ao Digital Sanctum
    </h1>

    <p className="text-center mt-4 w-[85%] md:w-[65%] text-sm md:text-base italic text-gray-600 leading-relaxed">
      Este espaço foi pensado para guiar você na oração do terço, trazendo os mistérios diários, a liturgia do dia e um passo a passo simples para sua prática. Aqui, você também encontra uma coleção de orações que enriquecem seus momentos de fé. Nosso desejo é crescer com você, trazendo novas ferramentas e recursos para aprofundar sua espiritualidade e torná-la ainda mais viva.
    </p>

    <div className="w-[85%] md:w-[65%] my-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

    <img
      src="img2/img-terco.jpg"
      alt="Imagem de um terço"
      className="mb-8 mt-4 w-full max-w-md h-auto rounded-lg shadow-xl"
    />
  </div>
</div>

    </>
  )
}

export default Main
