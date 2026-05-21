import { motion } from "framer-motion";

export const Tension = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-16 bg-brand-bg border-t-2 border-brand-surface-var">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-brand-text uppercase mb-12 md:mb-16 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          Você sabe <span className="text-brand-primary">quanto gastou</span> esse mês?
        </h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={item} className="border-b border-brand-surface-var pb-6 md:pb-4 relative group flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-mono text-[10px] uppercase text-brand-primary block mb-1">01. A MENTIRA</h3>
            <p className="font-display text-2xl text-brand-text mb-4 mt-4">Dopamina vs Realidade</p>
            <p className="font-body text-sm italic text-brand-muted">"A compra é fácil, lisa, em um clique. A dor de pagar só vem 30 dias depois, mascarada em uma fatura indecifrável."</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="border-b border-brand-surface-var pb-6 md:pb-4 relative group flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-mono text-[10px] uppercase text-brand-primary block mb-1">02. A ILUSÃO</h3>
            <p className="font-display text-2xl text-brand-text mb-4 mt-4">Instagram vs Extrato</p>
            <p className="font-body text-sm italic text-brand-muted">"O estilo de vida projetado não cabe na planilha. Você gasta para pertencer, mas sofre sozinho olhando o saldo."</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="border-b border-brand-surface-var pb-6 md:pb-4 relative group flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-mono text-[10px] uppercase text-brand-primary block mb-1">03. A FALHA</h3>
            <p className="font-display text-2xl text-brand-text mb-4 mt-4">Planilha que não abre</p>
            <p className="font-body text-sm italic text-brand-muted">"Aquele app complexo de finanças que você baixou e nunca abriu. Organização sem fricção no dia a dia não funciona."</p>
          </motion.div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-brand-primary text-center mt-16 md:mt-24 text-sm sm:text-base md:text-lg border-2 border-brand-primary p-4 md:p-6 max-w-4xl mx-auto"
        >
          O ATRITO não te pune. Ele só coloca um segundo de consciência entre você e o próximo gasto.
        </motion.p>
      </div>
    </section>
  );
};
