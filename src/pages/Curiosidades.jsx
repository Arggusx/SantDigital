import { useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { motion } from 'framer-motion';

/* ── Expanded FAQ content ── */
const facts = [
  [
    'Os 7 Sacramentos',
    'Por que são sete os sacramentos?',
    'A Igreja reconhece sete sinais sacramentais instituídos por Cristo: Batismo, Confirmação (Crisma), Eucaristia, Penitência (Confissão), Unção dos Enfermos, Ordem e Matrimônio. Eles acompanham os momentos centrais da vida cristã, desde o nascimento até a morte, e são canais da graça divina para a santificação dos fiéis.',
  ],
  [
    'Os 7 Sacramentos',
    'O que é a Eucaristia?',
    'É o centro e o ápice da vida cristã: a celebração em que a Igreja faz memória da Páscoa de Cristo. Na Eucaristia, o pão e o vinho são consagrados e se tornam o Corpo e o Sangue de Jesus Cristo. Participar da Eucaristia é alimentar-se da presença real de Cristo.',
  ],
  [
    'Os 7 Sacramentos',
    'Qual a diferença entre Batismo e Crisma?',
    'O Batismo é o primeiro sacramento, que nos torna membros da Igreja e apaga o pecado original. A Crisma (Confirmação) completa a graça do Batismo, fortalecendo o cristão com os dons do Espírito Santo para testemunhar a fé com maturidade.',
  ],
  [
    'Os 7 Sacramentos',
    'O que é o sacramento da Confissão?',
    'Também chamado de Penitência ou Reconciliação, é o sacramento pelo qual os pecados cometidos após o Batismo são perdoados. O penitente confessa seus pecados ao sacerdote, recebe a absolvição e uma penitência para reparar o mal causado.',
  ],
  [
    'História da Igreja',
    'Como nasceu a tradição do terço?',
    'A oração do terço amadureceu ao longo dos séculos como uma forma popular de meditar os acontecimentos da vida de Jesus junto com Maria. A tradição atribui ao dominicano São Domingos de Gusmão (século XIII) a difusão do Rosário. Em 2002, São João Paulo II acrescentou os Mistérios Luminosos.',
  ],
  [
    'História da Igreja',
    'O que foi o Concílio Vaticano II?',
    'Realizado entre 1962 e 1965, o Concílio Vaticano II foi o 21º concílio ecumênico da Igreja. Convocado por São João XXIII e concluído por São Paulo VI, promoveu a renovação litúrgica, o diálogo ecumênico, e uma maior participação dos leigos na vida da Igreja.',
  ],
  [
    'História da Igreja',
    'Quem foi o primeiro Papa?',
    'São Pedro, apóstolo de Jesus Cristo, é considerado o primeiro Papa da Igreja Católica. Jesus disse a ele: "Tu és Pedro, e sobre esta pedra edificarei a minha Igreja" (Mt 16,18). Pedro liderou a comunidade cristã primitiva e foi martirizado em Roma.',
  ],
  [
    'Símbolos e Liturgia',
    'Por que o calendário litúrgico usa cores?',
    'As cores litúrgicas tornam visível o caráter de cada celebração e tempo do ano: o verde simboliza a esperança (Tempo Comum), o roxo a conversão e a penitência (Advento e Quaresma), o branco a alegria e a pureza (Natal, Páscoa), o vermelho o fogo do Espírito e o martírio (Pentecostes), e o rosa a alegria em meio à penitência.',
  ],
  [
    'Símbolos e Liturgia',
    'O que significa o Tempo Comum?',
    'É o período mais longo do Ano Litúrgico, em que não celebramos um mistério específico da vida de Cristo (como no Natal ou na Páscoa), mas a globalidade de sua mensagem e missão. A cor verde é usada como sinal de esperança e vida.',
  ],
  [
    'Símbolos e Liturgia',
    'Por que os católicos usam imagens?',
    'As imagens (pinturas, vitrais, estátuas) não são adoradas, mas veneradas como lembranças de Cristo, de Maria e dos Santos. Elas são como "fotografias de família" que ajudam a concentrar a mente na oração e lembram os exemplos de santidade que devemos seguir.',
  ],
  [
    'Dogmas e Tradições',
    'O que é a Quaresma?',
    'A Quaresma são os 40 dias de preparação para a Páscoa, começando na Quarta-feira de Cinzas. É um tempo de penitência, jejum, oração e caridade, recordando os 40 dias que Jesus passou no deserto. A cor litúrgica é o roxo.',
  ],
  [
    'Dogmas e Tradições',
    'Qual a diferença entre heresia e dogma?',
    'Dogma é uma verdade de fé formalmente definida e ensinada pela Igreja como sendo divinamente revelada (inquestionável para os católicos). Heresia é a negação obstinada, após o batismo, de uma verdade que se deve crer com fé divina e católica, ou seja, de um dogma.',
  ],
  [
    'Dogmas e Tradições',
    'O que é a devoção ao Sagrado Coração de Jesus?',
    'É uma devoção centrada no amor misericordioso de Deus, representado pelo coração de Jesus coroado de espinhos e ardente em chamas. Santa Margarida Maria Alacoque recebeu revelações sobre esta devoção no século XVII. O mês de junho é dedicado ao Sagrado Coração.',
  ],
];

const allCategories = ['Todos', ...new Set(facts.map((f) => f[0]))];

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.35,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

export default function Curiosidades() {
  const [category, setCategory] = useState('Todos');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(null);

  const shown = useMemo(() => {
    return facts.filter((f) => {
      const matchesCat = category === 'Todos' || f[0] === category;
      const matchesQuery = f
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="page">
      <span className="eyebrow">Conhecer para amar</span>
      <h1 className="section-title">Central de Conhecimento</h1>
      <p className="lead">
        Respostas simples para dúvidas frequentes sobre a fé católica, 
        história e tradições da Igreja.
      </p>

      {/* ── Search bar ── */}
      <div className="search-wrapper" style={{ marginTop: '1.5rem' }}>
        <Search size={16} className="search-icon" />
        <input
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar dúvidas e curiosidades..."
        />
      </div>

      {/* ── Category pills ── */}
      <div className="faq-categories">
        {allCategories.map((c) => (
          <button
            className={`category ${category === c ? 'active' : ''}`}
            onClick={() => setCategory(c)}
            key={c}
          >
            {c}
          </button>
        ))}
      </div>

      {/* ── FAQ items ── */}
      <div>
        {shown.map(([cat, title, text], i) => (
          <motion.div
            className="faq-item"
            key={title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={`accordion ${open === i ? 'open' : ''}`}>
              <button
                className="accordion-trigger"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>
                  <small className="faq-category-label">{cat}</small>
                  {title}
                </span>
                <ChevronDown size={18} className="accordion-icon" />
              </button>
              <div className="accordion-content">
                <div>
                  <p className="accordion-body">{text}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {shown.length === 0 && (
          <p className="lead" style={{ textAlign: 'center', marginTop: '2rem' }}>
            Nenhuma curiosidade encontrada.
          </p>
        )}
      </div>
    </main>
  );
}
