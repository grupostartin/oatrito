import { motion } from "framer-motion";

export const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-primary text-brand-bg relative border-b-[16px] border-brand-bg">
      <div className="px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-tight md:leading-none mb-6 text-center md:text-left">
              Como o Atrito Funciona
            </h2>
            <p className="font-mono font-bold text-sm sm:text-lg border-y-2 md:border-y-0 md:border-l-4 border-brand-bg py-2 md:py-0 pl-0 md:pl-4 mb-8 text-center md:text-left max-w-md">
              DIRETO NO WHATSAPP. SEM APP NOVO. SEM DESCULPAS.
            </p>
          </div>
          
          <div className="md:col-span-7 space-y-8 md:space-y-12">
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
                className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 md:gap-6"
              >
                <span className="font-display text-5xl md:text-6xl text-brand-bg/50 w-auto md:w-16 leading-none pt-0 md:pt-2">{step.num}</span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl mb-2">{step.title}</h3>
                  <p className="font-body text-base md:text-xl font-medium">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
