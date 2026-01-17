import Link from 'next/link';
import Image from 'next/image';
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
              {/* Profile Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent-blue/30">
                  <Image
                    src="/Images/michel.jpeg"
                    alt="Michel van der Mark"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

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

              <div className="space-y-4 text-foreground/80 leading-relaxed min-h-[320px]">
                <p>
                  Michel is de Strategic Innovation Catalyst die de 'Innovation Stagnation' doorbreekt. 
                  Als Programmadirecteur Innovatie bij Qbuzz implementeert hij AI niet vanuit PowerPoints, 
                  maar vanuit de praktijk in complexe, corporate omgevingen.
                </p>
                <p>
                  Hij transformeert organisaties van 'denkers' naar 'makers' door business-teams te empoweren 
                  de IT-backlog te omzeilen via Vibecoding. Zijn methodiek: <strong className="text-accent-blue">Rapid Validation</strong> - 
                  van business-probleem naar werkend prototype in uren, niet in maanden.
                </p>
                <p>
                  Michel is geen theoretische consultant, maar een <strong className="text-accent-blue">Practicing Leader</strong> die 
                  zelf de tools gebruikt om verandering te forceren. Hij biedt de 'Vibe' (snelheid en creativiteit) 
                  die essentieel is voordat Marcel's 'Production' (architectuur) kan beginnen.
                </p>
              </div>

              <div className="mt-8 min-h-[180px]">
                <h3 className="text-lg font-bold text-foreground mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Strategic Innovation',
                    'Rapid Validation',
                    'Vibecoding',
                    'AI Democratization',
                    'Corporate AI Implementation',
                    'Team Transformation'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium border border-accent-blue/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/academy"
                  className="inline-flex items-center text-accent-blue hover:text-accent-blue/80 font-medium transition-colors"
                >
                  Ontdek de Academy
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="https://www.linkedin.com/in/michelvandermark/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-blue hover:text-accent-blue/80 font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Bekijk LinkedIn profiel
                </a>
              </div>
            </div>

            {/* Marcel - The Architect */}
            <div className="bg-gradient-to-bl from-accent-orange/15 via-accent-gold/5 to-transparent border border-accent-orange/30 rounded-2xl p-8 lg:p-12">
              {/* Profile Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent-orange/30">
                  <Image
                    src="/Images/marcel.jpeg"
                    alt="Marcel Houtzager"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

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

              <div className="space-y-4 text-foreground/80 leading-relaxed min-h-[320px]">
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

              <div className="mt-8 min-h-[180px]">
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
                      className="px-3 py-1.5 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-medium border border-accent-orange/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-accent-orange hover:text-accent-orange/80 font-medium transition-colors"
                >
                  Ontdek Solutions
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="https://www.linkedin.com/in/dioneo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-orange hover:text-accent-orange/80 font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Bekijk LinkedIn profiel
                </a>
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
