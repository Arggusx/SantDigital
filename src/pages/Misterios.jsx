import React from 'react'

const Misterios = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen pt-7">
  <div className="w-[90%] md:w-[80%] mx-auto pb-16 md:pt-16 md:pb-20 bg-white shadow-lg rounded-lg">
    {/* Título Principal */}
    <div
      id="title2"
      className="bg-gradient-to-r from-gray-100 to-blue-100 text-3xl md:text-4xl font-serif font-bold text-gray-800 pl-6 pt-6 pb-4"
    >
      Mistérios Diários
    </div>

    {/* Divisor Estilizado */}
    <div className="w-[95%] mx-auto my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

    {/* Introdução */}
    <h2 className="text-lg md:text-base font-sans italic text-gray-600 text-center mx-6 md:mx-10 mb-8 leading-relaxed">
      Para rezar o terço corretamente, é importante saber qual mistério corresponde ao dia. Cada dia da semana tem um conjunto específico de mistérios que orientam a oração e a meditação. Confira abaixo os mistérios do dia e siga essa tradição para uma experiência mais completa e significativa.
    </h2>

    {/* Divisor Estilizado */}
    <div className="w-[95%] mx-auto my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

    {/* Mistérios Gozosos */}
    <div className="px-6">
      <li
        id="gozosos"
        className="text-2xl md:text-xl font-serif font-bold text-green-700 mt-10"
      >
        Mistérios Gozosos (segundas e sábados, e nos domingos do Advento)
      </li>
      <ol className="ml-8 mt-4 gap-y-4 grid text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-green-600 leading-relaxed md:w-[60%]">
        <li>No primeiro mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Anunciação do Arcanjo São Gabriel à Nossa Senhora.</li>
        <li>No segundo mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Visitação de Nossa Senhora à sua prima Santa Isabel.</li>
        <li>No terceiro mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos o Nascimento do Menino Jesus em Belém.</li>
        <li>No quarto mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Apresentação do Menino Jesus no templo e a Purificação de Nossa Senhora.</li>
        <li>No quinto mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Perda e o Encontro do Menino Jesus no templo.</li>
      </ol>
    </div>

    {/* Mistérios Dolorosos */}
    <div className="px-6">
      <li
        id="dolorosos"
        className="text-2xl md:text-xl font-serif font-bold text-red-800 mt-12"
      >
        Mistérios Dolorosos (terças e sextas-feiras, e domingos da Quaresma até a Páscoa)
      </li>
      <ol className="ml-8 mt-4 gap-y-4 grid text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-red-700 leading-relaxed  md:w-[60%]">
        <li>No primeiro mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto.</li>
        <li>No segundo mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos a Flagelação de Jesus Cristo atado à coluna.</li>
        <li>No terceiro mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos a Coroação de espinhos de Nosso Senhor.</li>
        <li>No quarto mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos Jesus Cristo carregando a Cruz para o Calvário.</li>
        <li>No quinto mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos a Crucificação e morte de Nosso Senhor Jesus Cristo.</li>
      </ol>
    </div>

    {/* Mistérios Luminosos */}
    <div className="px-6">
      <li
        id="luminosos"
        className="text-2xl md:text-xl font-serif font-bold text-yellow-700 mt-12"
      >
        Mistérios Luminosos (quinta-feira)
      </li>
      <ol className="ml-8 mt-4 gap-y-4 grid text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-yellow-600 leading-relaxed md:w-[60%]">
        <li>No primeiro mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos o Batismo de Jesus no rio Jordão.</li>
        <li>No segundo mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos a Auto-revelação de Jesus nas Bodas de Caná.</li>
        <li>No terceiro mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos o Anúncio do Reino de Deus.</li>
        <li>No quarto mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos a Transfiguração de Jesus.</li>
        <li>No quinto mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos a Instituição da Eucaristia.</li>
      </ol>
    </div>

    {/* Mistérios Gloriosos */}
    <div className="px-6">
      <li
        id="gloriosos"
        className="text-2xl md:text-xl font-serif font-bold text-blue-700 mt-12"
      >
        Mistérios Gloriosos (quartas-feiras e domingos da Páscoa até o Advento)
      </li>
      <ol className="ml-8 mt-4 gap-y-4 grid text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-blue-600 leading-relaxed md:w-[60%]">
        <li>No primeiro mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Ressurreição de Cristo Nosso Senhor.</li>
        <li>No segundo mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Ascensão de Nosso Senhor ao Céu.</li>
        <li>No terceiro mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Vinda do Espírito Santo sobre os Apóstolos reunidos com Maria Santíssima no Cenáculo em Jerusalém.</li>
        <li>No quarto mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Assunção de Nossa Senhora ao Céu.</li>
        <li>No quinto mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Coroação de Nossa Senhora no Céu como Rainha de todos os anjos e santos.</li>
      </ol>
    </div>
  </div>
</section> 
  )
}

export default Misterios
