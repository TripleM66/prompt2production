import Link from 'next/link';
import Footer from '@/components/Footer';
import BoardroomFAQ from '@/components/BoardroomFAQ';

export default function SolutionsPage() {
  const operationalAreas = [
    {
      title: "Technische strategie",
      description: "Van tech-stack keuzes tot architectuur roadmaps die business-doelen ondersteunen."
    },
    {
      title: "Product/platform besluitvorming",
      description: "Data-gedreven beslissingen over build vs buy, replatforming en schaalbaarheid."
    },
    {
      title: "Procesverbetering",
      description: "EOS-implementatie om tech, product en strategie te aligneren."
    },
    {
      title: "Executive Problem Solving",
      description: "Het herstellen van vertrouwen tussen boardroom en engineering teams."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-bl from-accent-orange/15 via-accent-gold/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent-orange/20 rounded-full mb-6">
              <span className="text-accent-orange font-semibold">Interim CTO voor SaaS Scale-ups</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              "Our software isn't ready for growth.<br />
              <span className="text-accent-orange">Can you fix that?"</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-foreground/90 mb-8 font-medium">
              It's the problem I specialize in.
            </p>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Wanneer je groei sneller gaat dan je platform kan bijhouden, en je engineering team vastloopt in technical debt, dan is het tijd voor een Interim CTO die het fundament herstelt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#expertise"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-orange text-background font-semibold rounded-full hover:bg-accent-orange/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-background"
              >
                Ontdek mijn aanpak
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

      {/* The Science & The Art */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                The Science & The Art
              </h2>
              <p className="text-xl text-foreground/70">
                Een unieke combinatie die complexe technische beslissingen vertaalbaar maakt
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-background border border-accent-orange/30 rounded-2xl p-8">
                <div className="w-16 h-16 mb-6 bg-accent-orange/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">The Science</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Een wetenschappelijke basis met rigoureus systeemdenken. Gestructureerde analyse, data-gedreven besluitvorming en bewezen methodieken zoals EOS (Entrepreneurial Operating System) om organisaties te aligneren.
                </p>
              </div>

              <div className="bg-background border border-accent-orange/30 rounded-2xl p-8">
                <div className="w-16 h-16 mb-6 bg-accent-orange/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">The Art</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Een carrière in film en theater heeft Marcel geleerd heldere narratieven te creëren en teams te aligneren. Deze vaardigheid stelt hem in staat complexe technische beslissingen te vertalen naar strategische business-keuzes die iedereen begrijpt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Ervaring */}
      <section id="expertise" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Bewezen Expertise
            </h2>
            <p className="text-xl text-foreground/70">
              3 volledige end-to-end replatformings en het herstellen van vertrouwen tussen boardroom en tech-teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {operationalAreas.map((area, index) => (
              <div
                key={index}
                className="bg-surface-dark border border-white/10 rounded-2xl p-6 hover:border-accent-orange/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Case Study */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-accent-orange/20 rounded-full mb-4">
                <span className="text-accent-orange font-semibold">Proof of Impact</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Case Study: SaaS Scale-up Replatforming
              </h2>
            </div>

            <div className="bg-gradient-to-br from-accent-orange/10 via-accent-gold/5 to-transparent border border-accent-orange/30 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-accent-orange mb-3">Scenario</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    SaaS scale-up met risico op verlies van organisch verkeer door een opgelegde tech-stack die niet paste bij de business-realiteit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-accent-orange mb-3">Actie</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Marcel identificeerde het risico, voerde grondige data-analyse uit en presenteerde een alternatief platform-voorstel aan de board.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-accent-orange mb-3">Resultaat</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Besparing van €5.000 per dag aan advertentiekosten en een schaalbaar fundament voor toekomstige groei.
                  </p>
                </div>
              </div>

              <div className="border-t border-accent-orange/20 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-accent-orange mb-2">€5K</div>
                    <div className="text-foreground/70">Dagelijkse besparing</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent-orange mb-2">100%</div>
                    <div className="text-foreground/70">Organisch verkeer behouden</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent-orange mb-2">3x</div>
                    <div className="text-foreground/70">Sneller naar markt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Hoe ik je help
            </h2>
            <p className="text-xl text-foreground/70">
              Van crisis-interventie tot strategische transformatie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface-dark border border-white/10 rounded-2xl p-8 hover:border-accent-orange/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interim CTO
              </h3>
              <p className="text-foreground/70 mb-6">
                Strategische technische leiding voor je AI-transformatie en platform-evolutie.
              </p>
              <ul className="space-y-3">
                {[
                  "Technische strategie & roadmap",
                  "Team coaching & mentoring",
                  "Vendor & technology selectie",
                  "Hands-on architectuur werk"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-dark border border-white/10 rounded-2xl p-8 hover:border-accent-orange/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Platform Replatforming
              </h3>
              <p className="text-foreground/70 mb-6">
                Van prototype naar productie-ready platforms met robuuste architectuur.
              </p>
              <ul className="space-y-3">
                {[
                  "End-to-end replatforming expertise",
                  "Schaalbare architectuur design",
                  "Zero-downtime migraties",
                  "Performance optimalisatie"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-dark border border-white/10 rounded-2xl p-8 hover:border-accent-orange/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                AI-Security & Compliance
              </h3>
              <p className="text-foreground/70 mb-6">
                Enterprise-grade security en compliance voor AI-implementaties.
              </p>
              <ul className="space-y-3">
                {[
                  "GDPR & privacy compliance",
                  "Security vulnerability assessment",
                  "Architectuur audits",
                  "Risk mitigation strategies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-accent-orange mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Mijn Aanpak
            </h2>
            <p className="text-xl text-foreground/70">
              Gestructureerd, transparant en resultaatgericht
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery & Diagnose", desc: "Grondige analyse van je huidige situatie, tech-stack en team-dynamiek" },
              { step: "2", title: "Strategie & Alignment", desc: "EOS-implementatie om tech, product en business te aligneren" },
              { step: "3", title: "Executie & Transformatie", desc: "Hands-on implementatie met continue communicatie naar stakeholders" },
              { step: "4", title: "Overdracht & Borging", desc: "Knowledge transfer en borging van nieuwe werkwijzen in je organisatie" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange/20 text-accent-orange text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boardroom FAQ */}
      <BoardroomFAQ variant="solutions" />

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-bl from-accent-orange/15 via-accent-gold/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Groeit je bedrijf sneller dan je platform?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Plan een vrijblijvend gesprek om te bespreken hoe ik je kan helpen het fundament te herstellen.
          </p>
          <div className="flex flex-col gap-4 justify-center max-w-md mx-auto">
            <a
              href="mailto:marcel@prompt2production.nl"
              className="group"
            >
              <div className="inline-flex flex-col items-center justify-center px-8 py-4 bg-accent-orange text-background font-semibold rounded-full hover:bg-accent-orange/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-background w-full">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Neem contact op
                </span>
                <span className="text-sm opacity-90 mt-1">Zekerheid bij schaalvergroting (P2P Solutions)</span>
              </div>
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
