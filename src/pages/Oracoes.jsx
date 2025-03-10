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
      <h1 id='title2' className="underline underline-offset-7 text-amber-400 mt-10 ml-5 font-bold text-4xl pt-20">Orações</h1>

      <p id='oracoes-title' className='mt-15 ml-5 text-2xl font-bold'>Orações para rezar o terço:</p>
            <p className='ml-5 mt-5 text-xl font-bold underline font-title'>Credo ou Creio</p> 
            
            <p className=' border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body text-lg  text-gray-800 italic'>
              Creio em Deus Pai, todo-poderoso, <br />criador do Céu e da Terra <br />e em Jesus Cristo, seu único Filho, Nosso Senhor; <br />que foi concebido pelo poder do Espírito Santo; <br />nasceu da Virgem Maria, <br />padeceu sob Pôncio pilatos, <br />foi crucificado, morto e sepultado; <br />desceu a mansão dos mortos; <br />ressuscitou ao terceiro dia; <br />subiu aos céus, <br />está sentado a Direita de Deus Pai todo-poderoso, <br />donde há de vir julgar os vivos e os mortos. <br />Creio no Espírito Santo, na santa Igreja Católica, <br />na comunhão dos santos, na <br />remissão dos pecados, na ressurreição da carne, <br />na Vida eterna. <strong>Amém!</strong>
            </p>

            <p className='ml-5 mt-5 text-xl font-bold underline'>Pai nosso</p> 
            <p className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body text-lg  text-gray-800 italic'>
                <strong>Pai nosso</strong>, que estais nos céus, <br />santificado seja o Vosso Nome, <br />venha a nós o Vosso Reino, <br />seja feita a Vossa vontade, <br />assim na terra como no céu.
            </p>

            <span className='border-l-2 border-gray-300 pl-7 pt-2 pb-2 ml-8 mt-4'>ﾠ</span>
            <p className='border-l-2 border-gray-300 pl-7 ml-8 whitespace-pre-line font-body text-lg  text-gray-800 italic'>
              O pão nosso de cada dia nos dai hoje, <br />perdoai-nos as nossas ofensas, <br />assim como nós perdoamos <br />a quem nos tem ofendido, <br />e não nos deixeis cair em tentação, <br />mas livrai-nos do mal. <strong>Amém!</strong>
            </p>

            <h1 id='ave-maria' className="ml-5 mt-5 text-xl font-bold underline">Ave Maria</h1>
            <p className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body text-lg  text-gray-800 italic'>
                Ave Maria, cheia de graça, o Senhor é convosco. <br />Bendita sois vós entre as mulheres, <br />e bendito é o fruto do vosso ventre, Jesus. 
                <span>ﾠ</span>
            </p>
            <p className='border-l-2 border-gray-300 pl-7 ml-8  whitespace-pre-line font-body text-lg  text-gray-800 italic'><br />Santa Maria, Mãe de Deus, <br />rogai por nós, pecadores, <br />agora e na hora de nossa morte. <strong>Amém!</strong></p>

            <h1 className="ml-5 mt-5 text-xl font-bold underline ">Salve Rainha</h1>

            <p className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body text-lg  text-gray-800 italic'>
                Salve, Rainha, <br />mãe de misericórdia, <br />vida, doçura, esperança nossa, salve! <br />A Vós bradamos, <br />os degredados filhos de Eva. <br />A Vós suspiramos, gemendo e chorando <br />neste vale de lágrimas. <br />Eia, pois, advogada nossa, <br />esses Vossos olhos misericordiosos <br />a nós volvei. <br />E, depois deste desterro, <br />nos mostrai Jesus, bendito fruto <br />do Vosso ventre. <br />Ó clemente, ó piedosa, <br />ó doce Virgem Maria. <br />Rogai por nós, Santa Mãe de Deus, <br />para que sejamos dignos das promessas de Cristo. <strong>Amém!</strong>
            </p>

            <p className='ml-5 mt-5 text-xl font-bold underline'>Invocação do Espírito Santo</p>

            <p id='espirito-santo' className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body text-lg  text-gray-800 italic'>
              Vinde Espírito Santo, enchei os corações <br /> dos vossos fiéis e acendei neles o fogo do vosso amor. <br />Enviai o vosso Espírito e tudo será criado. <br />E renovareis a face da terra. </p>
            <p className='border-l-2 border-gray-300 pl-7 ml-8  whitespace-pre-line font-body text-lg  text-gray-800 italic'>
              <span className='ml-2 pt-1 pb-1'>ﾠ</span>
              <br /> OREMOS: Ó Deus, que instruístes os <br /> corações dos vossos fiéis com a luz do Espírito Santo, <br /> fazei que apreciemos retamente todas <br /> as coisas segundo o mesmo Espírito <br /> e gozemos sempre da sua consolação. <br />Por Cristo, Senhor Nosso.<strong> Amém</strong>.
            </p>
    </div>
  )
}

export default Oracoes
