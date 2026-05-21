import { Button } from "../ui/Button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 py-8 bg-transparent">
      <div className="font-display text-4xl uppercase tracking-tighter text-brand-primary">
        ATRITO
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <a className="font-mono text-[11px] uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors" href="#funcionalidades">
          Funcionalidades
        </a>
        <a className="font-mono text-[11px] uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors" href="#precos">
          Preços
        </a>
        <a className="font-mono text-[11px] uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors" href="#seguranca">
          Segurança
        </a>
      </div>
      <Button 
        variant="primary" 
        className="hidden md:flex px-6 py-2 text-xs border-none"
      >
        Começar Grátis
      </Button>
    </nav>
  );
};
