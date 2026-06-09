import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, TrendingUp, MessageSquare, Award, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Matching com IA",
    description: "Nossa inteligência artificial analisa seu perfil técnico e cruza com as necessidades das empresas para encontrar o match perfeito.",
    color: "text-primary",
  },
  {
    icon: Target,
    title: "Vagas Personalizadas",
    description: "Receba apenas oportunidades que realmente combinam com suas habilidades, experiência e objetivos de carreira.",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Trilhas de Desenvolvimento",
    description: "Aprenda as competências mais valorizadas pelo mercado com trilhas personalizadas baseadas no seu perfil.",
    color: "text-accent",
  },
  {
    icon: MessageSquare,
    title: "Feedbacks Automatizados",
    description: "Receba feedback detalhado sobre seu perfil e dicas para melhorar suas chances nas seleções.",
    color: "text-primary",
  },
  {
    icon: Award,
    title: "Mentorias Especializadas",
    description: "Conecte-se com profissionais experientes da área de TI para acelerar seu crescimento profissional.",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Networking Qualificado",
    description: "Construa conexões relevantes com estudantes e profissionais da sua área de interesse.",
    color: "text-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tudo que você precisa para{" "}
            <span className="text-gradient-primary">conquistar sua vaga</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma plataforma completa para conectar talentos e oportunidades de forma inteligente e eficiente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="feature"
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
