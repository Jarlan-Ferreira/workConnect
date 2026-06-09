import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, Clock, Target, TrendingDown, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Candidatos Qualificados",
    description: "Receba apenas candidatos com o perfil técnico ideal para suas vagas.",
  },
  {
    icon: Clock,
    title: "Redução de Tempo",
    description: "Reduza em até 60% o tempo de recrutamento com nosso matching inteligente.",
  },
  {
    icon: TrendingDown,
    title: "Menor Rotatividade",
    description: "Contrate profissionais alinhados à cultura da empresa, reduzindo turnover.",
  },
];

const features = [
  "Dashboard completo de gestão de vagas",
  "Análise de perfil com IA",
  "Relatórios de candidatos em tempo real",
  "Integração com sistemas de RH",
  "Suporte dedicado para empresas",
  "Acesso a banco de talentos exclusivo",
];

const ForCompaniesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Building2 className="w-4 h-4" />
              Para Empresas
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Encontre os melhores{" "}
              <span className="text-gradient-primary">talentos em TI</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A WorkConnect conecta sua empresa a estudantes e recém-formados qualificados, 
              reduzindo custos e tempo de contratação com nossa tecnologia de matching por IA.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/para-empresas">
                Conhecer Planos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right Cards */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title} 
                variant="elevated"
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCompaniesSection;
