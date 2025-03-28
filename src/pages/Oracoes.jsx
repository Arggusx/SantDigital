import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Oracoes = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const elemento = document.querySelector(hash);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-8">
  <div className="w-[90%] md:w-[80%] mx-auto bg-white shadow-lg rounded-lg pt-4 pb-20">
    {/* Título Principal */}
    <h1
      id="title2"
      className="text-4xl md:text-3xl font-serif font-bold text-gray-800 pl-6 md:pl-8 pt-17 pb-6 bg-gradient-to-r from-gray-100 to-blue-100"
    >
      Orações
    </h1>

    {/* Conteúdo */}
    <div className="px-6 md:px-8 space-y-12">
      {/* Credo */}
      <div>
        <p
          id="tittle-oracao"
          className="mt-6 text-xl md:text-lg font-serif font-bold text-gray-800 border-b-2 border-gray-300 pb-1"
        >
          Credo
        </p>
        <p className="w-[90%] md:w-[60%] mt-4 pl-5 border-l-4 border-gray-400 text-gray-700 italic text-lg md:text-base leading-relaxed">
          Creio em Deus Pai, todo-poderoso, criador do Céu e da Terra e em Jesus Cristo, seu único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. <strong>Amém!</strong>
        </p>
      </div>

      {/* Pai Nosso */}
      <div>
        <p
          id="tittle-oracao"
          className="mt-6 text-xl md:text-lg font-serif font-bold text-gray-800 border-b-2 border-gray-300 pb-1"
        >
          Pai Nosso
        </p>
        <p className="w-[90%] md:w-[60%] mt-4 pl-5 border-l-4 border-gray-400 text-gray-700 italic text-lg md:text-base leading-relaxed">
          <strong>Pai nosso</strong>, que estais nos céus, santificado seja o Vosso Nome, venha a nós o Vosso Reino, seja feita a Vossa vontade, assim na terra como no céu.
        </p>
        <p className="w-[90%] md:w-[60%] mt-3 pl-5 border-l-4 border-gray-400 text-gray-700 italic text-lg md:text-base leading-relaxed">
          O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. <strong>Amém!</strong>
        </p>
      </div>

      {/* Ave Maria */}
      <div>
        <h1
          id="tittle-oracao"
          className="mt-6 text-xl md:text-lg font-serif font-bold text-gray-800 border-b-2 border-gray-300 pb-1"
        >
          Ave Maria
        </h1>
        <p className="w-[90%] md:w-[60%] mt-4 pl-5 border-l-4 border-gray-400 text-gray-700 italic text-lg md:text-base leading-relaxed">
          Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.
        </p>
        <p className="w-[90%] md:w-[60%] mt-3 pl-5 border-l-4 border-gray-400 text-gray-700 italic text-lg md:text-base leading-relaxed">
          Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. <strong>Amém!</strong>
        </p>
      </div>

      {/* Salve Rainha */}
      <div>
        <h1
          id="tittle-oracao"
          className="mt-6 text-xl md:text-lg font-serif font-bold text-gray-800 border-b-2 border-gray-300 pb-1"
        >
          Salve Rainha
        </h1>
        <p className="w-[90%] md:w-[60%] mt-4 pl-5 border-l-4 border-gray-400 text-gray-700 italic text-lg md:text-base leading-relaxed">
          Salve, Rainha, mãe de misericórdia, vida, doçura, esperança nossa, salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses Vossos olhos misericordiosos a nós volvei. E, depois deste desterro, nos mostrai Jesus, bendito fruto do Vosso ventre. Ó clemente, ó piedosa, ó doce Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. <strong>Amém!</strong>
        </p>
      </div>

      {/* Invocação do Espírito Santo */}
      <div>
        <p
          id="tittle-oracao"
          className="mt-6 text-xl md:text-lg font-serif font-bold text-gray-800 border-b-2 border-gray-300 pb-1"
        >
          Invocação do Espírito Santo
        </p>
        <p className="w-[90%] md:w-[60%] mt-4 pl-5 border-l-4 border-gray-400 text-gray-700 italic text-lg md:text-base leading-relaxed">
          Vinde Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado. E renovareis a face da terra.
        </p>
        <p className="w-[90%] md:w-[60%] mt-3 pl-5 border-l-4 border-gray-400 text-gray-700 italic text-lg md:text-base leading-relaxed">
          <strong>Oremos:</strong> Ó Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos sempre da sua consolação. Por Cristo, Senhor Nosso. <strong>Amém</strong>.
        </p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Oracoes
