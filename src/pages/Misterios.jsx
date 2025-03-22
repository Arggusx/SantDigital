import React from 'react'

const Misterios = () => {
  return (
    <section className='md:bg-stone-400'>
        <div className="md:w-[80%] md:m-auto md:pt-16 pt-19 pb-20 md:pb-10 bg-gray-100">
            <div id='title2' className="bg-gradient-to-t to-gray-400 from-gray-100 via-gray-300 font-bold text-left text-3xl pl-5 pt-8 pb-3 text-gray-800 bg-gray-100 md:p-auto">
                Mistérios Diários
            </div>
            <hr className="text-gray-400 border-t-2 mt-7 w-[95%] m-auto rounded" />
            <h2 className='mt-5 text-lg md:text-sm font-semibold italic ml-10 text-center mr-10 mb-5'>Para rezar o terço corretamente, é importante saber qual mistério corresponde ao dia. Cada dia da semana tem um conjunto específico de mistérios que orientam a oração e a meditação. Confira abaixo os mistérios do dia e siga essa tradição para uma experiência mais completa e significativa.</h2>
            <hr className="text-gray-400 border-t-2 w-[95%] m-auto rounded" />
            <li id='gozosos' className='ml-5 mt-15 text-2xl md:text-xl font-bold'>Mistérios Gozosos (segundas e sábados, e nos domingos do Advento)</li>
                <ol className='ml-15 mt-4 gap-y-5 grid text-justify italic font-body text-sm list-decimal marker:font-bold leading-relaxed w-[80%] md:w-[40%]'>
                    <li>No primeiro mistério <strong>[Gozoso]</strong> contemplemos a Anunciação do Arcanjo São Gabriel à Nossa Senhora.</li>
                    <li>No segundo mistério <strong>[Gozoso]</strong> contemplemos a Visitação de Nossa Senhora à sua prima Santa Isabel.</li>
                    <li>No terceiro mistério <strong>[Gozoso]</strong> contemplemos o Nascimento do Menino Jesus em Belém.</li>
                    <li>No quarto mistério <strong>[Gozoso]</strong> contemplemos a Apresentação do Menino Jesus no templo e a Purificação de Nossa Senhora.</li>
                    <li>No quinto mistério <strong>[Gozoso]</strong> contemplemos a Perda e o Encontro do Menino Jesus no templo.</li>
                </ol>


            <li id='dolorosos' className='ml-5 mt-15 text-2xl md:text-xl font-bold'>Mistérios Dolorosos (terças e sextas-feiras, e domingos da Quaresma até a Páscoa)</li>
                <ol className='italic ml-15 mt-4 gap-y-5 grid text-justify  font-body text-sm list-decimal marker:font-bold leading-relaxed w-[80%] md:w-[40%]'>
                    <li>No primeiro mistério <strong>[Doloroso]</strong> contemplemos a Agonia de Cristo Nosso Senhor, quando suou sangue no Horto.</li>
                    <li>No segundo mistério <strong>[Doloroso]</strong> contemplemos a Flagelação de Jesus Cristo atado à coluna.</li>
                    <li>No terceiro mistério <strong>[Doloroso]</strong> contemplemos a Coroação de espinho de Nosso Senhor.</li>
                    <li>No quarto mistério <strong>[Doloroso]</strong> contemplemos Jesus Cristo carregando a Cruz para o Calvário.</li>
                    <li>No quinto mistério <strong>[Doloroso]</strong> contemplemos a Crucificação e morte de Nosso Senhor Jesus Cristo.</li>
                </ol>

            <li id='luminosos' className='ml-5 mt-10 text-2xl md:text-xl font-bold'>Mistérios Luminosos (quinta-feira)</li>
                <ol className='italic ml-15 mt-4 gap-y-5 grid text-justify font-body text-sm list-decimal marker:font-bold leading-relaxed w-[80%] md:w-[40%]'>
                    <li>No primeiro mistério <strong>[Luminoso]</strong> contemplemos o Batismo de Jesus no rio Jordão.</li>
                    <li>No segundo mistério <strong>[Luminoso]</strong> contemplemos a Auto-revelação de Jesus nas Bodas de Caná.</li>
                    <li>No terceiro mistério <strong>[Luminoso]</strong> contemplemos o Anúncio do Reino de Deus.</li>
                    <li>No quarto mistério <strong>[Luminoso]</strong> contemplemos a Transfiguração de Jesus.</li>
                    <li>No quinto mistério <strong>[Luminoso]</strong> contemplemos a Instituição da Eucaristia.</li>
                </ol>

            <li id='gloriosos' className='ml-5 mt-10 text-2xl md:text-xl font-bold'>Mistérios Gloriosos (quartas-feiras e domingos da Páscoa até o Advento)</li>
                <ol className='italic gap-y-5 grid ml-15 mt-4 text-justify  font-body text-sm list-decimal marker:font-bold leading-relaxed w-[80%] md:w-[40%]'>
                    <li>No primeiro mistério <strong>[Glorioso]</strong> contemplemos a Ressurreição de Cristo Nosso Senhor.</li>
                    <li>No segundo mistério <strong>[Glorioso]</strong> contemplemos a Ascensão de Nosso Senhor ao Céu.</li>
                    <li>No terceiro mistério <strong>[Glorioso]</strong> contemplemos a Vinda do Espírito Santo sobre os Apóstolos reunidos com Maria Santíssima no Cenáculo em Jerusalém.</li>
                    <li>No quarto mistério <strong>[Glorioso]</strong> contemplemos a Assunção de Nossa Senhora ao Céu.</li>
                    <li>No quinto mistério <strong>[Glorioso]</strong> contemplemos a Coroação de Nossa Senhora no Céu como Rainha de todos os anjos e santos.</li>
                </ol>
        </div>
    </section>    
  )
}

export default Misterios
