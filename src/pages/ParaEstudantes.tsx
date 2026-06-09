import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Brain, Target, TrendingUp, MessageSquare, 
  Award, Users, BookOpen, Sparkles, CheckCircle2 
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Matching Inteligente",
    description: "Nossa IA analisa seu perfil e encontra vagas que realmente combinam com você.",
  },
  {
    icon: Target,
    title: "Vagas Personalizadas",
    description: "Receba apenas oportunidades alinhadas com suas habilidades e objetivos.",
  },
  {
    icon: TrendingUp,
    title: "Trilhas de Desenvolvimento",
    description: "Aprenda as competências mais valorizadas pelo mercado com trilhas personalizadas.",
  },
  {
    icon: MessageSquare,
    title: "Feedbacks Automatizados",
    description: "Receba dicas para melhorar seu perfil e aumentar suas chances.",
  },
  {
    icon: Award,
    title: "Mentorias",
    description: "Conecte-se com profissionais experientes para acelerar sua carreira.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Construa conexões relevantes com estudantes e profissionais da área.",
  },
];

const steps = [
  "Crie seu perfil gratuito em minutos",
  "Complete suas habilidades e experiências",
  "Receba recomendações de vagas pela IA",
  "Candidate-se com um clique",
  "Acompanhe o status das candidaturas",
];

const ParaEstudantes = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Para Estudantes de TI</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Sua carreira em TI começa{" "}
              <span className="text-gradient-primary">aqui</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Conecte-se às melhores oportunidades de estágio e emprego júnior 
              com nossa plataforma de matching inteligente.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/cadastro">
                Criar Conta Grátis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Por que usar a WorkConnect?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para conquistar sua primeira oportunidade no mercado de tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} variant="feature">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Como Funciona
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                5 passos para sua primeira vaga
              </h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" className="mt-8" asChild>
                <Link to="/cadastro">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-elevated">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-display font-bold">100% Gratuito</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                A WorkConnect é totalmente gratuita para estudantes. 
                Crie sua conta, complete seu perfil e comece a receber 
                recomendações de vagas hoje mesmo.
              </p>
              <div className="space-y-3">
                {["Sem custos escondidos", "Acesso a todas as vagas", "Trilhas de desenvolvimento grátis"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParaEstudantes;
