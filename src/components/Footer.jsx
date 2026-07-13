import { Link } from 'react-router-dom';
import { Cross } from 'lucide-react';

const footerLinks = [
  ['Mistérios', '/home/misterio'],
  ['Leituras', '/home/leituras'],
  ['Terço e Orações', '/home/oracoes'],
  ['Curiosidades', '/home/curiosidades'],
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">Oratio Daily</div>
        <p className="footer-text">
          Um espaço para cultivar silêncio, oração e esperança.
          Que cada visita seja um instante de paz no seu dia.
        </p>

        <div className="footer-divider">
          <Cross size={14} />
        </div>

        <p className="footer-copy">
          © {year} Oratio Daily · Conteúdo litúrgico fornecido por Canção Nova.
        </p>
      </div>
    </footer>
  );
}
