import { useEffect, useState } from 'react';
import { Maximize2, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Fallback readings when API is unavailable ── */
const fallback = {
  primeiraLeitura: [
    {
      referencia: 'Is 55, 6-9',
      titulo: 'Buscai o Senhor enquanto pode ser achado',
      texto:
        'Buscai o Senhor enquanto pode ser achado; invocai-o enquanto está perto. Que o ímpio abandone seu caminho e o homem mau, seus pensamentos; volte ao Senhor, que terá piedade dele.',
    },
  ],
  salmo: [
    {
      referencia: 'Sl 62',
      titulo: 'A minha alma tem sede de Deus',
      texto:
        'Sois, ó Senhor, o meu Deus! Desde a aurora ansioso vos busco. A minha alma tem sede de vós.',
    },
  ],
  evangelho: [
    {
      referencia: 'Mt 11, 28',
      titulo: 'Vinde a mim',
      texto:
        'Vinde a mim, todos vós que estais cansados e fatigados sob o peso dos vossos fardos, e eu vos darei descanso.',
    },
  ],
  homilia: [
    {
      referencia: 'Reflexão Diária',
      titulo: 'Acolhendo a Palavra',
      texto: 'Esta é uma reflexão de exemplo para a homilia diária. A verdadeira será carregada em breve.',
    }
  ]
};

const tabNames = {
  primeiraLeitura: '1ª Leitura',
  salmo: 'Salmo',
  segundaLeitura: '2ª Leitura',
  evangelho: 'Evangelho',
  homilia: 'Homilia',
};

const liturgicalColors = {
  Verde: '#5B8060',
  Vermelho: '#AE463D',
  Roxo: '#73537B',
  Branco: '#B28A42',
  Rosa: '#B95E78',
};

export default function Leituras() {
  const [data, setData] = useState(null);
  const [liturgia, setLiturgia] = useState('Liturgia diária');
  const [color, setColor] = useState('#B84A13');
  const [active, setActive] = useState('evangelho');
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    // 1. Fetch liturgia from Canção Nova
    const fetchLiturgia = fetch('https://liturgia.up.railway.app/v2/')
      .then((r) => r.json());

    // 2. Fetch Homilia from local API
    const fetchHomilia = fetch(`${import.meta.env.VITE_API_ORACAO}/api/daily-reflection`)
      .then((r) => r.json())
      .catch(() => null); // Silent fallback

    Promise.allSettled([fetchLiturgia, fetchHomilia]).then((results) => {
      let combinedData = { ...fallback };
      
      // Handle Liturgia
      if (results[0].status === 'fulfilled' && results[0].value) {
        const d = results[0].value;
        combinedData = { ...combinedData, ...d.leituras };
        setLiturgia(d.liturgia || 'Liturgia diária');
        setColor(liturgicalColors[d.cor] || '#B84A13');
      }

      // Handle Homilia
      if (results[1].status === 'fulfilled' && results[1].value) {
        const homiliaData = results[1].value;
        combinedData.homilia = [
          {
            referencia: 'Homilia do Dia',
            titulo: homiliaData.title || 'Reflexão',
            texto: homiliaData.content || 'Sem reflexão disponível hoje.',
          }
        ];
      }

      setData(combinedData);
    });
  }, []);

  // Lock scroll when focus mode is active
  useEffect(() => {
    if (focus) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [focus]);

  /* ── Loading state ── */
  if (!data) {
    return (
      <main className="page">
        <div className="skeleton" style={{ width: '30%', height: '0.8rem', marginBottom: '0.6rem' }} />
        <div className="skeleton" style={{ width: '60%', height: '2.2rem', marginBottom: '1rem' }} />
        <div className="skeleton" style={{ width: '80%', height: '1rem', marginBottom: '2rem' }} />
        <div className="skeleton large" />
      </main>
    );
  }

  const available = Object.keys(tabNames).filter((k) => data[k] && data[k].length > 0);
  const reading = data[active]?.[0] || data[available[0]]?.[0];

  /* ── Reading card component ── */
  const ReadingCard = ({ expanded = false }) => (
    <article
      className="reading-card"
      style={{
        '--liturgical-color': color,
        fontSize: expanded ? '1.1rem' : undefined,
      }}
    >
      <p className="eyebrow" style={{ color }}>
        {tabNames[active]} {reading.referencia && `· ${reading.referencia}`}
      </p>
      <h2>{reading.titulo}</h2>
      <p className="reading-text">{reading.texto}</p>

      {active === 'evangelho' && (
        <p className="reading-text" style={{ marginTop: '1.5rem' }}>
          <strong>— Palavra da Salvação.</strong>
          <br />
          — Glória a vós, Senhor.
        </p>
      )}
    </article>
  );

  return (
    <>
    <main className="page">
      {/* ── Page header ── */}
      <span className="eyebrow">Palavra de hoje</span>
      <h1 className="section-title">{liturgia}</h1>
      <p className="lead">
        Acompanhe a liturgia e reserve alguns minutos para acolher a Palavra.
      </p>

      {/* ── Liturgical color indicator ── */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '0.75rem',
          fontSize: '0.82rem',
          color: color,
          fontWeight: 600,
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: color,
            display: 'inline-block',
          }}
        />
        Cor litúrgica - {Object.entries(liturgicalColors).find(([_, c]) => c === color)?.[0] || 'Desconhecida'}
      </div>

      {/* ── Tabs ── */}
      <div className="tabs">
        {available.map((k) => (
          <button
            className={`tab ${active === k ? 'active' : ''}`}
            style={active === k ? { '--liturgical-color': color } : {}}
            onClick={() => setActive(k)}
            key={k}
          >
            {tabNames[k]}
          </button>
        ))}
      </div>

      {/* ── Reading content ── */}
      <div className="reading-actions">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            style={{ width: '100%' }}
          >
            <ReadingCard />
          </motion.div>
        </AnimatePresence>

        <button
          className="btn-ghost btn"
          onClick={() => setFocus(true)}
          style={{ marginTop: '1rem' }}
        >
          <Maximize2 size={16} />
          Modo foco
        </button>
      </div>

      {/* ── Focus overlay ── */}
      <AnimatePresence>
        {focus && (
          <motion.div
            className="focus-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="focus-header">
              <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BookOpen size={15} />
                Modo foco
              </span>
              <button className="btn-ghost btn" onClick={() => setFocus(false)}>
                <X size={16} />
                Fechar
              </button>
            </div>
            <ReadingCard expanded />
          </motion.div>
        )}
      </AnimatePresence>
    <div style={{ marginTop: '2rem', fontSize: '0.9rem'}}>
      Fonte: Liturgia Diária - Canção Nova
    </div>
    </main>
    </>
  );
}
