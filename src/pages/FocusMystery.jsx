import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mysteriesData as focusData } from '../data/mysteries';

export default function FocusMystery() {
  const { tipo, id } = useParams();
  const navigate = useNavigate();
  
  const typeKey = tipo?.toLowerCase() || 'gozosos';
  const data = focusData[typeKey];
  
  const currentId = parseInt(id) || 1;
  const currentMysteryIndex = currentId - 1;
  const mystery = data?.mysteries[currentMysteryIndex];

  // We are counting beads. 10 Ave Marias per mystery.
  const [beadIndex, setBeadIndex] = useState(1); // Starting at 1

  const handleNext = () => {
    if (beadIndex < 10) {
      setBeadIndex(beadIndex + 1);
    } else {
      if (currentId < 5) {
        setBeadIndex(1); // Reset beads for next mystery
        navigate(`/home/misterio/foco/${typeKey}/${currentId + 1}`);
      } else {
        // finished
        navigate('/home/misterio');
      }
    }
  };

  const handlePrevMystery = () => {
    if (currentId > 1) {
      navigate(`/home/misterio/foco/${typeKey}/${currentId - 1}`);
    } else {
      navigate('/home/misterio');
    }
  };

  if (!data || !mystery) {
    return <div>Mistério não encontrado</div>;
  }

  return (
    <div className="focus-mode-container" style={{ '--accent': data.color, '--focus-bg': data.bg }}>
      <header className="focus-header">
        {data.title}
      </header>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentId + '-' + beadIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
        >
          <div className="focus-mystery-title">
            <h1>{mystery.name}</h1>
          </div>
          
          <div className="focus-meditation">
            <p>{mystery.text}</p>
          </div>
          
          <div className="focus-prayer-card">
            <p>
              Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus.<br/><br/>
              Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="focus-bottom-bar">
        <div className="beads-counter">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className={`bead ${i < beadIndex ? 'filled' : ''}`}
              onClick={() => setBeadIndex(i + 1)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        
        <div className="focus-navigation">
          <button className="btn-nav btn-prev" onClick={handlePrevMystery}>
            ← Mistério Anterior
          </button>
          <button className="btn-nav btn-next" onClick={handleNext}>
            {beadIndex < 10 ? 'Próxima Ave Maria →' : (currentId === 5 ? 'Concluir →' : 'Próximo Mistério →')}
          </button>
        </div>
      </div>
    </div>
  );
}
