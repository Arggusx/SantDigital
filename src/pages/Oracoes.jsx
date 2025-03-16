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
    <div className="p-4">
      <h1 id='title2' className="underline-offset-7 mt-5 md:mt-20 text-gray-800 ml-5 font-bold text-4xl">Orações</h1>

      <p id='oracoes-title' className='mt-10 ml-5 text-2xl font-bold'>Orações para rezar o terço:</p>
            <p className='ml-5 mt-5 text-xl font-bold underline font-title'>Credo ou Creio</p> 
            
            <p className=' border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
            ﾠﾠﾠﾠCreio em Deus Pai, todo-poderoso, criador do Céu e da Terra e em Jesus Cristo, seu único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio pilatos, foi crucificado, morto e sepultado; desceu a mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado a Direita de Deus Pai todo-poderoso, donde há de vir julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na Vida eterna. <strong>Amém!</strong>
            </p>

            <p className='ml-5 mt-5 text-xl font-bold underline'>Pai nosso</p> 
            <p className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
                <strong>ﾠﾠﾠﾠPai nosso</strong>, que estais nos céus, santificado seja o Vosso Nome, venha a nós o Vosso Reino, seja feita a Vossa vontade, assim na terra como no céu.
            </p>

            <span className='border-l-2 border-gray-300 pl-7 pt-2 pb-2 ml-8 mt-4'>ﾠ</span>
            <p className='border-l-2 border-gray-300 pl-7 ml-8 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
              O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. <strong>Amém!</strong>
            </p>

            <h1 id='ave-maria' className="ml-5 mt-5 text-xl font-bold underline">Ave Maria</h1>
            <p className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
            ﾠﾠﾠﾠAve Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. 
            </p>
                <span className='border-l-2 border-gray-300 ml-8 py-1'>ﾠ</span>
            <p className='border-l-2 border-gray-300 pl-7 ml-8 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. <strong>Amém!</strong></p>

            <h1 className="ml-5 mt-5 text-xl font-bold underline ">Salve Rainha</h1>

            <p className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
            ﾠﾠﾠﾠSalve, Rainha, mãe de misericórdia, vida, doçura, esperança nossa, salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses Vossos olhos misericordiosos a nós volvei. E, depois deste desterro, nos mostrai Jesus, bendito fruto do Vosso ventre. Ó clemente, ó piedosa, ó doce Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. <strong>Amém!</strong>
            </p>

            <p className='ml-5 mt-5 text-xl font-bold underline'>Invocação do Espírito Santo</p>

            <p id='espirito-santo' className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
            ﾠﾠﾠﾠVinde Espírito Santo, enchei os corações  dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado. E renovareis a face da terra. </p>
            <span className='border-l-2 border-gray-300 ml-8 py-1'>ﾠ</span>
            <p className='border-l-2 border-gray-300 pl-7 ml-8  whitespace-pre-line font-body md:text-lg  text-gray-800 italic'>
               <strong>Oremos: </strong> Ó Deus, que instruístes os  corações dos vossos fiéis com a luz do Espírito Santo,  fazei que apreciemos retamente todas  as coisas segundo o mesmo Espírito  e gozemos sempre da sua consolação. Por Cristo, Senhor Nosso.<strong> Amém</strong>.
            </p>
    </div>
  )
}

export default Oracoes
