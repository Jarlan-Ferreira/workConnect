import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Building2, Target, Clock, TrendingDown, 
  CheckCircle2, Sparkles, Users, BarChart3 
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 299",
    period: "/mês",
    description: "Para empresas que estão começando",
    features: [
      "Até 3 vagas ativas",
      "50 candidatos/mês",
      "Matching básico com IA",
      "Dashboard de candidatos",
      "Suporte por email",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "R$ 599",
    period: "/mês",
    description: "Para empresas em crescimento",
    features: [
      "Até 10 vagas ativas",
      "200 candidatos/mês",
      "Matching avançado com IA",
      "Relatórios detalhados",
      "Banco de talentos",
      "Suporte prioritário",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para grandes empresas",
    features: [
      "Vagas ilimitadas",
      "Candidatos ilimitados",
      "API de integração",
      "Gerente de conta dedicado",
      "SLA garantido",
      "Customizações",
    ],
    popular: false,
  },
];

const benefits = [
  {
    icon: Target,
    title: "Candidatos Qualificados",
    description: "Receba apenas candidatos com o perfil técnico ideal para suas vagas.",
  },
  {
    icon: Clock,
    title: "60% Menos Tempo",
    description: "Reduza drasticamente o tempo de recrutamento com nosso matching inteligente.",
  },
  {
    icon: TrendingDown,
    title: "Menor Rotatividade",
    description: "Contrate profissionais alinhados à cultura da empresa.",
  },
  {
    icon: BarChart3,
    title: "Analytics Completo",
    description: "Acompanhe métricas de recrutamento em tempo real.",
  },
];

const ParaEmpresas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6">
              <Building2 className="w-4 h-4" />
              <span>Para Empresas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Encontre os melhores{" "}
              <span className="text-gradient-primary">talentos em TI</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Conecte sua empresa a estudantes e recém-formados qualificados. 
              Nossa IA encontra os candidatos perfeitos para suas vagas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/cadastro">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl">
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} variant="stat">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Planos
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Escolha o plano ideal
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Planos flexíveis para empresas de todos os tamanhos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                variant="elevated"
                className={plan.popular ? "border-2 border-primary relative" : ""}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/cadastro">Começar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParaEmpresas;
