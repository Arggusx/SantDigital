import React from 'react'
import MisteriosCard from '../components/MisteriosCard'

const Misterios = () => {
  return (

    <main className="max-w-4xl mx-auto py-8 md:py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-cursive text-amber-800 md:mt-15 mt-20 mb-4 italic">Mistérios Diários</h1>
        <p className="text-md md:text-xl text-amber-700 mb-8">Para rezar o terço corretamente, é importante saber qual mistério corresponde ao dia. Cada dia da semana tem um conjunto específico de mistérios que orientam a oração e a meditação. Confira abaixo os mistérios do dia e siga essa tradição para uma experiência mais completa e significativa.</p>
        <div className="w-24 h-1 bg-amber-300 mx-auto mb-12"></div>
      </section>
      <div className="w-full mx-auto flex gap-10 flex-col">

        {/* Mistérios Gozosos */}
        <div className='hidden md:block'>
          <div className="relative pl-4 py-4 rounded-md bg-green-200 border-l-[3px] border-green-600 shadow-sm hover:shadow-md transition-shadow flex items-center pr-5">
            <div>
              <div
                id="gozosos"
                className="text-2xl md:text-xl font-serif font-bold text-green-700"
              >
                Mistérios Gozosos (segundas e sábados, e nos domingos do Advento)
              </div>
              <ol className="ml-8 mt-4 gap-y-4 grid text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-green-600 leading-relaxed md:w-[80%]">
                <li>No primeiro mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Anunciação do Arcanjo São Gabriel à Nossa Senhora.</li>
                <li>No segundo mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Visitação de Nossa Senhora à sua prima Santa Isabel.</li>
                <li>No terceiro mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos o Nascimento do Menino Jesus em Belém.</li>
                <li>No quarto mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Apresentação do Menino Jesus no templo e a Purificação de Nossa Senhora.</li>
                <li>No quinto mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Perda e o Encontro do Menino Jesus no templo.</li>
              </ol>
            </div>
            <div>
              <img className='h-100 w-100 rounded-2xl hidden md:block' src="/img2/gozosos.jpg" alt="Misterios Gozosos" />
            </div>
          </div>
        </div>

        {/* Mistérios Dolorosos */}
        <div className='hidden md:block'>
          <div className="relative pl-4 py-4 rounded-md bg-red-100 border-l-[3px] border-red-600 shadow-sm hover:shadow-md transition-shadow flex items-center pr-5">
            <div>
              <div
                id="dolorosos"
                className="text-2xl md:text-xl font-serif font-bold text-red-800"
              >
                Mistérios Dolorosos (terças e sextas-feiras, e domingos da Quaresma até a Páscoa)
              </div>
              <ol className="ml-8 mt-4 gap-y-4 grid text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-red-700 leading-relaxed  md:w-[80%]">
                <li>No primeiro mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto.</li>
                <li>No segundo mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos a Flagelação de Jesus Cristo atado à coluna.</li>
                <li>No terceiro mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos a Coroação de espinhos de Nosso Senhor.</li>
                <li>No quarto mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos Jesus Cristo carregando a Cruz para o Calvário.</li>
                <li>No quinto mistério <strong className="text-red-700">[Doloroso]</strong> contemplemos a Crucificação e morte de Nosso Senhor Jesus Cristo.</li>
              </ol>
            </div>
            <div>
              <img className='h-90 w-90 rounded-2xl hidden md:block' src="/img2/dolorosos.jpg" alt="Misterios Dolorosos" />
            </div>
          </div>
        </div>

        {/* Mistérios Luminosos */}
        <div className='hidden md:block'>
          <div className="relative pl-4 py-4 rounded-md bg-yellow-100 border-l-[3px] border-yellow-600 shadow-sm hover:shadow-md transition-shadow flex items-center pr-5">
            <div>
              <div
                id="luminosos"
                className="text-2xl md:text-xl font-serif font-bold text-yellow-700"
              >
                Mistérios Luminosos (quinta-feira)
              </div>
              <ol className="ml-8 mt-4 gap-y-4 grid text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-yellow-600 leading-relaxed md:w-[80%]">
                <li>No primeiro mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos o Batismo de Jesus no rio Jordão.</li>
                <li>No segundo mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos a Auto-revelação de Jesus nas Bodas de Caná.</li>
                <li>No terceiro mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos o Anúncio do Reino de Deus.</li>
                <li>No quarto mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos a Transfiguração de Jesus.</li>
                <li>No quinto mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos a Instituição da Eucaristia.</li>
              </ol>
            </div>
            <div>
              <img className='h-80 w-75 rounded-2xl hidden md:block' src="\img2\luminosos.png" alt="Misterios Luminosos" />
            </div>
          </div>
        </div>

        {/* Mistérios Gloriosos */}
        <div className='hidden md:block'>
          <div className="relative pl-4 py-4 rounded-md bg-blue-100 border-l-[3px] border-blue-600 shadow-sm hover:shadow-md transition-shadow flex items-center pr-5">
            <div>
              <div
                id="gloriosos"
                className="text-2xl md:text-xl font-serif font-bold text-blue-600"
              >
                Mistérios Gloriosos (quartas-feiras e domingos da Páscoa até o Advento)
              </div>
              <ol className="ml-8 mt-4 gap-y-4 grid text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-blue-600 leading-relaxed md:w-[80%]">
                <li>No primeiro mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Ressurreição de Cristo Nosso Senhor.</li>
                <li>No segundo mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Ascensão de Nosso Senhor ao Céu.</li>
                <li>No terceiro mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Vinda do Espírito Santo sobre os Apóstolos reunidos com Maria Santíssima no Cenáculo em Jerusalém.</li>
                <li>No quarto mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Assunção de Nossa Senhora ao Céu.</li>
                <li>No quinto mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Coroação de Nossa Senhora no Céu como Rainha de todos os anjos e santos.</li>
              </ol>
            </div>
            <div>
              <img className='h-100 w-115 rounded-2xl hidden md:block' src="\img2\gloriosos.jpg" alt="Misterios Gloriosos" />
            </div>
          </div>
        </div>

        {/* Versão Mobile Mistérios Luminosos */}

        <div className='md:hidden block'>
          <MisteriosCard
            buttonClass="w-[90%] py-4 flex justify-between bg-background p-4 font-bold text-primary uppercase shadow-md transition-all text-sm text-gray-800 text-xs text-gray-800 border-l-[3px] border-green-300 bg-green-300"
            contentClass="relative pl-4 py-4 bg-green-100 border-[3px] border-green-300 flex items-center pr-5 w-[90%]"
            childrenClass="ml-5 gap-y-4 grid text-left text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-green-600 leading-relaxed md:w-[80%]"
            title="Mistérios Gozosos (segundas e sábados, e nos domingos do Advento)" >
            <li>No primeiro mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Anunciação do Arcanjo São Gabriel à Nossa Senhora.</li>
            <li>No segundo mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Visitação de Nossa Senhora à sua prima Santa Isabel.</li>
            <li>No terceiro mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos o Nascimento do Menino Jesus em Belém.</li>
            <li>No quarto mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Apresentação do Menino Jesus no templo e a Purificação de Nossa Senhora.</li>
            <li>No quinto mistério <strong className="text-green-600">[Gozoso]</strong> contemplemos a Perda e o Encontro do Menino Jesus no templo.</li>
          </MisteriosCard>
        </div>

        <div className='md:hidden block'>
          <MisteriosCard
            buttonClass="w-[90%] py-4 flex justify-between bg-background p-4 font-bold text-primary uppercase shadow-md transition-all text-sm text-gray-800 text-xs text-gray-800 border-l-[3px] border-red-300 bg-red-300"
            contentClass="relative pl-4 py-4 bg-red-100 border-[3px] border-red-300 flex items-center pr-5 w-[90%]"
            childrenClass="ml-5 gap-y-4 grid text-left text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-red-600 leading-relaxed md:w-[80%]"
            title="Mistérios Dolorosos (terças, sextas-feiras, e domingos da Quaresma à Páscoa)" >
            <li>No primeiro mistério <strong className="text-red-600">[Doloroso]</strong> contemplemos a Anunciação do Arcanjo São Gabriel à Nossa Senhora.</li>
            <li>No segundo mistério <strong className="text-red-600">[Doloroso]</strong> contemplemos a Visitação de Nossa Senhora à sua prima Santa Isabel.</li>
            <li>No terceiro mistério <strong className="text-red-600">[Doloroso]</strong> contemplemos o Nascimento do Menino Jesus em Belém.</li>
            <li>No quarto mistério <strong className="text-red-600">[Doloroso]</strong> contemplemos a Apresentação do Menino Jesus no templo e a Purificação de Nossa Senhora.</li>
            <li>No quinto mistério <strong className="text-red-600">[Doloroso]</strong> contemplemos a Perda e o Encontro do Menino Jesus no templo.</li>
          </MisteriosCard>
        </div>

        <div className='md:hidden block'>
          <MisteriosCard
            buttonClass="w-[90%] py-5 flex justify-between bg-background p-4 font-bold text-primary uppercase shadow-md transition-all text-sm text-gray-800 text-xs text-gray-800 border-l-[3px] border-yellow-200 bg-yellow-200"
            contentClass="relative pl-4 py-4 bg-yellow-100 border-[3px] border-yellow-200 flex items-center pr-5 w-[90%]"
            childrenClass="ml-5 gap-y-4 grid text-left text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-yellow-600 leading-relaxed md:w-[80%]"
            title="Mistérios Luminosos (quinta-feira)" >
            <li>No primeiro mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos o Batismo de Jesus no rio Jordão.</li>
            <li>No segundo mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos a Auto-revelação de Jesus nas Bodas de Caná.</li>
            <li>No terceiro mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos o Anúncio do Reino de Deus.</li>
            <li>No quarto mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos a Transfiguração de Jesus.</li>
            <li>No quinto mistério <strong className="text-yellow-600">[Luminoso]</strong> contemplemos a Instituição da Eucaristia.</li>
          </MisteriosCard>
        </div>

        <div className='md:hidden block'>
          <MisteriosCard
            buttonClass="py-5 w-[90%] flex justify-between bg-background p-4 font-bold text-primary uppercase shadow-md text-xs text-gray-800 transition-all border-l-[3px] border-blue-300 bg-blue-300"
            contentClass="relative pl-4 py-4 bg-blue-100 border-[3px] border-blue-300 flex items-center pr-5 w-[90%]"
            childrenClass="ml-5 gap-y-4 grid text-left text-sm md:text-base font-sans italic text-gray-700 list-decimal marker:font-bold marker:text-blue-600 leading-relaxed md:w-[80%]"
            title="Mistérios Gloriosos (quartas-feiras e domingos da Páscoa até o Advento)" >
            <li>No primeiro mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Anunciação do Arcanjo São Gabriel à Nossa Senhora.</li>
            <li>No segundo mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Visitação de Nossa Senhora à sua prima Santa Isabel.</li>
            <li>No terceiro mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos o Nascimento do Menino Jesus em Belém.</li>
            <li>No quarto mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Apresentação do Menino Jesus no templo e a Purificação de Nossa Senhora.</li>
            <li>No quinto mistério <strong className="text-blue-600">[Glorioso]</strong> contemplemos a Perda e o Encontro do Menino Jesus no templo.</li>
          </MisteriosCard>
        </div>

      </div>
    </main>
  )
}

export default Misterios
