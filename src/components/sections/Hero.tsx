import { Button } from "../ui/Button";
import { MoveRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[1024px] flex flex-col pt-24 overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-primary z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 md:px-16">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[120px] leading-[0.8] md:text-[180px] text-brand-text uppercase tracking-tighter text-center mt-12 md:mt-24"
        >
          O ATRITO
        </motion.h1>
        
        <p className="font-mono text-[12px] text-brand-primary mt-4 tracking-[0.4em] uppercase font-bold text-center">
          O boleto da dopamina.
        </p>

        {/* WhatsApp Mockup */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-16 md:mt-24 w-full max-w-md bg-brand-surface border border-brand-surface-var rounded-2xl shadow-2xl p-6 relative z-20 md:rotate-2"
        >
          <div className="flex items-center gap-4 border-b border-brand-surface-var pb-4 mb-4">
            <MessageSquare className="text-brand-primary" size={32} />
            <div>
              <p className="font-display text-2xl text-brand-primary leading-none">Atrito Bot</p>
              <p className="font-mono text-xs text-brand-muted mt-1 uppercase">Online</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-end">
              <div className="bg-brand-surface-high text-brand-text p-3 font-body rounded-lg rounded-tr-none text-xs max-w-[80%]">
                Ifood 120,00 lanche da madrugada
                <div className="text-[10px] text-brand-muted mt-2 font-mono text-right">23:42</div>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-brand-primary text-black p-3 font-body rounded-lg rounded-tl-none text-xs max-w-[90%] font-medium">
                <p className="font-bold text-black mb-2 flex items-center gap-2">🔥 Gasto Registrado.</p>
                <p>Categoria: Alimentação / Impulso</p>
                <p className="mt-2 text-brand-error mix-blend-difference">Alerta: Você já ultrapassou o limite dessa categoria em 15%.</p>
                <div className="text-[10px] text-black/50 mt-2 font-mono">23:42</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 z-20 flex flex-col items-center gap-4">
          <Button href="#planos" className="w-[300px]">
            COMEÇAR AGORA <MoveRight size={24} />
          </Button>
          <p className="text-brand-muted font-body text-sm">3 dias grátis. Cancela quando quiser.</p>
        </div>
      </div>
    </section>
  );
};
