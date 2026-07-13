import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
};

export default function Home() {
  return (
    <main className="page">
      {/* ── Hero Section ── */}
      <motion.section
        className="home-hero"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.div className="hero-copy" variants={fadeUp}>
          <span className="eyebrow">Um instante para o sagrado</span>
          <h1 className="display">
            Reze com calma.
            <br />
            Viva com fé.
          </h1>
          <p className="lead">
            Um refúgio diário para o silêncio, a contemplação dos mistérios
            e a Palavra que sustenta o caminho.
          </p>
          <Link className="btn" to="/home/oracoes">
            Começar a rezar o terço
            <ArrowRight size={17} />
          </Link>
        </motion.div>

        <motion.div className="hero-image" variants={fadeUp}>
          <img
            src="/img2/img-terco.jpg"
            alt="Mãos segurando um terço em oração"
          />
        </motion.div>
      </motion.section>

      {/* ── Daily Inspiration Placeholder ── */}
      <motion.section
        className="reflection"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <span className="eyebrow">Inspiração Diária</span>
        
        <blockquote style={{ maxWidth: '800px', margin: '2rem auto 1rem' }}>
          &ldquo;Não vos perturbeis, não temais coisa alguma. Tudo passa, só Deus não muda. A paciência tudo alcança; quem a Deus tem nada lhe falta: só Deus basta.&rdquo;
        </blockquote>
        <cite>— Santa Teresa de Ávila</cite>
      </motion.section>
    </main>
  );
}
