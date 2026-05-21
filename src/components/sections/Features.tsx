import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    { title: "Registro Multimodal", desc: "Fala, digita ou fotografa o recibo. A IA entende os três." },
    { title: "Categorização Automática", desc: "Sem você escolher categoria na mão. A IA deduz." },
    { title: "Lembretes de Boletos", desc: "Nunca mais pague multa por esquecer a data." },
    { title: "Limites por Categoria", desc: "Você define. A IA avisa antes de estourar a cota." },
    { title: "Gestão Compartilhada", desc: "Casal, família, sócio — todo mundo no mesmo painel." },
    { title: "Relatório Mensal PDF", desc: "Recebe no WhatsApp todo mês. Lê ou ignora — sua escolha." },
    { title: "Metas de Investimento", desc: "Viagem, reserva, sonho. O ATRITO te ajuda a chegar lá." },
  ];

  return (
    <section id="funcionalidades" className="py-32 bg-brand-bg px-4 md:px-16 border-b-2 border-brand-surface-var">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-brand-text uppercase mb-16">
          Sem firula. <span className="text-brand-primary">O que importa.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-brand-surface-var bg-brand-bg/50">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border-r border-b border-brand-surface-var group hover:bg-brand-surface transition-colors duration-300"
            >
              <h3 className="font-mono text-[9px] text-brand-muted uppercase block mb-2 tracking-widest">
                {feature.title}
              </h3>
              <p className="font-body text-xs font-bold uppercase text-brand-text group-hover:text-brand-primary transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
