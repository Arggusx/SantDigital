
import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
  const [prayerOfTheDay, setPrayerOfTheDay] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("API URL:", import.meta.env.VITE_API_ORACAO);

    fetch(`${import.meta.env.VITE_API_ORACAO}/api/daily`)
      .then(response => response.json())
      .then(data => {
        console.log("Dados recebidos:", data)
        setPrayerOfTheDay(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Erro ao buscar oração do dia:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className=" flex flex-col text-green-500 text-3xl justify-center items-center h-screen gap-15">Carregando... <img className='w-[10%] h-[17%] rounded-2xl' src="\img2\papa-leao.gif" alt="" /></div>
  }
  if (!prayerOfTheDay) {
    return <div className='text-red-500'>Erro ao carregar a oração do dia.</div>
  }

  if (!prayerOfTheDay) return null;

  // const verseText =
  //   // prayerOfTheDay.verse.translatedText ||
  //   prayerOfTheDay.verse.originalText;

  const prayerText =
    // prayerOfTheDay.prayer.textTranslate ||
    prayerOfTheDay.prayer.textOriginal;

  return (
    <>
      <script src='https://tenor.com/pt-BR/view/memes-meme-memes2022funny-gif-26457759'></script>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=EB+Garamond:wght@400;500;700&display=swap');
      </style>
      <div className="bg-amber-50 font-serif">
        <custom-navbar></custom-navbar>

        <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-cursive text-amber-800 mt-20 mb-4 italic">Oratio Daily</h1>
            <p className="text-md md:text-2xl text-amber-700 mb-8">Um refúgio digital para oração e reflexão espiritual</p>
            <div className="w-24 h-1 bg-amber-300 mx-auto mb-12"></div>
          </section>
          <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="md:text-lg text-md text-amber-900 mb-6 leading-relaxed">
                Bem-vindo ao seu santuário digital, onde a paz encontra a tecnologia. Aqui, oferecemos um espaço tranquilo para fortalecer sua vida espiritual através da oração e meditação.
              </p>
              <p className="md:text-lg text-md text-amber-900 mb-6 leading-relaxed">
                Em um mundo acelerado, reservar momentos para conexão divina é essencial. Nosso propósito é facilitar esse encontro com o sagrado no seu dia a dia.
              </p>
              <p className="md:text-lg text-md text-amber-900 mb-8 leading-relaxed">
                Comece sua jornada espiritual hoje mesmo, com orientações simples e conteúdo que nutre a alma.
              </p>
              <a href="/home/tutorial" className="inline-block bg-amber-700 md:text-lg text-md hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg">

                Começar a rezar o terço
              </a>
            </div>
            <div className="hidden md:block">
              <img src="img2/img-terco.jpg" alt="Mãos em oração" className="rounded-lg shadow-md opacity-90" />
            </div>
          </section>

          <div className='bg-bible'>
            {/* <section className='abso p-8 border-3 bg-transparent border-gray-200 rounded-lg shadow-sm'>
              <div className='backdrop-blur-xl p-5 rounded-xl'>
                <h2 className="text-2xl md:text-3xl text-verse  mb-6 text-center backdrop-blur-xl">Verso do dia</h2>
                <div className='md:text-xl text-verse text-md leading-relaxed mb-6'>{verseText}</div>
              </div>
            </section>
            <div className='bg-amber-50 py-10'></div> */}

            <section className="bg-transparent bg-opacity-70 p-10 border-3 border-gray-200 rounded-lg shadow-sm">
              <div className='backdrop-blur-xl p-5 rounded-xl'>
                <h2 className="text-2xl md:text-3xl mb-6 text-center text-verse">Reflexão</h2>
                <blockquote className="text-verse md:text-lg text-md leading-relaxed mb-6">
                  {prayerText}
                </blockquote>
                <p className=" text-right md:text-lg text-md text-verse">- {prayerOfTheDay.prayer.ref}</p>
              </div>
            </section>
          </div>
        </main>
      </div>

    </>
  )
}

export default Main
