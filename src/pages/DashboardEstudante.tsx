import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, Bell, User, Settings, LogOut, Search, Briefcase, 
  MapPin, Clock, Building2, Star, TrendingUp, BookOpen,
  Award, MessageSquare, ChevronRight, Home, Users, FileText
} from "lucide-react";

// Mock data for the dashboard
const mockUser = {
  name: "Jarlan Emanuel",
  course: "Sistemas de Informação",
  institution: "IFCE - Campus Crato",
  profileCompletion: 85,
  matchScore: 92,
};

const mockJobs = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack Jr",
    company: "TechStart",
    location: "Remoto",
    type: "Estágio",
    matchScore: 95,
    posted: "2 dias atrás",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    id: 2,
    title: "Estágio em Desenvolvimento Web",
    company: "InovaTech",
    location: "Fortaleza, CE",
    type: "Estágio",
    matchScore: 88,
    posted: "5 dias atrás",
    skills: ["JavaScript", "HTML/CSS", "Git"],
  },
  {
    id: 3,
    title: "Desenvolvedor Python Jr",
    company: "DataSolutions",
    location: "Híbrido",
    type: "Junior",
    matchScore: 82,
    posted: "1 semana atrás",
    skills: ["Python", "Django", "SQL"],
  },
];

const mockTrails = [
  { name: "React Avançado", progress: 65, icon: "⚛️" },
  { name: "APIs RESTful", progress: 40, icon: "🔌" },
  { name: "Soft Skills", progress: 80, icon: "💬" },
];

const DashboardEstudante = () => {
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
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium">
            <Home className="w-5 h-5" />
            Dashboard
          </Link>
          <Link to="/vagas" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <Briefcase className="w-5 h-5" />
            Vagas
          </Link>
          <Link to="/trilhas" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <BookOpen className="w-5 h-5" />
            Trilhas
          </Link>
          <Link to="/mentorias" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <Users className="w-5 h-5" />
            Mentorias
          </Link>
          <Link to="/candidaturas" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <FileText className="w-5 h-5" />
            Candidaturas
          </Link>
        </nav>

        {/* Profile Card */}
        <div className="absolute bottom-4 left-4 right-4">
          <Card variant="stat">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                  JE
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{mockUser.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{mockUser.course}</p>
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
                  placeholder="Buscar vagas, empresas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive text-white text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
              <div className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              Olá, {mockUser.name.split(" ")[0]}! 👋
            </h1>
            <p className="text-muted-foreground">
              Você tem <span className="text-primary font-semibold">3 novas vagas</span> recomendadas pela nossa IA.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card variant="stat">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Score de Match</span>
                  <Star className="w-5 h-5 text-accent" />
                </div>
                <p className="text-3xl font-display font-bold text-foreground">{mockUser.matchScore}%</p>
                <p className="text-xs text-secondary">+5% esta semana</p>
              </CardContent>
            </Card>

            <Card variant="stat">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Perfil Completo</span>
                  <User className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl font-display font-bold text-foreground">{mockUser.profileCompletion}%</p>
                <Progress value={mockUser.profileCompletion} className="h-2 mt-2" />
              </CardContent>
            </Card>

            <Card variant="stat">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Candidaturas</span>
                  <FileText className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-3xl font-display font-bold text-foreground">12</p>
                <p className="text-xs text-muted-foreground">4 em análise</p>
              </CardContent>
            </Card>

            <Card variant="stat">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Visualizações</span>
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <p className="text-3xl font-display font-bold text-foreground">48</p>
                <p className="text-xs text-secondary">+12 esta semana</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recommended Jobs */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-display font-bold text-foreground">Vagas Recomendadas</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/vagas">Ver todas <ChevronRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>

              <div className="space-y-4">
                {mockJobs.map((job) => (
                  <Card key={job.id} variant="elevated" className="cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                            <p className="text-sm text-muted-foreground">{job.company}</p>
                          </div>
                        </div>
                        <Badge className="bg-secondary/10 text-secondary border-0">
                          {job.matchScore}% match
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.posted}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Development Trails */}
              <Card variant="default">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Suas Trilhas
                  </CardTitle>
                  <CardDescription>Continue seu desenvolvimento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockTrails.map((trail) => (
                    <div key={trail.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <span>{trail.icon}</span>
                          {trail.name}
                        </span>
                        <span className="text-muted-foreground">{trail.progress}%</span>
                      </div>
                      <Progress value={trail.progress} className="h-2" />
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Ver Todas as Trilhas
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card variant="default">
                <CardHeader>
                  <CardTitle className="text-lg">Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <Award className="w-4 h-4 mr-2 text-primary" />
                    Adicionar Certificação
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2 text-secondary" />
                    Agendar Mentoria
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" size="sm">
                    <User className="w-4 h-4 mr-2 text-accent" />
                    Completar Perfil
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

export default DashboardEstudante;
