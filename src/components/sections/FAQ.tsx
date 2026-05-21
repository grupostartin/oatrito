import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    { q: "Como funciona a integração com o WhatsApp?", a: "Você adiciona o número do Atrito aos seus contatos. Cada gasto, você simplesmente manda uma mensagem como se estivesse conversando com um amigo." },
    { q: "Posso mandar foto ou áudio?", a: "Sim. Se você está com pressa, manda um áudio. Se está no restaurante, manda a foto da notinha. A IA processa e extrai o valor e a categoria de tudo." },
    { q: "O ATRITO movimenta meu dinheiro?", a: "Nunca. Nosso sistema organiza apenas os dados dos gastos que você nos envia pelo WhatsApp." },
    { q: "Tem modo casal/família?", a: "Sim, no plano Zen. Vocês compartilham uma central onde os gastos de ambos aparecem organizados e somam no orçamento mensal da casa." },
    { q: "Como cancelo?", a: "Com uma mensagem: 'Quero cancelar'. Sem ligação, sem choro." },
  ];

  return (
    <section className="py-32 bg-brand-bg px-4 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-brand-text uppercase mb-16 text-center">
          Perguntas Frequentes
        </h2>

        <div className="space-y-2 relative">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-surface-var"></div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-surface-var bg-brand-surface relative overflow-hidden group ml-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-brand-surface-high transition-colors"
      >
        <span className="font-body font-medium text-brand-text pr-8">{question}</span>
        <span className="text-brand-primary flex-shrink-0">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 border-t border-brand-surface-var"
          >
            <p className="font-body text-brand-muted py-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
