import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Conectar estudantes de tecnologia às melhores oportunidades do mercado, reduzindo a distância entre o mundo acadêmico e o profissional.",
  },
  {
    icon: Zap,
    title: "Visão",
    description: "Ser a principal plataforma de recrutamento inteligente para talentos em TI no Brasil, reconhecida pela inovação e eficiência.",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Inovação, transparência, inclusão e compromisso com o desenvolvimento profissional de cada usuário.",
  },
];

const team = [
  { name: "Jarlan Emanuel", role: "Fundador & CEO", initials: "JE" },
];

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Sobre a{" "}
              <span className="text-gradient-primary">WorkConnect</span>
            </h1>
            <p className="text-lg text-white/80">
              Uma HRtech focada em conectar talentos de TI às melhores oportunidades 
              do mercado através de inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
              Nossa História
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                A WorkConnect nasceu da percepção de um problema real: a desconexão 
                entre empresas de tecnologia e estudantes qualificados. Muitas empresas 
                enfrentam dificuldades para encontrar estagiários e jovens profissionais 
                com as habilidades certas, enquanto estudantes de TI encontram barreiras 
                para ingressar no mercado.
              </p>
              <p className="mb-4">
                Desenvolvida como uma startup de HRtech, a WorkConnect utiliza 
                inteligência artificial para criar conexões mais precisas e eficientes. 
                Nossa plataforma avalia o perfil técnico, habilidades e desempenho 
                acadêmico dos estudantes, cruzando com as exigências das empresas.
              </p>
              <p>
                Além do matching inteligente, oferecemos mentorias, feedbacks 
                automatizados e trilhas de desenvolvimento profissional, preparando 
                os estudantes para o mercado de trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} variant="elevated">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Nosso Time
            </h2>
            <p className="text-muted-foreground">
              Conheça quem está por trás da WorkConnect
            </p>
          </div>
          <div className="flex justify-center">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-display font-bold text-white">R$ 45k</p>
              <p className="text-white/70">Investimento Inicial</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-white">R$ 8k</p>
              <p className="text-white/70">Custo Mensal</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-white">5.000+</p>
              <p className="text-white/70">Estudantes</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-white">200+</p>
              <p className="text-white/70">Empresas</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
