import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function Feedback() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <div className="feedback">
        <button className="btn" onClick={() => setOpen(true)}>
          <MessageCircle size={16} />
          <span>Feedback</span>
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="modal-box">
            <div className="modal-header">
              <div>
                <h2 className="section-title" style={{ fontSize: '1.6rem', margin: 0 }}>
                  Sua voz importa
                </h2>
                <p className="lead" style={{ marginTop: '0.4rem' }}>
                  Conte-nos como tornar este momento de oração ainda melhor.
                </p>
              </div>
              <button
                className="menu-toggle"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
              >
                <X size={22} />
              </button>
            </div>

            <form action="https://formspree.io/f/mqapqejd" method="POST">
              <textarea
                name="message"
                required
                placeholder="Escreva sua sugestão..."
              />
              <div className="modal-actions">
                <button className="btn" type="submit">
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
