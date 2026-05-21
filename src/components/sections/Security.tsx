import { motion } from "framer-motion";
import { Lock, Shield, EyeOff } from "lucide-react";

export const Security = () => {
  return (
    <section id="seguranca" className="py-32 bg-brand-bg px-4 md:px-16 border-t border-brand-surface-var">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-brand-text uppercase mb-16 max-w-2xl">
          Seus dados são seus. <span className="text-brand-primary">Ponto.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          <div className="border-l-2 border-brand-primary pl-6">
            <Lock className="text-brand-primary mb-6" size={32} />
            <h3 className="font-mono text-sm uppercase tracking-widest font-bold text-brand-text mb-2">WhatsApp Criptografado</h3>
            <p className="font-body text-brand-muted">Criptografia ponta a ponta nativa do WhatsApp. Ninguém no meio lê suas mensagens.</p>
          </div>

          <div className="border-l-2 border-brand-surface-var hover:border-brand-primary transition-colors pl-6">
            <EyeOff className="text-brand-muted mb-6" size={32} />
            <h3 className="font-mono text-sm uppercase tracking-widest font-bold text-brand-text mb-2">Sem Treinamento</h3>
            <p className="font-body text-brand-muted">Seu extrato não alimenta os nossos algoritmos publicamente. Zero exploração dos seus dados pessoais.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
