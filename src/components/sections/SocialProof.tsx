import { motion } from "framer-motion";

export const SocialProof = () => {
  const testimonials = [
    { text: "Finalmente um app que eu não abandono na primeira semana.", author: "Matheus A.", role: "Dev" },
    { text: "Aquele susto quando você manda o áudio e ele te diz que a cota de iFood zera amanhã.", author: "Carla T.", role: "Designer" },
    { text: "Simples. Mando a fatura e não penso mais nisso.", author: "Roberto F.", role: "Advogado" },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#050505] px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-text uppercase mb-12 md:mb-16 text-center">
          +41 mil pessoas sentindo o <span className="text-brand-primary border-b-4 border-brand-primary pb-1">atrito</span> todo dia.
        </h2>

        <div className="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="min-w-[280px] xs:min-w-[320px] md:min-w-[400px] bg-brand-surface border border-brand-surface-var p-6 md:p-8 flex-shrink-0 snap-center rounded-none relative"
            >
              <div className="absolute -top-4 -left-4 text-6xl text-brand-surface-var font-display">"</div>
              <p className="font-body text-lg md:text-xl text-brand-text mb-8 relative z-10 font-medium">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-surface-high border border-brand-surface-var rounded-full flex items-center justify-center font-display text-brand-primary text-xl">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-brand-text uppercase tracking-widest">{t.author}</p>
                  <p className="font-body text-brand-muted text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
