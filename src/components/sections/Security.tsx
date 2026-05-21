import { motion } from "framer-motion";
import { Lock, Shield, EyeOff } from "lucide-react";

export const Security = () => {
  return (
    <section id="seguranca" className="py-20 md:py-32 bg-brand-bg px-4 md:px-16 border-t border-brand-surface-var">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-brand-text uppercase mb-12 md:mb-16 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          Seus dados são seus. <span className="text-brand-primary">Ponto.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 max-w-4xl mx-auto md:mx-0">
          <div className="flex flex-col items-center text-center md:items-start md:text-left border-t-2 md:border-t-0 md:border-l-2 border-brand-primary pt-6 md:pt-0 pl-0 md:pl-6">
            <Lock className="text-brand-primary mb-6" size={32} />
            <h3 className="font-mono text-sm uppercase tracking-widest font-bold text-brand-text mb-2">WhatsApp Criptografado</h3>
            <p className="font-body text-brand-muted">Criptografia ponta a ponta nativa do WhatsApp. Ninguém no meio lê suas mensagens.</p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left border-t-2 md:border-t-0 md:border-l-2 border-brand-surface-var hover:border-brand-primary transition-colors pt-6 md:pt-0 pl-0 md:pl-6">
            <EyeOff className="text-brand-muted mb-6" size={32} />
            <h3 className="font-mono text-sm uppercase tracking-widest font-bold text-brand-text mb-2">Sem Treinamento</h3>
            <p className="font-body text-brand-muted">Seu extrato não alimenta os nossos algoritmos publicamente. Zero exploração dos seus dados pessoais.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
