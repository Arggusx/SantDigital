import { motion } from 'framer-motion';

const mysteries = [
  {
    name: 'Gozosos',
    day: 'Segundas e sábados · domingos do Advento',
    color: '#6F8D64',
    image: '/img2/gozosos.jpg',
    items: [
      'A Anunciação do anjo a Maria.',
      'A Visitação de Maria a Isabel.',
      'O nascimento de Jesus em Belém.',
      'A apresentação de Jesus no Templo.',
      'O encontro de Jesus entre os doutores.',
    ],
  },
  {
    name: 'Dolorosos',
    day: 'Terças e sextas · domingos da Quaresma',
    color: '#A95041',
    image: '/img2/dolorosos.jpg',
    items: [
      'A agonia de Jesus no Horto.',
      'A flagelação de Jesus.',
      'A coroação de espinhos.',
      'Jesus carrega a cruz.',
      'A crucificação e morte de Jesus.',
    ],
  },
  {
    name: 'Luminosos',
    day: 'Quintas-feiras',
    color: '#BF8C26',
    image: '/img2/luminosos.png',
    items: [
      'O batismo de Jesus no Jordão.',
      'As bodas de Caná.',
      'O anúncio do Reino de Deus.',
      'A Transfiguração de Jesus.',
      'A instituição da Eucaristia.',
    ],
  },
  {
    name: 'Gloriosos',
    day: 'Quartas e domingos · Tempo Pascal',
    color: '#6D7899',
    image: '/img2/gloriosos.jpg',
    items: [
      'A Ressurreição de Jesus.',
      'A Ascensão de Jesus ao Céu.',
      'A vinda do Espírito Santo.',
      'A Assunção de Maria.',
      'A coroação de Maria no Céu.',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.45,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

export default function Misterios() {
  return (
    <main className="page">
      <span className="eyebrow">Santo Terço</span>
      <h1 className="section-title">Mistérios para cada dia</h1>
      <p className="lead">
        Contemple a vida de Cristo sob o olhar de Maria. Cada conjunto de
        mistérios acompanha um ritmo da semana.
      </p>

      <section className="card-grid">
        {mysteries.map((mystery, i) => (
          <motion.article
            className="mystery-card"
            style={{ '--accent': mystery.color }}
            key={mystery.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mystery-content">
              <p className="day">{mystery.day}</p>
              <h2>{mystery.name}</h2>
              <ol>
                {mystery.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div className="mystery-image">
              <img
                src={mystery.image}
                alt={`Mistérios ${mystery.name}`}
                loading="lazy"
              />
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
