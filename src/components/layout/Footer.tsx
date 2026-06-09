import { Link } from "react-router-dom";
import { Zap, Linkedin, Instagram, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                WorkConnect
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Conectando talentos e oportunidades em TI através de inteligência artificial.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Para Estudantes</h4>
            <ul className="space-y-3">
              <li><Link to="/para-estudantes" className="text-white/70 hover:text-white text-sm transition-colors">Como Funciona</Link></li>
              <li><Link to="/vagas" className="text-white/70 hover:text-white text-sm transition-colors">Vagas</Link></li>
              <li><Link to="/trilhas" className="text-white/70 hover:text-white text-sm transition-colors">Trilhas de Desenvolvimento</Link></li>
              <li><Link to="/mentorias" className="text-white/70 hover:text-white text-sm transition-colors">Mentorias</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Para Empresas</h4>
            <ul className="space-y-3">
              <li><Link to="/para-empresas" className="text-white/70 hover:text-white text-sm transition-colors">Soluções</Link></li>
              <li><Link to="/planos" className="text-white/70 hover:text-white text-sm transition-colors">Planos e Preços</Link></li>
              <li><Link to="/cases" className="text-white/70 hover:text-white text-sm transition-colors">Cases de Sucesso</Link></li>
              <li><Link to="/contato" className="text-white/70 hover:text-white text-sm transition-colors">Contato Comercial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail className="w-4 h-4" />
                contato@workconnect.com.br
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-display font-semibold text-white mb-4">Institucional</h4>
              <ul className="space-y-3">
                <li><Link to="/sobre" className="text-white/70 hover:text-white text-sm transition-colors">Sobre Nós</Link></li>
                <li><Link to="/termos" className="text-white/70 hover:text-white text-sm transition-colors">Termos de Uso</Link></li>
                <li><Link to="/privacidade" className="text-white/70 hover:text-white text-sm transition-colors">Privacidade</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-white/50 text-sm">
            © 2025 WorkConnect. Todos os direitos reservados. Uma startup de HRtech.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
