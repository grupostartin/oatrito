import { Button } from "../ui/Button";

export const Pricing = () => {
  return (
    <section id="precos" className="py-20 md:py-32 bg-brand-surface px-4 md:px-16 border-t-2 border-brand-primary">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-brand-text uppercase mb-6 text-center">
          Escolha o seu nível de <span className="text-brand-primary">atrito</span>
        </h2>
        
        <div className="flex items-center gap-4 mb-16 font-mono text-sm tracking-widest uppercase">
          <span className="text-brand-muted">Mensal</span>
          <div className="w-12 h-6 bg-brand-primary rounded-full relative cursor-pointer">
            <div className="w-4 h-4 bg-brand-bg absolute right-1 top-1 rounded-full"></div>
          </div>
          <span className="text-brand-text font-bold">Anual <span className="text-brand-primary border border-brand-primary px-2 py-0.5 ml-2 text-[10px]">-20%</span></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Card Premium */}
          <div className="bg-brand-bg border border-brand-surface-var p-6 sm:p-8 md:p-12 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-mono text-brand-primary tracking-widest uppercase text-sm mb-2 font-bold">Individual</h3>
            <p className="font-display text-3xl sm:text-4xl text-brand-text uppercase mb-8">Premium</p>
            
            <ul className="space-y-4 font-body text-brand-muted mb-12 border-t border-brand-surface-var pt-8 w-full text-left">
              <li className="flex gap-4"><span className="text-brand-primary">/</span> Registro ilimitado via WhatsApp</li>
              <li className="flex gap-4"><span className="text-brand-primary">/</span> Categorização IA automática</li>
              <li className="flex gap-4"><span className="text-brand-primary">/</span> Lembretes de boletos</li>
              <li className="flex gap-4"><span className="text-brand-primary">/</span> Limites por categoria em tempo real</li>
            </ul>

            <Button variant="outline" className="w-full text-base">Quero sentir o atrito</Button>
          </div>

          {/* Card Zen */}
          <div className="bg-brand-primary text-brand-bg border border-brand-primary p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col items-center md:items-start text-center md:text-left">
            <div className="absolute -right-12 -top-12 opacity-10">
              <span className="font-display text-[200px]">*</span>
            </div>
            
            <h3 className="font-mono tracking-widest uppercase text-sm mb-2 font-bold opacity-80">Compartilhado</h3>
            <p className="font-display text-3xl sm:text-4xl uppercase mb-8">Zen</p>
            
            <ul className="space-y-4 font-body font-medium mb-12 border-t border-brand-bg/20 pt-8 relative z-10 w-full text-left">
              <li className="flex gap-4"><span>/</span> Tudo do Premium</li>
              <li className="flex gap-4"><span>/</span> Gestão para casal/família</li>
              <li className="flex gap-4"><span>/</span> Metas compartilhadas</li>
              <li className="flex gap-4 flex-wrap"><span>/</span> Suporte humanizado</li>
            </ul>

            <Button variant="primary" className="w-full bg-brand-bg text-brand-primary border-brand-bg hover:bg-transparent hover:text-brand-bg hover:border-brand-bg z-10">
              Começar no Zen
            </Button>
          </div>
        </div>

        <p className="font-mono text-xs sm:text-sm text-brand-muted mt-12 text-center">
          * 3 dias grátis. Cancela quando quiser. Sem cartão no início.
        </p>
      </div>
    </section>
  );
};
