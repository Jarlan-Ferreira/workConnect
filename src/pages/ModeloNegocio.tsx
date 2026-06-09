const ModeloNegocio = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <main className="w-full max-w-7xl">
        <div className="max-w-7xl mx-auto">
          {/* Título Principal */}
          <div className="text-center mb-8">
            <div className="inline-block bg-emerald-700 text-white px-12 py-4 rounded-sm shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold tracking-wide">MODELO DE NEGÓCIOS</h1>
            </div>
            <p className="mt-4 text-emerald-800 font-medium text-lg">WorkConnect - HRtech para Estudantes de TI</p>
          </div>

          {/* Business Model Canvas Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-3 mb-4">
            {/* Linha 1 - 5 colunas principais */}
            
            {/* Parceiros-Chave */}
            <div className="lg:col-span-2 lg:row-span-2 bg-emerald-200/80 border-2 border-emerald-400 rounded-lg p-4">
              <div className="bg-emerald-600 text-white text-center py-2 px-3 rounded font-bold text-sm mb-3">
                PARCEIROS-CHAVE
              </div>
              <p className="text-emerald-800 text-sm italic mb-3">Quem são nossos principais parceiros?</p>
              <ul className="text-emerald-900 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Instituições de ensino (universidades e cursos técnicos de TI).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Empresas de tecnologia que buscam talentos.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Plataformas de cursos online (Alura, Rocketseat, DIO).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provedores de serviços em nuvem (AWS, Azure, Google Cloud).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Consultorias de RH e recrutamento.</span>
                </li>
              </ul>
            </div>

            {/* Atividades-Chave + Principais Recursos */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {/* Atividades-Chave */}
              <div className="bg-emerald-100/80 border-2 border-emerald-300 rounded-lg p-4 flex-1">
                <div className="bg-emerald-600 text-white text-center py-2 px-3 rounded font-bold text-sm mb-3">
                  ATIVIDADES-CHAVE
                </div>
                <p className="text-emerald-800 text-sm italic mb-3">Quais atividades-chave nossas propostas de valor exigem?</p>
                <ul className="text-emerald-900 text-sm space-y-1.5">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Desenvolvimento e manutenção da plataforma com IA.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Curadoria de vagas e trilhas de desenvolvimento.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Matchmaking entre estudantes e empresas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Parcerias com instituições de ensino.</span>
                  </li>
                </ul>
              </div>

              {/* Principais Recursos */}
              <div className="bg-emerald-100/80 border-2 border-emerald-300 rounded-lg p-4 flex-1">
                <div className="bg-emerald-600 text-white text-center py-2 px-3 rounded font-bold text-sm mb-3">
                  PRINCIPAIS RECURSOS
                </div>
                <p className="text-emerald-800 text-sm italic mb-3">Quais recursos-chave nossas propostas de valor exigem?</p>
                <ul className="text-emerald-900 text-sm space-y-1.5">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Equipe de desenvolvimento especializada.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Algoritmos de IA para matching.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Infraestrutura em nuvem escalável.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Equipe de marketing e suporte.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Propostas de Valor */}
            <div className="lg:col-span-2 lg:row-span-2 bg-emerald-500 border-2 border-emerald-600 rounded-lg p-4">
              <div className="bg-white text-emerald-700 text-center py-2 px-3 rounded font-bold text-sm mb-3">
                PROPOSTAS DE VALOR
              </div>
              <p className="text-white text-sm italic mb-3">Que valor entregamos ao cliente?</p>
              <ul className="text-white text-sm space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Conexão inteligente entre estudantes de TI e empresas através de IA.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Trilhas de desenvolvimento personalizadas para cada perfil.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Redução de tempo e custo de contratação para empresas.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Oportunidades reais para estudantes sem experiência.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dashboards analíticos para acompanhar progresso e métricas.</span>
                </li>
              </ul>
            </div>

            {/* Relações com o Consumidor + Canais */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {/* Relações com o Consumidor */}
              <div className="bg-emerald-100/80 border-2 border-emerald-300 rounded-lg p-4 flex-1">
                <div className="bg-emerald-600 text-white text-center py-2 px-3 rounded font-bold text-sm mb-3">
                  RELAÇÕES COM O CONSUMIDOR
                </div>
                <p className="text-emerald-800 text-sm italic mb-3">Que tipo de relacionamento esperamos?</p>
                <ul className="text-emerald-900 text-sm space-y-1.5">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Suporte técnico via chat e email.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Comunidade online de estudantes e mentores.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Versão gratuita para estudantes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Webinars e conteúdo educacional.</span>
                  </li>
                </ul>
              </div>

              {/* Canais */}
              <div className="bg-emerald-100/80 border-2 border-emerald-300 rounded-lg p-4 flex-1">
                <div className="bg-emerald-600 text-white text-center py-2 px-3 rounded font-bold text-sm mb-3">
                  CANAIS
                </div>
                <p className="text-emerald-800 text-sm italic mb-3">Por quais canais nossos clientes querem ser alcançados?</p>
                <ul className="text-emerald-900 text-sm space-y-1.5">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Plataforma web e app mobile (Android/iOS).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>LinkedIn, Instagram e TikTok.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Parcerias com universidades.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Eventos de tecnologia e hackathons.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Segmentos de Clientes */}
            <div className="lg:col-span-2 lg:row-span-2 bg-emerald-200/80 border-2 border-emerald-400 rounded-lg p-4">
              <div className="bg-emerald-600 text-white text-center py-2 px-3 rounded font-bold text-sm mb-3">
                SEGMENTOS DE CLIENTES
              </div>
              <p className="text-emerald-800 text-sm italic mb-3">Para quem estamos criando valor?</p>
              <ul className="text-emerald-900 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Estudantes de TI (graduação, técnico, bootcamps) buscando primeira oportunidade.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Startups e empresas de tecnologia em busca de talentos.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Empresas de médio porte com departamentos de TI em expansão.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Grandes corporações com programas de estágio e trainee.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Linha 2 - Estrutura de Custos e Fluxos de Receita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {/* Estrutura de Custos */}
            <div className="bg-emerald-100/80 border-2 border-emerald-300 rounded-lg p-4">
              <div className="bg-emerald-600 text-white text-center py-2 px-3 rounded font-bold text-sm mb-3 max-w-xs mx-auto">
                ESTRUTURA DE CUSTOS
              </div>
              <p className="text-emerald-800 text-sm italic mb-3 text-center">Quais são os custos mais importantes inerentes ao nosso modelo de negócios?</p>
              <ul className="text-emerald-900 text-sm space-y-1.5 max-w-md mx-auto">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Infraestrutura em nuvem e servidores.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Desenvolvimento e manutenção da plataforma e IA.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Marketing digital e aquisição de usuários.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Equipe de suporte técnico e atendimento.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Despesas administrativas e operacionais.</span>
                </li>
              </ul>
            </div>

            {/* Fluxos de Receita */}
            <div className="bg-emerald-500 border-2 border-emerald-600 rounded-lg p-4">
              <div className="bg-white text-emerald-700 text-center py-2 px-3 rounded font-bold text-sm mb-3 max-w-xs mx-auto">
                FLUXOS DE RECEITA
              </div>
              <p className="text-white text-sm italic mb-3 text-center">Por qual valor nossos clientes estão realmente dispostos a pagar?</p>
              <div className="text-white text-sm text-center space-y-2 max-w-lg mx-auto">
                <p><strong>Modelo Freemium:</strong> Gratuito para estudantes, pago para empresas.</p>
                <p><strong>Assinaturas mensais/anuais:</strong> Planos Starter (R$299), Professional (R$599) e Enterprise (R$999+).</p>
                <p><strong>Contratação por sucesso:</strong> Comissão sobre contratações efetivadas.</p>
                <p><strong>Serviços premium:</strong> Employer branding e hunting exclusivo.</p>
              </div>
            </div>
          </div>

          {/* Rodapé do Canvas */}
          <div className="mt-6 text-center">
            <p className="text-emerald-700 font-medium text-sm">
              WorkConnect © 2025 - Conectando Talentos de TI ao Futuro
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModeloNegocio;
