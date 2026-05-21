import { motion } from "framer-motion";

export const HowItWorks = () => {
  return (
    <section className="py-32 bg-brand-primary text-brand-bg relative border-b-[16px] border-brand-bg">
      <div className="px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          <div className="md:col-span-5">
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-8">
              Como o Atrito Funciona
            </h2>
            <p className="font-mono font-bold text-lg border-l-4 border-brand-bg pl-4 mb-8">
              DIRETO NO WHATSAPP. SEM APP NOVO. SEM DESCULPAS.
            </p>
          </div>
          
          <div className="md:col-span-7 space-y-12">
            {[
              { num: "1", title: "MANDA", text: "Gastou? Manda um áudio, foto ou texto pro Atrito no WhatsApp na hora. 'Uber 35 reais'." },
              { num: "2", title: "CATEGORIZA", text: "A IA lê a porrada, categoriza instantaneamente e devolve o impacto real no seu orçamento." },
              { num: "3", title: "ENXERGA", text: "No fim do mês, um resumo brutal e honesto. Sem gráficos fofos, apenas a verdade nua e crua." }
            ].map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <span className="font-display text-6xl text-brand-bg/50 w-16 leading-none pt-2">{step.num}</span>
                <div>
                  <h3 className="font-display text-4xl mb-2">{step.title}</h3>
                  <p className="font-body text-xl font-medium">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
