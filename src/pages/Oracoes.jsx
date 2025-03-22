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
    <div className="md:bg-stone-400">
      <div className='md:w-[80%] pb-20 bg-gray-100 m-auto pt-1'>  
        <h1 id='title2' className="mt-4 pb-8 pt-20 pl-5 text-gray-800 font-bold text-4xl bg-gradient-to-t to-gray-400 from-gray-100 via-gray-300">Orações</h1>
          <p id='tittle-oracao' className='ml-5 mt-5 text-xl font-bold underline font-title'>CREDO</p> 
          
          <p className='w-[80%] md:w-[50%] px-5 text-justify border-l-2 border-gray-300 ml-5 mt-4 md:ml-8 leading-relaxed font-body md:text-lg  text-gray-800 italic'>
          ﾠﾠCreio em Deus Pai, todo-poderoso, criador do Céu e da Terra e em Jesus Cristo, seu único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio pilatos, foi crucificado, morto e sepultado; desceu a mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado a Direita de Deus Pai todo-poderoso, donde há de vir julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na Vida eterna. <strong>Amém!</strong>
          </p>

          <p id='tittle-oracao' className='ml-5 mt-15 text-xl font-bold underline'>PAI NOSSO</p> 
          <p className='text-justify w-[80%] md:w-[50%] border-l-2 border-gray-300 pl-5 ml-5 md:ml-8 mt-5 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
              <strong>ﾠﾠﾠPai nosso</strong>, que estais nos céus, santificado seja o Vosso Nome, venha a nós o Vosso Reino, seja feita a Vossa vontade, assim na terra como no céu.
          </p>

          <span className='border-l-2 border-gray-300 pl-7 pt-2 pb-2 ml-5 md:ml-8 mt-4'>ﾠ</span>
          
          <p className='text-justify w-[80%] md:w-[50%] border-l-2 border-gray-300 pl-5 ml-5 md:ml-8 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
            ﾠﾠﾠO pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. <strong>Amém!</strong>
          </p>

          <h1 id='tittle-oracao' className="ml-5 mt-15 text-xl font-bold underline">AVE MARIA</h1>
          <p className='text-justify w-[80%] md:w-[50%] border-l-2 border-gray-300 pl-5 ml-5 mt-4 md:ml-8 font-body md:text-lg  text-gray-800 italic'>
          ﾠﾠﾠAve Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. 
          </p>

          <span className='border-l-2 border-gray-300 ml-5 py-1 md:ml-8'>ﾠ</span>
          <p className='text-justify w-[80%] md:w-[50%] border-l-2 border-gray-300 pl-5 ml-5 md:ml-8 whitespace-pre-line font-body md:text-lg text-gray-800 italic'>
            ﾠﾠﾠSanta Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. <strong>Amém!</strong></p>

          <h1 id='tittle-oracao' className="ml-5 mt-15 text-xl font-bold underline ">SALVE RAINHA</h1>
          <p className='text-justify w-[80%] md:w-[50%] border-l-2 border-gray-300 md:ml-8 pl-5 ml-5 mt-4 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
          ﾠﾠﾠSalve, Rainha, mãe de misericórdia, vida, doçura, esperança nossa, salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses Vossos olhos misericordiosos a nós volvei. E, depois deste desterro, nos mostrai Jesus, bendito fruto do Vosso ventre. Ó clemente, ó piedosa, ó doce Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. <strong>Amém!</strong>
          </p>

          <p id='tittle-oracao' className='ml-5 mt-15 text-xl font-bold underline'>INVOCAÇÃO DO ESPÍRITO SANTO</p>
          <p className='text-justify w-[80%] md:w-[50%] border-l-2 border-gray-300 pl-5 md:ml-8 ml-5 mt-4 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
            ﾠﾠVinde Espírito Santo, enchei os corações  dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado. E renovareis a face da terra. </p>
          
          <span className='border-l-2 border-gray-300 ml-5 md:ml-8 py-1'>ﾠ</span>
          
          <p className='text-justify w-[80%] md:w-[50%] border-l-2 border-gray-300 md:ml-8 pl-5 ml-5  whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
            <strong>Oremos: </strong> Ó Deus, que instruístes os  corações dos vossos fiéis com a luz do Espírito Santo,  fazei que apreciemos retamente todas  as coisas segundo o mesmo Espírito  e gozemos sempre da sua consolação. Por Cristo, Senhor Nosso.<strong> Amém</strong>.
          </p>
      </div>
    </div>
  )
}

export default Oracoes
