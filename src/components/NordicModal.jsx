import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { mysteriesData } from '../data/mysteries';

export default function NordicModal({ isOpen, onClose, mysteryType }) {
  if (!mysteryType) return null;
  
  const data = mysteriesData[mysteryType];
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div 
            className="modal-backdrop"
            style={{ position: 'absolute', inset: 0, zIndex: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="modal-content nordic-modal"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={{ '--accent': data.color }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Fechar">
              <X size={24} />
            </button>
            
            <div className="nordic-header">
              <h2>Rosário das Cláusulas</h2>
              <h3>{data.title}</h3>
              <p className="nordic-subtitle">Tradição Nórdica — Roteiro Completo</p>
            </div>
            
            <div className="nordic-body">
              {data.mysteries.map((m) => (
                <div key={m.id} className="nordic-mystery-section">
                  <h4 className="nordic-mystery-title">{m.name}</h4>
                  <p className="nordic-meditation">{m.text}</p>
                  
                  <div className="nordic-prayer-block">
                    <p className="nordic-our-father">
                      <strong>Pai Nosso</strong> que estais nos céus, santificado seja o vosso nome; venha a nós o vosso Reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.
                    </p>
                    
                    <div className="nordic-ave-marias">
                      {[...Array(10)].map((_, i) => (
                        <p key={i} className="nordic-ave-maria">
                          <span className="nordic-bead-number">{i + 1}.</span> Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus,
                          <strong className="nordic-clause"> {m.clause} </strong>
                          Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.
                        </p>
                      ))}
                    </div>
                    
                    <p className="nordic-glory">
                      <strong>Glória ao Pai</strong> e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
