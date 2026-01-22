import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, GraduationCap, Users, TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export default function Index() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  const features = [
    {
      icon: GraduationCap,
      title: 'Acompanhamento de Progresso',
      description: 'Monitore sua evolução com estatísticas detalhadas e metas personalizadas.',
    },
    {
      icon: Users,
      title: 'Turmas e Professores',
      description: 'Conecte-se com professores e colegas em turmas organizadas.',
    },
    {
      icon: TrendingUp,
      title: 'Resultados Reais',
      description: 'Metodologia comprovada para melhorar seu desempenho acadêmico.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <nav className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 backdrop-blur rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">Mentoriza</span>
            </div>
            <Button 
              variant="secondary" 
              onClick={() => navigate('/auth')}
              className="bg-white/20 backdrop-blur text-white border-white/30 hover:bg-white/30"
            >
              Entrar
            </Button>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Sua jornada de estudos começa aqui
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Plataforma completa para estudantes e professores. Acompanhe seu progresso, 
              participe de turmas e alcance seus objetivos acadêmicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/auth')}
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Começar Agora
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Tudo que você precisa para <span className="gradient-text">aprender melhor</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ferramentas poderosas para estudantes e professores organizarem e acompanharem a jornada de aprendizado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl bg-card border card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 gradient-primary rounded-xl w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Junte-se a milhares de estudantes que já estão transformando sua forma de estudar.
          </p>
          <Button size="lg" onClick={() => navigate('/auth')}>
            Criar Conta Grátis
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-display font-bold">Mentoriza</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Mentoriza. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}