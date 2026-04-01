import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Tutorial = () => {
  return (
    <>
      <main className='max-w-4xl mx-auto py-10 md:py-16 relative'>
        <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-cursive text-amber-800 md:mt-15 mt-20 mb-4 italic">Terço</h1>
        <p className="text-md md:text-xl text-amber-700 mb-8">Rezar o Terço todos os dias, como Nossa Senhora pediu em Fátima, é um compromisso de amor e confiança em Deus. Essa oração nos permite meditar sobre a vida de Cristo, fortalecendo nossa conexão espiritual e nos aproximando de Sua presença em nosso dia a dia. Além de ser uma demonstração de fé e devoção a Nossa Senhora, o Terço também é um ato que une famílias e comunidades na oração, fortalecendo os laços espirituais e trazendo bênçãos para todos.</p>
        <div className="w-24 h-1 bg-amber-300 mx-auto mb-12"></div>
      </section>
        <div className='absolute left-4 md:left-1/2 bg-[radial-gradient(circle_at_50%_-20%,_rgba(120,119,198,0.3),_transparent)] pointer-events-none'></div>
      </main>
    </>
      
  )
}

export default Tutorial
