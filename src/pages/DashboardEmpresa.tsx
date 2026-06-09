import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, Bell, Settings, Search, Briefcase, 
  Building2, Users, TrendingUp, Plus, Home,
  FileText, ChevronRight, Star, Clock, Eye, CheckCircle2, XCircle
} from "lucide-react";

// Mock data for company dashboard
const mockCompany = {
  name: "TechStart",
  plan: "Premium",
  activeJobs: 5,
  totalCandidates: 127,
  matchRate: 94,
};

const mockCandidates = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Desenvolvedora Full Stack",
    institution: "UFC",
    matchScore: 96,
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    status: "Novo",
    avatar: "MS",
  },
  {
    id: 2,
    name: "Pedro Santos",
    role: "Desenvolvedor Backend",
    institution: "IFCE",
    matchScore: 91,
    skills: ["Python", "Django", "AWS", "Docker"],
    status: "Entrevista",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Desenvolvedora Frontend",
    institution: "UECE",
    matchScore: 88,
    skills: ["Vue.js", "JavaScript", "Tailwind CSS"],
    status: "Em análise",
    avatar: "AC",
  },
];

const mockJobs = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack Jr",
    candidates: 45,
    views: 320,
    status: "Ativa",
    daysActive: 5,
  },
  {
    id: 2,
    title: "Estágio em Data Science",
    candidates: 32,
    views: 210,
    status: "Ativa",
    daysActive: 12,
  },
  {
    id: 3,
    title: "DevOps Engineer Jr",
    candidates: 18,
    views: 150,
    status: "Pausada",
    daysActive: 20,
  },
];

const DashboardEmpresa = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-muted">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-4 hidden lg:block">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-display font-bold">
            Work<span className="text-gradient-primary">Connect</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="space-y-2">
          <Link to="/empresa/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium">
            <Home className="w-5 h-5" />
            Dashboard
          </Link>
          <Link to="/empresa/vagas" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <Briefcase className="w-5 h-5" />
            Minhas Vagas
          </Link>
          <Link to="/empresa/candidatos" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <Users className="w-5 h-5" />
            Candidatos
          </Link>
          <Link to="/empresa/talentos" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <Star className="w-5 h-5" />
            Banco de Talentos
          </Link>
          <Link to="/empresa/relatorios" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <FileText className="w-5 h-5" />
            Relatórios
          </Link>
        </nav>

        {/* Company Card */}
        <div className="absolute bottom-4 left-4 right-4">
          <Card variant="stat">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-secondary flex items-center justify-center text-white">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{mockCompany.name}</p>
                  <Badge variant="secondary" className="text-xs">{mockCompany.plan}</Badge>
                </div>
                <Button variant="ghost" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-card border-b border-border p-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar candidatos, vagas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="default" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Nova Vaga
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive text-white text-xs flex items-center justify-center">
                  5
                </span>
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              Bem-vindo, {mockCompany.name}! 🚀
            </h1>
            <p className="text-muted-foreground">
              Você tem <span className="text-primary font-semibold">12 novos candidatos</span> recomendados pela nossa IA.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card variant="stat">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Vagas Ativas</span>
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl font-display font-bold text-foreground">{mockCompany.activeJobs}</p>
                <p className="text-xs text-muted-foreground">2 pausadas</p>
              </CardContent>
            </Card>

            <Card variant="stat">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Total Candidatos</span>
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-3xl font-display font-bold text-foreground">{mockCompany.totalCandidates}</p>
                <p className="text-xs text-secondary">+23 esta semana</p>
              </CardContent>
            </Card>

            <Card variant="stat">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Taxa de Match</span>
                  <Star className="w-5 h-5 text-accent" />
                </div>
                <p className="text-3xl font-display font-bold text-foreground">{mockCompany.matchRate}%</p>
                <Progress value={mockCompany.matchRate} className="h-2 mt-2" />
              </CardContent>
            </Card>

            <Card variant="stat">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Contratações</span>
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-3xl font-display font-bold text-foreground">8</p>
                <p className="text-xs text-secondary">+3 este mês</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Top Candidates */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-display font-bold text-foreground">Candidatos Recomendados</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/empresa/candidatos">Ver todos <ChevronRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>

              <div className="space-y-4">
                {mockCandidates.map((candidate) => (
                  <Card key={candidate.id} variant="elevated" className="cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                            {candidate.avatar}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{candidate.name}</h3>
                            <p className="text-sm text-muted-foreground">{candidate.role}</p>
                            <p className="text-xs text-muted-foreground">{candidate.institution}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-secondary/10 text-secondary border-0 mb-2">
                            {candidate.matchScore}% match
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={`block ${
                              candidate.status === "Novo" 
                                ? "border-primary text-primary" 
                                : candidate.status === "Entrevista"
                                ? "border-secondary text-secondary"
                                : "border-muted-foreground"
                            }`}
                          >
                            {candidate.status}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="default" size="sm" className="flex-1">
                          <CheckCircle2 className="w-4 h-4 mr-1" />
                          Aprovar
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Ver Perfil
                        </Button>
                        <Button variant="ghost" size="sm">
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Active Jobs */}
              <Card variant="default">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Vagas Ativas
                  </CardTitle>
                  <CardDescription>Desempenho das suas vagas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockJobs.map((job) => (
                    <div key={job.id} className="p-3 rounded-lg bg-muted">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium truncate">{job.title}</span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${job.status === "Ativa" ? "border-secondary text-secondary" : "border-muted-foreground"}`}
                        >
                          {job.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {job.candidates}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {job.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.daysActive}d
                        </span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <Plus className="w-4 h-4 mr-2" />
                    Nova Vaga
                  </Button>
                </CardContent>
              </Card>

              {/* Analytics Preview */}
              <Card variant="default">
                <CardHeader>
                  <CardTitle className="text-lg">Analytics</CardTitle>
                  <CardDescription>Últimos 7 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Visualizações</span>
                      <span className="text-sm font-semibold">680</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Candidaturas</span>
                      <span className="text-sm font-semibold">45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Taxa Conversão</span>
                      <span className="text-sm font-semibold text-secondary">6.6%</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-4">
                    Ver Relatório Completo
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardEmpresa;
