import Link from 'next/link';
import Footer from '@/components/Footer';

export default function SolutionsPage() {
  const services = [
    {
      title: "AI-Security & Architectuur Audits",
      description: "Grondige analyse van je AI-implementatie op security, schaalbaarheid en compliance.",
      features: [
        "GDPR & privacy compliance check",
        "Security vulnerability assessment",
        "Architectuur review & optimalisatie",
        "Concrete aanbevelingen & roadmap"
      ],
      icon: "🔒",
      color: "orange"
    },
    {
      title: "Agentic Workflows Bouwen",
      description: "Van prototype naar productie-ready AI-agents met robuuste Python-backends.",
      features: [
        "Schaalbare agent-architectuur",
        "Enterprise-grade Python backends",
        "API integraties & orchestratie",
        "Monitoring & observability"
      ],
      icon: "🤖",
      color: "gold"
    },
    {
      title: "Interim CTO Diensten",
      description: "Strategische technische leiding voor je AI-transformatie.",
      features: [
        "Technische strategie & roadmap",
        "Team coaching & mentoring",
        "Vendor & technology selectie",
        "Hands-on architectuur werk"
      ],
      icon: "👔",
      color: "orange"
    }
  ];

  const expertise = [
    {
      title: "20+ jaar ervaring",
      description: "Bewezen track record in enterprise software development en architectuur.",
      icon: "📊"
    },
    {
      title: "Security-first",
      description: "GDPR-compliant, veilige implementaties die voldoen aan enterprise-eisen.",
      icon: "🛡️"
    },
    {
      title: "Schaalbaar",
      description: "Architecturen die meegroeien van prototype naar miljoenen gebruikers.",
      icon: "📈"
    },
    {
      title: "Python Expert",
      description: "Diepgaande kennis van moderne Python ecosysteem en best practices.",
      icon: "🐍"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-bl from-accent-orange/15 via-accent-gold/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent-orange/20 rounded-full mb-6">
              <span className="text-accent-orange font-semibold">P2P Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Van Prototype naar<br />
              <span className="text-accent-orange">Veilige Enterprise-architectuur</span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Schaalbare AI-oplossingen met enterprise-grade security, compliance en robuuste Python-backends. Gebouwd door ervaren CTO's.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-orange text-background font-semibold rounded-full hover:bg-accent-orange/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-background"
              >
                Bekijk onze diensten
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-orange text-accent-orange font-semibold rounded-full hover:bg-accent-orange hover:text-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-background"
              >
                Plan een gesprek
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Waarom P2P Solutions?
            </h2>
            <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto">
              Enterprise-ervaring gecombineerd met cutting-edge AI-kennis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto">
              Van audit tot volledige implementatie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-surface-dark border border-white/10 rounded-2xl p-8 hover:border-accent-orange/50 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Ons Proces
            </h2>
            <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto">
              Van intake tot productie in gestructureerde stappen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", desc: "Analyse van je huidige situatie en doelen" },
              { step: "2", title: "Architectuur", desc: "Design van schaalbare, veilige oplossing" },
              { step: "3", title: "Implementatie", desc: "Agile development met continue feedback" },
              { step: "4", title: "Productie", desc: "Deployment, monitoring en overdracht" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange/20 text-accent-orange text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-bl from-accent-orange/15 via-accent-gold/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Klaar voor enterprise-grade AI?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Plan een vrijblijvend gesprek om te bespreken hoe we jouw AI-ambities kunnen realiseren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:marcel@prompt2production.nl"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-orange text-background font-semibold rounded-full hover:bg-accent-orange/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-background"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stuur een email
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-orange text-accent-orange font-semibold rounded-full hover:bg-accent-orange hover:text-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-background"
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
