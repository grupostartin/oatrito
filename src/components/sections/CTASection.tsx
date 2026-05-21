import { Button } from "../ui/Button";
import { MoveRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-primary text-black px-4 md:px-16 text-center relative overflow-hidden">
      {/* Background text outline for artistic effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-bg/5 font-display text-[100px] sm:text-[180px] md:text-[250px] whitespace-nowrap pointer-events-none z-0">
        ATRITO
      </div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="font-display text-3xl sm:text-5xl md:text-7xl uppercase mb-6 font-black tracking-tight leading-tight">
          Seu próximo gasto por impulso vai doer. E tá tudo bem.
        </h2>
        <p className="font-mono text-base sm:text-lg font-bold uppercase tracking-widest mb-12 border-y-2 md:border-y-0 md:border-l-4 border-brand-bg py-2 md:py-0 pl-0 md:pl-4 mx-auto max-w-xl text-center md:text-left">
          O ATRITO NÃO TE IMPEDE DE GASTAR. SÓ TE FAZ PERCEBER.
        </p>
        
        <Button className="w-full md:w-auto bg-black text-brand-primary hover:bg-transparent hover:text-black border-2 border-black px-8 py-4 md:px-12 md:py-6 text-lg md:text-2xl mt-4">
          COMEÇAR AGORA <MoveRight size={28} />
        </Button>
        <p className="font-mono font-bold mt-4 text-sm tracking-widest">3 DIAS GRÁTIS</p>
      </div>
    </section>
  );
};
