import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap, ArrowRight, User, Building2 } from "lucide-react";

const Cadastro = () => {
  const [userType, setUserType] = useState<"estudante" | "empresa" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastro:", { userType, name, email, password });
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-display font-bold">
            Work<span className="text-gradient-primary">Connect</span>
          </span>
        </Link>

        <Card variant="elevated">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Criar Conta</CardTitle>
            <CardDescription>Comece sua jornada na WorkConnect</CardDescription>
          </CardHeader>
          <CardContent>
            {!userType ? (
              <div className="space-y-4">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Você é estudante ou empresa?
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setUserType("estudante")}
                    className="p-6 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-center group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-medium">Estudante</span>
                    <p className="text-xs text-muted-foreground mt-1">Busco oportunidades</p>
                  </button>
                  <button
                    onClick={() => setUserType("empresa")}
                    className="p-6 rounded-xl border-2 border-border hover:border-secondary hover:bg-secondary/5 transition-all text-center group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors">
                      <Building2 className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="font-medium">Empresa</span>
                    <p className="text-xs text-muted-foreground mt-1">Busco talentos</p>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <button
                  type="button"
                  onClick={() => setUserType(null)}
                  className="text-sm text-muted-foreground hover:text-foreground mb-2"
                >
                  ← Voltar
                </button>

                <div className="space-y-2">
                  <Label htmlFor="name">
                    {userType === "estudante" ? "Nome completo" : "Nome da empresa"}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={userType === "estudante" ? "Seu nome" : "Nome da empresa"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                </div>
                <Button 
                  type="submit" 
                  variant={userType === "estudante" ? "default" : "success"} 
                  className="w-full" 
                  size="lg"
                >
                  Criar Conta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Ao criar uma conta, você concorda com nossos{" "}
                  <Link to="/termos" className="text-primary hover:underline">
                    Termos de Uso
                  </Link>{" "}
                  e{" "}
                  <Link to="/privacidade" className="text-primary hover:underline">
                    Política de Privacidade
                  </Link>
                </p>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Entrar
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cadastro;
