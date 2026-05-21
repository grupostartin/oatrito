import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 bg-black bg-opacity-50 border-t border-brand-surface-var z-50 relative">
      <div className="font-display text-4xl text-brand-primary uppercase">
        ATRITO
      </div>
      
      <div className="font-mono text-[9px] uppercase tracking-widest text-brand-muted text-center md:text-left">
        © {new Date().getFullYear()} ATRITO. O BOLETO DA DOPAMINA CHEGOU.
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 font-mono text-[9px] uppercase tracking-widest">
        <a className="text-brand-muted hover:text-brand-primary transition-colors" href="#">Termos</a>
        <a className="text-brand-muted hover:text-brand-primary transition-colors" href="#">Privacidade</a>
        <a className="text-brand-muted hover:text-brand-primary transition-colors" href="#">Contato</a>
        <a className="text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-1" href="#">
          WhatsApp
        </a>
        <a className="text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-1" href="#">
          Insta
        </a>
      </div>
    </footer>
  );
};
