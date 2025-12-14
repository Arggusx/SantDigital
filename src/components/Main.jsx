
import React from 'react'

const Main = () => {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=EB+Garamond:wght@400;500;700&display=swap');
      </style>
      <body class="bg-amber-100 font-serif">
        <custom-navbar></custom-navbar>

        <main class="max-w-4xl mx-auto px-4 py-8 md:py-16">
          <section class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-cursive text-amber-800 mt-10 mb-4 italic">Digital Sanctum</h1>
            <p class="text-xl md:text-2xl text-amber-700 mb-8">Um refúgio digital para oração e reflexão espiritual</p>
            <div class="w-24 h-1 bg-amber-300 mx-auto mb-12"></div>
          </section>
          <section class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p class="text-lg text-amber-900 mb-6 leading-relaxed">
                Bem-vindo ao seu santuário digital, onde a paz encontra a tecnologia. Aqui, oferecemos um espaço tranquilo para fortalecer sua vida espiritual através da oração e meditação.
              </p>
              <p class="text-lg text-amber-900 mb-6 leading-relaxed">
                Em um mundo acelerado, reservar momentos para conexão divina é essencial. Nosso propósito é facilitar esse encontro com o sagrado no seu dia a dia.
              </p>
              <p class="text-lg text-amber-900 mb-8 leading-relaxed">
                Comece sua jornada espiritual hoje mesmo, com orientações simples e conteúdo que nutre a alma.
              </p>
              <a href="#" class="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg">
                Começar a rezar o terço
              </a>
            </div>
            <div class="hidden md:block">
              <img src="img2/img-terco.jpg" alt="Mãos em oração" class="rounded-lg shadow-md opacity-90" />
            </div>
          </section>

          <section class="bg-white bg-opacity-70 p-8 rounded-lg shadow-sm mb-16">
            <h2 class="text-2xl md:text-3xl text-amber-800 mb-6 text-center">Oração do Dia</h2>
            <blockquote class="text-amber-900 italic text-lg leading-relaxed mb-6">
              "Senhor, fazei-me instrumento de vossa paz. Onde houver ódio, que eu leve o amor; onde houver ofensa, que eu leve o perdão; onde houver discórdia, que eu leve a união."
            </blockquote>
            <p class="text-amber-700 text-right">- São Francisco de Assis</p>
          </section>
        </main>
      </body>

    </>
  )
}

export default Main
