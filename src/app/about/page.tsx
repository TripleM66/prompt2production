import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              De Kracht van <span className="text-accent-blue">Visie</span> en{' '}
              <span className="text-accent-orange">Architectuur</span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed">
              Twee partners, één missie: AI-innovatie toegankelijk en schaalbaar maken voor iedereen.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Michel - The Visionary */}
            <div className="bg-gradient-to-br from-accent-blue/15 via-accent-blue/5 to-transparent border border-accent-blue/30 rounded-2xl p-8 lg:p-12">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-accent-blue/20 rounded-full mb-4">
                  <span className="text-accent-blue font-semibold">The Visionary</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Michel van der Mark
                </h2>
                <p className="text-xl text-accent-blue font-medium">
                  Founder P2P Academy
                </p>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Michel is de drijvende kracht achter snelle AI-innovatie. Met zijn achtergrond in 
                  product development en een passie voor het democratiseren van technologie, helpt hij 
                  professionals en teams om zelf te bouwen met AI.
                </p>
                <p>
                  Zijn missie: iedereen leren 'vibecoden' - het bouwen van werkende prototypes in uren 
                  in plaats van maanden, zonder traditionele programmeerkennis.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Rapid Prototyping',
                    'AI-Assisted Development',
                    'Product Innovation',
                    'Workshop Facilitation',
                    'No-Code/Low-Code',
                    'Vibecoding'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/academy"
                  className="inline-flex items-center text-accent-blue hover:text-accent-blue/80 font-medium transition-colors"
                >
                  Ontdek de Academy
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Marcel - The Architect */}
            <div className="bg-gradient-to-bl from-accent-orange/15 via-accent-gold/5 to-transparent border border-accent-orange/30 rounded-2xl p-8 lg:p-12">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-accent-orange/20 rounded-full mb-4">
                  <span className="text-accent-orange font-semibold">The Architect</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Marcel Houtzager
                </h2>
                <p className="text-xl text-accent-orange font-medium">
                  Founder P2P Solutions
                </p>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Marcel is Interim CTO voor SaaS Scale-ups die sneller groeien dan hun platform kan bijhouden. 
                  Met 3 volledige end-to-end replatformings op zijn naam, specialiseert hij zich in het oplossen 
                  van het probleem waarbij engineering teams vastlopen in technische schuld.
                </p>
                <p>
                  Zijn unieke kracht: de combinatie van een wetenschappelijke basis (rigoureus systeemdenken) 
                  met een carrière in film en theater (heldere narratieven en alignment). Dit stelt hem in staat 
                  complexe technische beslissingen te vertalen naar strategische business-keuzes.
                </p>
                <p>
                  Hij herstelt het vertrouwen tussen boardroom en tech-teams door gebruik te maken van systemen 
                  zoals EOS (Entrepreneurial Operating System) om tech, product en strategie uit te lijnen.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Operationele Gebieden</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Technische Strategie',
                    'Product/Platform Besluitvorming',
                    'Procesverbetering (EOS)',
                    'Executive Problem Solving',
                    'End-to-End Replatforming',
                    'AI Security & Compliance'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-accent-orange hover:text-accent-orange/80 font-medium transition-colors"
                >
                  Ontdek Solutions
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Samen Sterker
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              De perfecte balans tussen snelheid en degelijkheid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-blue/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Snelheid</h3>
              <p className="text-foreground/70">
                Michel zorgt voor razendsnelle prototypes en validatie van ideeën. Van concept naar werkend product in dagen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Synergie</h3>
              <p className="text-foreground/70">
                Samen bieden we het complete plaatje: van eerste idee tot schaalbare enterprise-oplossing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-orange/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Degelijkheid</h3>
              <p className="text-foreground/70">
                Marcel bouwt de fundering: veilig, schaalbaar en compliant. Enterprise-ready vanaf dag één.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Onze Missie
          </h2>
          <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-8">
            We geloven dat AI-innovatie niet moet stranden op technische complexiteit of security-zorgen. 
            Daarom combineren we de snelheid van prototyping met de degelijkheid van enterprise-architectuur.
          </p>
          <p className="text-lg text-foreground/70 italic">
            "Bridging the gap between AI Vision and Enterprise Reality."
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Laten we kennismaken
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Benieuwd hoe we jouw organisatie kunnen helpen met AI? Neem contact op.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@prompt2production.nl"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-background font-semibold rounded-full hover:bg-accent-blue/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-surface-dark"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stuur een email
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/30 text-foreground font-semibold rounded-full hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2 focus:ring-offset-surface-dark"
            >
              Terug naar home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
