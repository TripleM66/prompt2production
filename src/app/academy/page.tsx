import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AcademyPage() {
  const offerings = [
    {
      title: "Workshops",
      description: "Intensieve hands-on sessies waar je in één dag leert prototypen met AI-tools.",
      features: [
        "Vibecoding fundamentals",
        "No-code AI app development",
        "Rapid prototyping technieken",
        "Direct toepasbaar in je werk"
      ],
      duration: "1 dag",
      icon: "🎯"
    },
    {
      title: "Online Cursussen",
      description: "Leer in je eigen tempo de kunst van het bouwen met AI-assistentie.",
      features: [
        "Video tutorials on-demand",
        "Praktische oefeningen",
        "Community support",
        "Certificaat na afronding"
      ],
      duration: "4-8 weken",
      icon: "💻"
    },
    {
      title: "In-Company Trainingen",
      description: "Breng je hele team op snelheid met op maat gemaakte AI-trainingen.",
      features: [
        "Aangepast aan jouw use cases",
        "Op locatie of remote",
        "Directe implementatie begeleiding",
        "Follow-up sessies"
      ],
      duration: "Op maat",
      icon: "🏢"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-accent-blue/15 via-accent-blue/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent-blue/20 rounded-full mb-6">
              <span className="text-accent-blue font-semibold">P2P Academy</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Leer Vibecoding:<br />
              <span className="text-accent-blue">Bouw apps in een middag</span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Zonder code-ervaring. Met AI als je co-pilot. Van idee naar werkend prototype in uren, niet maanden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#offerings"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-background font-semibold rounded-full hover:bg-accent-blue/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
              >
                Bekijk het aanbod
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-full hover:bg-accent-blue hover:text-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
              >
                Neem contact op
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Innovatieversnelling</h3>
              <p className="text-foreground/70">
                Van idee naar werkend prototype in uren. Test je concepten voordat je grote investeringen doet.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Empowerment</h3>
              <p className="text-foreground/70">
                Geef je team de tools om zelf te bouwen. Minder afhankelijk van externe developers.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Praktisch Leren</h3>
              <p className="text-foreground/70">
                Geen theorie, maar hands-on ervaring. Je bouwt echte applicaties tijdens de training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Ons Aanbod
            </h2>
            <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto">
              Kies de leervorm die bij jou past
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-surface-dark border border-white/10 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {offering.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {offering.title}
                </h3>
                <p className="text-foreground/70 mb-6">
                  {offering.description}
                </p>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium">
                    {offering.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-accent-blue/15 via-accent-blue/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Klaar om te starten?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Neem contact op en ontdek hoe we jouw team kunnen helpen met AI-gedreven innovatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:michel@prompt2production.nl"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-background font-semibold rounded-full hover:bg-accent-blue/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stuur een email
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-full hover:bg-accent-blue hover:text-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
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
