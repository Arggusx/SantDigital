import React from 'react'
import tercoTutor from '../assets/Img/terco-tutor.png'
import { Link } from 'react-router-dom';

const Tutorial = () => {
  return (
    <div className="p-4">
        <h1 id='title2' className="font-bold pl-5 mt-10 pt-10 underline underline-offset-6 decoration-2">Como Rezar o Terço</h1>
        <hr className="pl-4 border-t-3 border-yellow-400 mt-10 w-full rounded" />
        <h2 className='mt-5 text-2xl font-bold italic ml-10 mr-10 text-center' >Rezar o Terço todos os dias, como Nossa Senhora pediu em Fátima, é um compromisso de amor e confiança em Deus. Essa oração nos permite meditar sobre a vida de Cristo, fortalecendo nossa conexão espiritual e nos aproximando de Sua presença em nosso dia a dia. Além de ser uma demonstração de fé e devoção a Nossa Senhora, o Terço também é um ato que une famílias e comunidades na oração, fortalecendo os laços espirituais e trazendo bênçãos para todos.</h2>
        <hr className="pl-4 border-t-3 border-yellow-400 my-7 w-full rounded" />
        
        <div>
            <p id='divisoes-title' className='mb-5 mt-15 ml-5 text-2xl font-bold font-oswald'>DIVISÕES DO TERÇO</p>
            <span className='pl-7 mb-7 mt-10 text-lg'>O terço é uma corrente composta de contas, crucifixo e medalha, dividido da seguinte forma: </span>
            <li className='pl-7 ml-2 mt-4 text-lg  text-gray-800 italic'><strong>Crucifixo: </strong> No crucifixo faremos o Sinal da Cruz e rezamos o Credo</li>
            <li className='pl-7 ml-2 mt-4 text-lg  text-gray-800 italic'><strong>Contas Maiores: </strong> São as "bolinhas" maiores do Terço, onde normalmente rezaremos o Pai Nosso</li>
            <li className='pl-7 ml-2 mt-4 text-lg  text-gray-800 italic'><strong>Contas Menores: </strong> São as "bolinhas" menores, onde rezaremos Ave Maria</li>
            <li className='pl-7 ml-2 mt-4 text-lg  text-gray-800 italic'><strong>Medalha: </strong> Está no centro do Terço, onde rezaremos a oração Salve Rainha</li>
            <div className="flex flex-col items-center justify-center h-screen">
                <img className='w-150 mt-60' src={tercoTutor} alt="" />
            </div>

            <div className='mt-90'>
                <span id='sinal-cruz' className='mb-5 mt-15 -ml-00 text-2xl font-bold font-oswald'>SINAL DA CRUZ</span>
                    <p className='border-l-2 border-gray-300 pl-7 mb-8 ml-8 mt-7 whitespace-pre-line font-body text-lg  text-gray-800 italic'>Em nome do Pai, do Filho e do Espírito Santo. <strong>Amém.</strong></p>
                
                <span id='oferecimento' className='mb-5 mt-15  text-2xl font-bold font-oswald'>OFERECIMENTO</span>
                    <p className='pl-7 mt-10 whitespace-pre-line font-body text-lg'>Antes de iniciar é o momento em que oferecemos o Terço, fazemos nossos agradecimentos e pedidos, lembrando principalmente de Nossa Família e <br />dos que amamos. Seguimos, portanto, com a oração de oferecimento:</p>
                    <p className='border-l-2 border-gray-300 mb-8 pl-7 ml-8 mt-4 whitespace-pre-line font-body text-lg  text-gray-800 italic'>
                        Divino Jesus, <br />nós Vos oferecemos este terço que vamos rezar,<br />meditando nos mistérios da Vossa Redenção.<br />Concedei-nos, por intercessão da Virgem Maria,<br />Mãe de Deus e nossa Mãe,<br />as virtudes que nos são necessárias para bem rezá-lo e<br />a graça de ganharmos as indulgências desta santa devoção.
                    </p>
                
                <span id='credo' className='mb-5 mt-15 text-2xl font-bold font-oswald'>CREDO</span>
                    <p className='pl-7 mt-7 mb-7 whitespace-pre-line font-body text-lg'>Voçê pode, também, invovar o Espírito Santo com a oração do <strong>Divino Espírito Santo</strong> antes de rezar o credo para ter uma oração <br /> mais completa e ter a ajuda do Espírito Santo, clique <Link className='font-bold hover:cursor-pointer underline text-yellow-500' to="/home/oracoes">aqui</Link> para ver a oração.</p>
                    <p className='border-l-2 border-gray-300 mb-8 pl-7 ml-8 mt-4 whitespace-pre-line font-body text-lg  text-gray-800 italic'>
                        Creio em Deus Pai Todo-Poderoso,<br />Criador do Céu e da Terra;<br />e em Jesus Cristo, Seu único Filho, Nosso Senhor;<br />que foi concebido pelo poder do Espírito Santo.<br />Nasceu da Virgem Maria,<br />padeceu sob Pôncio Pilatos,<br />foi crucificado, morto e sepultado;<br />desceu à mansão dos mortos;<br />Ressuscitou ao terceiro dia; subiu aos Céus,<br />está sentado à direita de Deus Pai Todo-Poderoso,<br />donde há de vir a julgar os vivos e os mortos.<br />Creio no Espírito Santo,<br />na Santa Igreja Católica,<br />na Comunhão dos Santos,<br />na remissão dos pecados,<br />na ressurreição da carne,<br />na vida eterna. <strong>Amém.</strong></p>

                <span id='pai-nosso' className='mb-5 mt-15 text-2xl font-bold'>PAI NOSSO</span>
                    <p className='pl-7 mb-7 mt-10 whitespace-pre-line font-body text-lg'>Esse Pai Nosso é a <strong>primeira conta grande</strong>, a partir de agora toda conta grande que aparecer será rezado o Pai Nosso.</p>
                    <p className='border-l-2 border-gray-300 mb-8 pl-7 ml-8 mt-4 whitespace-pre-line font-body text-lg  text-gray-800 italic'>Pai nosso, que estais no Céu, <br />santificado seja o Vosso Nome;<br />venha a nós o Vosso Reino,<br />seja feita a Vossa vontade assim na terra como no Céu.<br />O pão nosso de cada dia nos dai hoje;<br />perdoai-nos as nossas ofensas<br />assim como nós perdoamos a quem nos tem ofendido;<br />e não nos deixeis cair em tentação, mas livrai-nos do mal. <strong>Amém.</strong></p>

                <span id='ave-maria' className='mb-5 mt-15 text-2xl font-bold'>AVE MARIA</span>
                    <p className='pl-7 mb-7 mt-10 text-lg'>Essas são as três primeiras contas pequenas, a partir de agora toda conta pequena que aparecer sera rezada a Ave Maria.
                        <li className='border-l-2 border-gray-300 pl-7 ml-2 mt-4 text-lg  text-gray-800 italic'><strong>Primeira Ave-Maria </strong> em honra a Deus Pai que nos criou: <strong>[Reze uma Ave-Maria]</strong></li>
                        <div className='ml-2 border-l-2 border-gray-300'>ﾠ</div>
                        <li className='border-l-2 border-gray-300 pl-7 ml-2 text-lg  text-gray-800 italic'><strong>Segunda Ave-Maria </strong> a Deus Filho que nos remiu: <strong>[Reze uma Ave-Maria]</strong></li>
                        <div className='ml-2 border-l-2 border-gray-300'>ﾠ</div>                        
                        <li className='border-l-2 border-gray-300 mb-8 pl-7 ml-2 text-lg  text-gray-800 italic'><strong>Terceira Ave-Maria </strong> ao Espírito Santo que nos santifica: <strong>[Reze a última Ave-Maria]</strong></li>
                    </p>

                <span id='gloria' className='mb-5 mt-15 text-2xl font-bold'>JACULATÓRIA</span>
                    <p className='pl-7 mb-7 mt-10 whitespace-pre-line font-body text-lg'>Sempre após as primeiras três Ave-Maria e terminar de rezar cada mistério, rezamos a jaculatória.</p>
                    <p className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 whitespace-pre-line font-body text-lg  text-gray-800 italic'>- Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. <strong>Amém.</strong></p>    
                    <div className='ml-8 border-l-2 border-gray-300'>ﾠ</div>
                    <p className='border-l-2 border-gray-300 mb-8 pl-7 ml-8 whitespace-pre-line font-body text-lg  text-gray-800 italic'>- Ó meu Jesus, perdoai-nos e livrai-nos do fogo do inferno; levai as almas todas para o Céu, principalmente as que mais precisarem.</p>
                    <p className=' mb-8 pl-7 ml-8 whitespace-pre-line font-body text-lg  text-red-900 font-bold italic'>(Depois que seguir todos esses passos, reze sempre a Jaculatória, anuncie qual <Link to="/home/misterio" className='underline text-yellow-500'>  mistério </Link> será contemplado [Ex.: No Segundo Mistério Glorioso contemplamos...], um Pai-Nosso e dez Ave-Marias, faça isso até terminar de rezar  e contemplar todos os 5 mistérios)</p>

                    <span id='salve' className='mb-5 mt-15 text-2xl font-bold'>SALVE RAINHA</span>
                    <p className='pl-7 mb-7 mt-10 text-lg'>Depois de rezar os 5 mistérios, na medalha que tem no terço, reze a oração de agradecimento seguida da <strong>Salve Rainha</strong></p>
                    <p id='agr' className='font-bold text-lg ml-5 mb-5'>Agradecimento</p>
                    <p className='border-l-2 border-gray-300 mb-8 pl-7 ml-8 whitespace-pre-line font-body text-lg  text-gray-800 italic'>"Infinitas graças vos damos, Soberana Rainha, <br /> pelos benefícios que todos os dias recebemos <br /> de vossas mãos liberais.<br /> Dignai-vos, agora e para sempre, <br /> tomar-nos debaixo do vosso poderoso amparo e, <br /> para mais vos agradecer, <br /> vos saudamos com uma Salve Rainha"</p>
                    <p id='sr' className='font-bold text-lg ml-5 mb-5'>Salve Rainha</p>
                    <p className='border-l-2 border-gray-300 pl-7 ml-8 mt-4 text-lg  text-gray-800 italic'>Salve, Rainha, Mãe de Misericórdia, <br />vida, doçura e esperança nossa, Salve.<br />A Vós bradamos, os degredados filhos de Eva.<br />A Vós suspiramos, gemendo e chorando neste vale de lágrimas.<br />Eia, pois, Advogada nossa,<br />esses Vossos olhos misericordiosos a nós volvei;<br />e depois deste desterro nos mostrai Jesus,<br />bendito Fruto do Vosso ventre. <br /> Ó clemente, ó piedosa, ó doce sempre Virgem Maria.<br /></p>
                    <div className='ml-8 border-l-2 border-gray-300'>ﾠ</div>
                    <p className='border-l-2 border-gray-300 pl-7 ml-8 text-lg  text-gray-800 italic'>V. Rogai por nós, Santa Mãe de Deus,<br />R. Para que sejamos dignos das promessas de Cristo. <strong>Amém</strong></p>
                    <p className='mt-8 mb-8 pl-7 ml-8 whitespace-pre-line font-body text-lg  text-red-900 font-bold italic'>Obs.: Não se esqueca de fazer o sinal da cruz novamente após o término</p>
            </div>
        </div>

    </div>
  )
}

export default Tutorial
