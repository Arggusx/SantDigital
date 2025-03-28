import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Tutorial = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-8">
  <div className="w-[90%] md:w-[80%] mx-auto bg-white shadow-lg rounded-lg pt-4">
    {/* Título Principal */}
    <h1
      id="title2"
      className="text-3xl md:text-3xl font-serif font-bold text-gray-800 pl-6 md:pl-8 pt-17 pb-6 bg-gradient-to-r from-gray-100 to-blue-100"
    >
      Como Rezar o Terço
    </h1>

    {/* Divisor Estilizado */}
    <div className="w-[95%] mx-auto my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

    {/* Introdução */}
    <h2 className="text-lg md:text-xl font-sans italic text-gray-600 text-center mx-6 md:mx-10 mb-8 leading-relaxed">
      Rezar o Terço todos os dias, como Nossa Senhora pediu em Fátima, é um compromisso de amor e confiança em Deus. Essa oração nos permite meditar sobre a vida de Cristo, fortalecendo nossa conexão espiritual e nos aproximando de Sua presença em nosso dia a dia. Além de ser uma demonstração de fé e devoção a Nossa Senhora, o Terço também é um ato que une famílias e comunidades na oração, fortalecendo os laços espirituais e trazendo bênçãos para todos.
    </h2>

    {/* Divisor Estilizado */}
    <div className="w-[95%] mx-auto my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

    {/* Conteúdo */}
    <div className="px-6 md:px-8 pb-12">
      {/* Divisões do Terço */}
      <p
        id="divisoes-title"
        className="mb-6 mt-10 text-2xl md:text-xl font-serif font-bold text-gray-800"
      >
        Divisões do Terço
      </p>
      <span className="block pl-4 mb-6 text-lg md:text-base text-gray-700">
        O terço é uma corrente composta de contas, crucifixo e medalha, dividido da seguinte forma:
      </span>
      <ul className="space-y-4 pl-4 text-gray-700 text-lg md:text-base italic">
        <li>
          <strong>Crucifixo:</strong> No crucifixo faremos o Sinal da Cruz e rezamos o Credo.
        </li>
        <li>
          <strong>Contas Maiores:</strong> São as "bolinhas" maiores do Terço, onde normalmente rezaremos o Pai Nosso.
        </li>
        <li>
          <strong>Contas Menores:</strong> São as "bolinhas" menores, onde rezaremos Ave Maria.
        </li>
        <li>
          <strong>Medalha:</strong> Está no centro do Terço, onde rezaremos a oração Salve Rainha.
        </li>
      </ul>
      <img
        className="mx-auto w-full max-w-md h-auto my-10 rounded-lg shadow-md"
        src="/img2/terco-tutor.png"
        alt="Imagem do Terço"
      />

      {/* Seções de Orações */}
      <div className="mt-12 space-y-12">
        {/* Sinal da Cruz */}
        <div>
          <span
            id="sinal-cruz"
            className="block mb-4 text-2xl md:text-xl font-serif font-bold text-gray-800"
          >
            Sinal da Cruz
          </span>
          <p className="border-l-4 border-gray-400 pl-6 text-gray-700 italic text-lg md:text-base leading-relaxed">
            Em nome do Pai, do Filho e do Espírito Santo. <strong>Amém.</strong>
          </p>
        </div>

        {/* Oferecimento */}
        <div>
          <span
            id="oferecimento"
            className="block mb-4 text-2xl md:text-xl font-serif font-bold text-gray-800"
          >
            Oferecimento
          </span>
          <p className="pl-4 mb-4 text-lg md:text-base text-gray-700">
            Antes de iniciar é o momento em que oferecemos o Terço, fazemos nossos agradecimentos e pedidos, lembrando principalmente de Nossa Família e dos que amamos. Seguimos, portanto, com a oração de oferecimento:
          </p>
          <p className="border-l-4 border-gray-400 pl-6 w-[90%] md:w-[60%] text-gray-700 italic text-lg md:text-base leading-relaxed">
            Divino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da Vossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção.
          </p>
        </div>

        {/* Credo */}
        <div>
          <span
            id="credo"
            className="block mb-4 text-2xl md:text-xl font-serif font-bold text-gray-800"
          >
            Credo
          </span>
          <p className="pl-4 mb-4 text-lg md:text-base text-gray-700">
            Você pode, também, invocar o Espírito Santo com a oração do <strong>Divino Espírito Santo</strong> antes de rezar o credo para ter uma oração mais completa e ter a ajuda do Espírito Santo, clique{" "}
            <Link
              className="underline text-blue-500 hover:text-blue-700"
              to="/home/oracoes#espirito-santo"
            >
              aqui
            </Link>{" "}
            para ver uma lista completa de orações.
          </p>
          <p className="border-l-4 border-gray-400 pl-6 w-[90%] md:w-[60%] text-gray-700 italic text-lg md:text-base leading-relaxed">
            Creio em Deus Pai Todo-Poderoso, Criador do Céu e da Terra; e em Jesus Cristo, Seu único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo. Nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; Ressuscitou ao terceiro dia; subiu aos Céus, está sentado à direita de Deus Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na Comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. <strong>Amém.</strong>
          </p>
        </div>

        {/* Pai Nosso */}
        <div>
          <span
            id="pai-nosso"
            className="block mb-4 text-2xl md:text-xl font-serif font-bold text-gray-800"
          >
            Pai Nosso
          </span>
          <p className="pl-4 mb-4 text-lg md:text-base text-gray-700">
            Esse Pai Nosso é a <strong>primeira conta grande</strong>, a partir de agora toda conta grande que aparecer será rezado o Pai Nosso.
          </p>
          <p className="border-l-4 border-gray-400 pl-6 w-[90%] md:w-[60%] text-gray-700 italic text-lg md:text-base leading-relaxed">
            Pai nosso, que estais no Céu, santificado seja o Vosso Nome; venha a nós o Vosso Reino, seja feita a Vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. <strong>Amém.</strong>
          </p>
        </div>

        {/* Ave Maria */}
        <div>
          <span
            id="ave-maria"
            className="block mb-4 text-2xl md:text-xl font-serif font-bold text-gray-800"
          >
            Ave Maria
          </span>
          <p className="pl-4 mb-4 text-lg md:text-base text-gray-700">
            Essas são as três primeiras contas pequenas, a partir de agora toda conta pequena que aparecer será rezada a Ave Maria.
          </p>
          <ul className="space-y-3 pl-4 text-gray-700 italic text-lg md:text-base">
            <li>
              <strong>Primeira Ave-Maria</strong> em honra a Deus Pai que nos criou: <strong>[Reze a primeira Ave-Maria]</strong>
            </li>
            <li>
              <strong>Segunda Ave-Maria</strong> a Deus Filho que nos remiu: <strong>[Reze a segunda Ave-Maria]</strong>
            </li>
            <li>
              <strong>Terceira Ave-Maria</strong> ao Espírito Santo que nos santifica: <strong>[Reze a última Ave-Maria]</strong>
            </li>
          </ul>
        </div>

        {/* Jaculatória */}
        <div>
          <span
            id="gloria"
            className="block mb-4 text-2xl md:text-xl font-serif font-bold text-gray-800"
          >
            Jaculatória
          </span>
          <p className="pl-4 mb-4 text-lg md:text-base text-gray-700">
            Sempre após as primeiras três Ave-Maria e terminar de rezar cada mistério, rezamos a jaculatória.
          </p>
          <p className="border-l-4 border-gray-400 pl-6 w-[90%] md:w-[60%] text-gray-700 italic text-lg md:text-base leading-relaxed">
            Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. <strong>Amém.</strong>
          </p>
          <p className="border-l-4 border-gray-400 pl-6 w-[90%] md:w-[60%] mt-4 text-gray-700 italic text-lg md:text-base leading-relaxed">
            Ó meu Jesus, perdoai-nos e livrai-nos do fogo do inferno; levai as almas todas para o Céu, principalmente as que mais precisarem da vossa misericórdia.
          </p>
          <p className="pl-4 mt-4 text-red-800 font-bold italic text-lg md:text-base">
            (Depois que seguir todos esses passos, reze sempre a Jaculatória, anuncie{" "}
            <Link to="/home/misterio" className="underline text-blue-500 hover:text-blue-700">
              qual mistério
            </Link>{" "}
            será contemplado [Ex.: No Segundo Mistério Glorioso contemplamos...], um Pai-Nosso e dez Ave-Marias, faça isso até terminar de rezar e contemplar todos os 5 mistérios)
          </p>
        </div>

        {/* Salve Rainha */}
        <div>
          <span
            id="salve"
            className="block mb-4 text-2xl md:text-xl font-serif font-bold text-gray-800"
          >
            Salve Rainha
          </span>
          <p className="pl-4 mb-4 text-lg md:text-base text-gray-700">
            Depois de rezar os 5 mistérios, na medalha que tem no terço, reze a oração de agradecimento seguida da <strong>Salve Rainha</strong>.
          </p>
          <p id="agr" className="pl-4 font-bold text-lg md:text-base text-gray-800 mb-2">
            Agradecimento
          </p>
          <p className="border-l-4 border-gray-400 pl-6 w-[90%] md:w-[60%] text-gray-700 italic text-lg md:text-base leading-relaxed">
            Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo do vosso poderoso amparo e, para mais vos agradecer, vos saudamos com uma <strong>Salve Rainha</strong>.
          </p>
          <p id="sr" className="pl-4 font-bold text-lg md:text-base text-gray-800 mt-4 mb-2">
            Salve Rainha
          </p>
          <p className="border-l-4 border-gray-400 pl-6 w-[90%] md:w-[60%] text-gray-700 italic text-lg md:text-base leading-relaxed">
            Salve, Rainha, Mãe de Misericórdia, vida, doçura e esperança nossa, Salve. A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, Advogada nossa, esses Vossos olhos misericordiosos a nós volvei; e depois deste desterro nos mostrai Jesus, bendito Fruto do Vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria.
          </p>
          <p className="border-l-4 border-gray-400 pl-6 mt-4 w-[90%] md:w-[60%] text-gray-700 italic text-lg md:text-base leading-relaxed">
            <strong>V.</strong> Rogai por nós, Santa Mãe de Deus,<br />
            <strong>R.</strong> Para que sejamos dignos das promessas de Cristo. <strong>Amém</strong>
          </p>
          <p className="pl-4 mt-6 text-red-800 font-bold italic text-lg md:text-base">
            Obs.: Não se esqueça de fazer o sinal da cruz novamente após o término.
          </p>
        </div>
      </div>
    </div>
  </div>
</div> 
  )
}

export default Tutorial
