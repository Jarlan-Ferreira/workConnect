import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, Search, Handshake, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie seu Perfil",
    description: "Cadastre-se e complete seu perfil com suas habilidades, experiências e objetivos de carreira.",
  },
  {
    number: "02",
    icon: Search,
    title: "IA Analisa seu Perfil",
    description: "Nossa inteligência artificial processa suas informações e identifica as melhores oportunidades.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Match com Empresas",
    description: "Receba recomendações personalizadas de vagas que combinam perfeitamente com seu perfil.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Conquiste sua Vaga",
    description: "Candidate-se, prepare-se com nossas trilhas e inicie sua carreira em tecnologia.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Simples, rápido e{" "}
            <span className="text-gradient-secondary">eficiente</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Em poucos passos você está conectado às melhores oportunidades do mercado de TI.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 -translate-x-1/2" />
              )}
              
              <div className="flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elevated">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center shadow-soft">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/cadastro">
              Criar Conta Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
