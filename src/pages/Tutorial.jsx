import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Tutorial = () => {
  return (
    <div className=" pt-4 md:bg-stone-400 bg-gray-100">
        <div className='bg-gray-100 pt-1 md:w-[80%] m-auto '>
            <h1 id='title2' className=" text-gray-800 text-4xl font-bold pl-5 text-left  mt-14 md:mt-11 m-auto pt-8 pb-10 bg-gradient-to-t to-gray-400 from-gray-100 via-gray-300">
                Como Rezar o Terço
            </h1>
            <hr className="pl-4 border-t-2 border-gray-400 mx-5 rounded"/>
            <h2 className='mt-5 md:text-xl font-semibold italic ml-10 mr-10 text-center'>ﾠﾠﾠRezar o Terço todos os dias, como Nossa Senhora pediu em Fátima, é um compromisso de amor e confiança em Deus. Essa oração nos permite meditar sobre a vida de Cristo, fortalecendo nossa conexão espiritual e nos aproximando de Sua presença em nosso dia a dia. Além de ser uma demonstração de fé e devoção a Nossa Senhora, o Terço também é um ato que une famílias e comunidades na oração, fortalecendo os laços espirituais e trazendo bênçãos para todos.</h2>
            <hr className="pl-4 border-t-2 border-gray-400 mt-5 rounded w-full md:mx-5"/>
            <div className='pl-8'>
                <p id='divisoes-title' className='mb-5 mt-15 ml-5 text-2xl font-bold font-oswald'>DIVISÕES DO TERÇO</p>
                <span className='pl-7 mb-7 mt-10 text-lg'>O terço é uma corrente composta de contas, crucifixo e medalha, dividido da seguinte forma: </span>
                <li className='pl-7 ml-2 mt-4 md:text-lg  text-gray-800 italic'><strong>Crucifixo: </strong> No crucifixo faremos o Sinal da Cruz e rezamos o Credo</li>
                <li className='pl-7 ml-2 mt-4 md:text-lg  text-gray-800 italic'><strong>Contas Maiores: </strong> São as "bolinhas" maiores do Terço, onde normalmente rezaremos o Pai Nosso</li>
                <li className='pl-7 ml-2 mt-4 md:text-lg  text-gray-800 italic'><strong>Contas Menores: </strong> São as "bolinhas" menores, onde rezaremos Ave Maria</li>
                <li className='pl-7 ml-2 mt-4 md:text-lg  text-gray-800 italic'><strong>Medalha: </strong> Está no centro do Terço, onde rezaremos a oração Salve Rainha</li>
                    <img className='m-auto w-auto h-screen my-10' src="/img2/terco-tutor.png" alt="" /> 
                    {/* BUG: márgem !!  flex flex-col items-center justify-center h-screen w-130*/}

                <div className='mt-30 md:ml-5'>
                    <span id='sinal-cruz' className='mb-5 mt-15 -ml-00 text-2xl font-bold font-oswald'>SINAL DA CRUZ</span>
                        <p className='border-l-2 border-gray-400 pl-7 mb-8 ml-8 mt-7 whitespace-pre-line font-body text-lg  text-gray-800 italic'>Em nome do Pai, do Filho e do Espírito Santo. <strong>Amém.</strong></p>

                    <span id='oferecimento' className='mb-5 mt-15  text-2xl font-bold font-oswald'>OFERECIMENTO</span>
                        <p className='pl-7 mb-10 mt-10 whitespace-pre-line font-body text-lg'>Antes de iniciar é o momento em que oferecemos o Terço, fazemos nossos agradecimentos e pedidos, lembrando principalmente de Nossa Família e <br />dos que amamos. Seguimos, portanto, com a oração de oferecimento:</p>
                        <p className='text-justify md:w-[50%] w-[80%] border-l-2 border-gray-400 mb-15 pl-7 ml-8 mt-4 font-body md:text-lg  text-gray-800 italic'>
                            ﾠﾠDivino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da Vossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção.
                        </p>

                    <span id='credo' className='mb-5 mt-15 text-2xl font-bold font-oswald'>CREDO</span>
                        <p className='pl-7 mt-7 mb-7 whitespace-pre-line font-body text-lg'>Voçê pode, também, invovar o Espírito Santo com a oração do <strong>Divino Espírito Santo</strong> antes de rezar o credo para ter uma oração <br /> mais completa e ter a ajuda do Espírito Santo, clique <Link className='underline-offset-3 font-bold hover:cursor-pointer underline text-yellow-500' to="/home/oracoes#espirito-santo">aqui</Link> para ver uma lista completa de orações.</p>
                        <p className='text-justify md:w-[50%] w-[80%] border-l-2 border-gray-400 mb-8 pl-7 ml-8 mt-4 whitespace-pre-line font-body md:text-lg text-gray-800 italic'>
                            ﾠﾠCreio em Deus Pai Todo-Poderoso, Criador do Céu e da Terra; e em Jesus Cristo, Seu único Filho, Nosso Senhor; que foi concebido pelo poder do Espírito Santo. Nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; Ressuscitou ao terceiro dia;  aos Céus, está sentado à direita de Deus Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na Comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. <strong  >Amém.</strong></p>

                    <span id='pai-nosso' className='mb-5 mt-15 text-2xl font-bold'>PAI NOSSO</span>
                        <p className='pl-7 mb-7 mt-10 whitespace-pre-line font-body text-lg'>Esse Pai Nosso é a <strong>primeira conta grande</strong>, a partir de agora toda conta grande que aparecer será rezado o Pai Nosso.</p>
                        <p className='text-justify md:w-[50%] w-[80%] border-l-2 border-gray-400 mb-8 pl-7 ml-8 mt-4 whitespace-pre-line font-body md:text-lg text-gray-800 italic'>ﾠﾠﾠﾠPai nosso, que estais no Céu, santificado seja o Vosso Nome; venha a nós o Vosso Reino, seja feita a Vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. <strong>Amém.</strong></p>

                    <span id='ave-maria' className='mb-5 mt-15 text-2xl font-bold'>AVE MARIA</span>
                        <p className='pl-7 mb-7 mt-10 text-lg'>Essas são as três primeiras contas pequenas, a partir de agora toda conta pequena que aparecer sera rezada a Ave Maria.</p>
                            <li className='pl-3 ml-2 mt-4 md:text-lg  text-gray-800 italic'><strong>Primeira Ave-Maria </strong> em honra a Deus Pai que nos criou: <strong>[Reze a primeira Ave-Maria]</strong></li>
                                <span>ﾠ</span>
                            <li className='pl-3 ml-2 md:text-lg italic'><strong>Segunda Ave-Maria </strong> a Deus Filho que nos remiu: <strong>[Reze a segunda Ave-Maria]</strong></li>
                                <span>ﾠ</span>                        
                            <li className='mb-8 pl-3 ml-2 md:text-lg italic'><strong>Terceira Ave-Maria </strong> ao Espírito Santo que nos santifica: <strong>[Reze a última Ave-Maria]</strong></li>


                    <span id='gloria' className='mb-5 mt-15 text-2xl font-bold'>JACULATÓRIA</span>
                        <p className='pl-7 mb-7 mt-10 whitespace-pre-line font-body text-lg'>Sempre após as primeiras três Ave-Maria e terminar de rezar cada mistério, rezamos a jaculatória.</p>
                        <p className='text-justify md:w-[50%] w-[80%] border-l-2 border-gray-400 pl-7 ml-8 mt-4 whitespace-pre-line font-body md:text-lg text-gray-800 italic'>-ﾠﾠGlória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. <strong>Amém.</strong></p>    
                        <span className='ml-8 border-l-2 border-gray-400 py-1'>ﾠ</span>
                        <p className='md:w-[50%] border-l-2 border-gray-400 mb-8 pl-7 ml-8 whitespace-pre-line font-body md:text-lg text-gray-800 italic'>-ﾠﾠÓ meu Jesus, perdoai-nos e livrai-nos do fogo do inferno; levai as almas todas para o Céu, principalmente as que mais precisarem da vossa misericórdia.</p>
                        <p className=' mb-8 pl-7 w-[90%] text-justify whitespace-pre-line font-body md:text-lg  text-red-900 font-bold italic'>(Depois que seguir todos esses passos, reze sempre a Jaculatória, anuncie <Link to="/home/misterio" className='underline underline-offset-3 text-yellow-500'> qual mistério</Link> será contemplado [Ex.: No Segundo Mistério Glorioso contemplamos...], um Pai-Nosso e dez Ave-Marias, faça isso até terminar de rezar  e contemplar todos os 5 mistérios)</p>

                    <span id='salve' className='mb-5 text-2xl mt-15 font-bold'>SALVE RAINHA</span>
                        <p className='pl-7 mb-7 mt-10 text-lg'>Depois de rezar os 5 mistérios, na medalha que tem no terço, reze a oração de agradecimento seguida da <strong>Salve Rainha</strong>.</p>
                        <p id='agr' className='font-bold text-lg ml-5 mb-5'>Agradecimento</p>
                        <p className='md:w-[50%] w-[80%] border-l-2 border-gray-400 mb-8 pl-7 ml-8 whitespace-pre-line font-body md:text-lg text-gray-800 italic text-justify'>ﾠﾠInfinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo do vosso poderoso amparo e, para mais vos agradecer, vos saudamos com uma <strong>Salve Rainha</strong>.</p>
                        <p id='sr' className='font-bold text-lg ml-5 mb-5'>Salve Rainha</p>
                        <p className='md:w-[50%] w-[80%] border-l-2 border-gray-400 pl-7 ml-8 mt-4 md:text-lg text-gray-800 italic text-justify'>ﾠﾠSalve, Rainha, Mãe de Misericórdia, vida, doçura e esperança nossa, Salve. A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, Advogada nossa, esses Vossos olhos misericordiosos a nós volvei; e depois deste desterro nos mostrai Jesus, bendito Fruto do Vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria.</p>
                        <span className='ml-8 border-l-2 border-gray-400 py-1'>ﾠ</span>
                        <p className='border-l-2 border-gray-400 pl-7 ml-8 md:text-lg  text-gray-800 italic'><strong> V.</strong> Rogai por nós, Santa Mãe de Deus,<br /><strong>R.</strong> Para que sejamos dignos das promessas de Cristo. <strong>Amém</strong></p>
                        <p className='mt-8 pb-20 pl-7 whitespace-pre-line font-body md:text-lg  text-red-900 font-bold italic'>Obs.: Não se esqueca de fazer o sinal da cruz novamente após o término.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tutorial
