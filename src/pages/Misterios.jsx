import React from 'react'

const Misterios = () => {
  return (
    <div className="p-4">
        <h1 id='title2' className="text-4xl text-amber-400 font-bold mt-10 ml-5 underline underline-offset-7 pt-20">Mistérios Diários</h1>
        <hr className="text-yellow-400 border-2 mt-7 w-full rounded" />
        <h2 className='mt-5 text-2xl font-semibold italic ml-10 mr-10 text-center mb-5'>Para rezar o terço corretamente, é importante saber qual mistério corresponde ao dia. Cada dia da semana tem um conjunto específico de mistérios que orientam a oração e a meditação. Confira abaixo os mistérios do dia e siga essa tradição para uma experiência mais completa e significativa.</h2>
        <hr className="text-yellow-400 border-2 mb-5 w-full rounded" />
        <li id='gozosos' className='ml-5 mt-15 text-xl font-bold'>Mistérios Gozosos (segundas e sábados, e nos domingos do Advento)</li>
            <ol className='ml-20 mt-4 italic font-body text-lg list-decimal marker:font-bold'>
                <li>No primeiro mistério contemplemos a Anunciação <br /> do Arcanjo São Gabriel à Nossa Senhora.</li>
                <li>No segundo mistério contemplemos a Visitação <br /> de Nossa Senhora à sua prima Santa Isabel.</li>
                <li>No terceiro mistério contemplemos o Nascimento <br /> do Menino Jesus em Belém.</li>
                <li>No quarto mistério contemplemos a Apresentação <br /> do Menino Jesus no templo e a Purificação de Nossa Senhora.</li>
                <li>No quinto mistério contemplemos a Perda e o <br /> Encontro do Menino Jesus no templo.</li>
            </ol>


        <li id='dolorosos' className='ml-5 mt-15 text-xl font-bold'>Mistérios Dolorosos (terças e sextas-feiras, e domingos da Quaresma até a Páscoa)</li>
            <ol className='italic ml-20 mt-4 whitespace-pre-line font-body text-lg list-decimal marker:font-bold'>
                <li>No primeiro mistério contemplemos a Agonia de Cristo Nosso Senhor, <br /> dquando suou sangue no Horto.</li>
                <li>No segundo mistério contemplemoso a <br /> Flagelação de Jesus Cristo atado à coluna.</li>
                <li>No terceiro mistério contemplemos a Coroação <br /> de espinho de Nosso Senhor.</li>
                <li>No quarto mistério contemplemos Jesus Cristo <br /> carregando a Cruz para o Calvário.</li>
                <li>No quinto mistério contemplemos a Crucificação <br /> e morte de Nosso Senhor Jesus Cristo.</li>
            </ol>

        <li id='luminosos' className='ml-5 mt-15 text-xl font-bold'>Mistérios Luminosos (quinta-feira)</li>
            <ol className='italic ml-20 mt-4 whitespace-pre-line font-body text-lg list-decimal marker:font-bold'>
                <li>No primeiro mistério contemplemos o <br /> Batismo de Jesus no rio Jordão.</li>
                <li>No segundo mistério contemplemos a Auto-revelação <br /> dde Jesus nas Bodas de Caná.</li>
                <li>No terceiro mistério contemplemos o <br /> Anúncio do Reino de Deus.</li>
                <li>No quarto mistério contemplemos a <br /> Transfiguração de Jesus.</li>
                <li>No quinto mistério contemplemos a <br /> Instituição da Eucaristia.</li>
            </ol>

        <li id='gloriosos' className='ml-5 mt-15 text-xl font-bold'>Mistérios Gloriosos (quartas-feiras e domingos da Páscoa até o Advento)</li>
            <ol className='italic ml-20 mt-4 whitespace-pre-line font-body text-lg list-decimal marker:font-bold'>
                <li>No primeiro mistério contemplemos <br /> a Ressurreição de Cristo Nosso Senhor.</li>
                <li>No segundo mistério contemplemos <br /> a Ascensão de Nosso Senhor ao Céu.</li>
                <li>No terceiro mistério contemplemos a Vinda do Espírito Santo sobre os Apóstolos <br /> reunidos com Maria Santíssima no Cenáculo em Jerusalém.</li>
                <li>No quarto mistério contemplemos a Assunção <br /> de Nossa Senhora ao Céu.</li>
                <li>No quinto mistério contemplemos a Coroação de Nossa Senhora <br /> no Céu como Rainha de todos os anjos e santos.</li>
            </ol>
    </div>
  )
}

export default Misterios
