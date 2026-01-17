import Link from 'next/link';
import Footer from '@/components/Footer';
import BoardroomFAQ from '@/components/BoardroomFAQ';

export default function AcademyPage() {
  const modules = [
    {
      number: "01",
      title: "De AI-Mindset & Strategie",
      description: "Hoe herken je processen die schreeuwen om een AI-oplossing? Van business-probleem naar een haarscherpe 'Prompt-strategie'."
    },
    {
      number: "02",
      title: "Vibecoding Tools & Technieken",
      description: "Werken met de modernste bouw-tools (zoals Replit, Bolt, Cursor). Hoe je AI aanstuurt om volledige applicaties te schrijven, te testen en te deployen."
    },
    {
      number: "03",
      title: "The Build (Van Idee naar App)",
      description: "Hands-on bouwen: Aan het eind van de dag heb je je eigen werkende applicatie live staan. Iteratief verbeteren: Hoe 'vibe' je door naar versie 2.0?"
    },
    {
      number: "04",
      title: "The Bridge naar Productie",
      description: "Wanneer is een prototype genoeg en wanneer heb je de architectuur van Marcel (P2P Solutions) nodig? Hoe borg je deze nieuwe manier van werken in je dagelijkse workflow?"
    }
  ];

  const tenXShifts = [
    {
      title: "Van Weken naar Uren",
      before: "6 weken wachten op IT",
      after: "4 uur bouwen met AI",
      impact: "10x sneller valideren"
    },
    {
      title: "Van Denkers naar Makers",
      before: "Eindeloze requirement docs",
      after: "Werkende prototypes",
      impact: "10x meer ownership"
    },
    {
      title: "Van Afhankelijk naar Autonoom",
      before: "Wachten op developers",
      after: "Zelf bouwen en itereren",
      impact: "10x meer controle"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-accent-blue/15 via-accent-blue/5 to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent-blue/20 rounded-full mb-6">
              <span className="text-accent-blue font-semibold">Strategic Innovation Catalyst</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Stop waiting for IT.<br />
              <span className="text-accent-blue">Start building the future today.</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-foreground/90 mb-6 font-medium">
              Democratizing Innovation through AI.
            </p>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Transformeer je organisatie van 'denkers' naar 'makers'. Omzeil de IT-backlog en valideer je ideeën in uren, niet in maanden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#bootcamp"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-blue text-background font-semibold rounded-full hover:bg-accent-blue/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
              >
                Ontdek het Bootcamp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-full hover:bg-accent-blue hover:text-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
              >
                Schrijf je in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 10x Shift */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              The 10x Shift
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Hoe teams door AI-adoptie hun productiviteit verveelvoudigen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tenXShifts.map((shift, index) => (
              <div
                key={index}
                className="bg-background border border-accent-blue/30 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-accent-blue mb-6">
                  {shift.title}
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 font-medium">Voorheen</p>
                      <p className="text-foreground/80">{shift.before}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 font-medium">Nu</p>
                      <p className="text-foreground/80">{shift.after}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-accent-blue/20">
                  <p className="text-accent-blue font-bold text-lg">{shift.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Practicing Leader */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-accent-blue/15 via-accent-blue/5 to-transparent border border-accent-blue/30 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                The Practicing Leader
              </h2>
              <p className="text-xl text-foreground/70">
                Geen theoretische consultant, maar een leider die zelf de tools gebruikt
              </p>
            </div>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Als Programmadirecteur Innovatie bij Qbuzz begrijpt Michel de complexiteit van grote organisaties. Hij implementeert AI niet vanuit een PowerPoint, maar vanuit de praktijk.
              </p>
              <p>
                Michel biedt de <strong className="text-accent-blue">'Vibe'</strong> - de snelheid en creativiteit die essentieel is om ideeën te valideren. Hij transformeert teams van passieve 'denkers' naar actieve 'makers' die zelf prototypes bouwen.
              </p>
              <p>
                Zijn methodiek: <strong className="text-accent-blue">Rapid Validation</strong>. Van business-probleem naar werkend prototype in uren, niet in maanden. Zodra de vibe is gevalideerd, nemen we het mee naar Marcel's architectuur voor productie-ready implementatie.
              </p>
            </div>

            <div className="mt-8 p-6 bg-accent-blue/10 rounded-xl border border-accent-blue/20">
              <p className="text-foreground/90 italic text-lg">
                "Once we've validated the vibe, we hand it over to the Architect to build the fortress."
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-2 bg-accent-blue/30 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-accent-blue rounded-full"></div>
                  </div>
                  <p className="text-sm text-foreground/60 mt-2">Vibe (Michel) → Fortress (Marcel)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Het Probleem */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Innovation Stagnation
              </h2>
              <p className="text-xl text-foreground/70">
                Het probleem dat Michel doorbreekt
              </p>
            </div>
            
            <div className="space-y-6 text-xl text-foreground/80 leading-relaxed">
              <p>
                Je hebt een briljant idee om een proces te automatiseren of een nieuwe app te lanceren, maar de IT-afdeling heeft een backlog van zes maanden.
              </p>
              <p>
                De kosten zijn hoog, de communicatie is stroef en tegen de tijd dat er een prototype is, is de markt al veranderd. <strong className="text-foreground">Goede ideeën sterven in de wachtkamer.</strong>
              </p>
              <p className="text-accent-blue font-semibold text-2xl">
                De oplossing? Empower je business-teams om zelf te bouwen via Vibecoding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Modules */}
      <section id="bootcamp" className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              De 4 Modules van het Bootcamp
            </h2>
            <p className="text-xl text-foreground/70">
              De P2P Academy Workflow: van probleem naar prototype
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-surface-dark border border-white/10 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-accent-blue font-bold text-lg">{module.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground flex-1">
                    {module.title}
                  </h3>
                </div>
                <p className="text-foreground/80 leading-relaxed ml-16">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat levert het op? */}
      <section className="py-20 lg:py-32 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Wat levert het op?
            </h2>
            <p className="text-xl text-foreground/70">
              Na het P2P Academy Bootcamp hebben jij en je team:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Een Werkend Prototype",
                description: "Een tastbaar resultaat van je eigen business-case, direct bruikbaar voor validatie."
              },
              {
                title: "De P2P Toolkit",
                description: "Toegang tot de best-practice prompts en tool-stacks die we dagelijks gebruiken."
              },
              {
                title: "Innovatie-Versnelling",
                description: "De vaardigheid om voortaan zelf de eerste stappen te zetten, zonder afhankelijkheid van externe ontwikkelaars."
              }
            ].map((result, index) => (
              <div
                key={index}
                className="bg-background border border-white/10 rounded-2xl p-8 text-center hover:border-accent-blue/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-blue/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {result.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formaten */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Kies je Format
            </h2>
            <p className="text-xl text-foreground/70">
              Open inschrijvingen of in-company trainingen op maat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface-dark border border-white/10 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Open Inschrijving
              </h3>
              <p className="text-foreground/70 mb-6">
                Sluit je aan bij andere professionals in een inspirerende groepssessie. Perfect voor individuele deelnemers en kleine teams.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">1-daagse intensieve workshop</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">Netwerken met peers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">Inclusief P2P Toolkit</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-dark border border-accent-blue/30 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300 relative">
              <div className="absolute -top-4 left-8 px-4 py-1 bg-accent-blue text-background text-sm font-semibold rounded-full">
                Populair
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                In-Company Training
              </h3>
              <p className="text-foreground/70 mb-6">
                Op maat gemaakt voor jouw organisatie. Ideaal voor innovatieteams, productmanagers en ambitieuze ondernemers.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">Aangepast aan jouw use cases</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">Op locatie of remote</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-blue mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground/80">Follow-up begeleiding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Boardroom FAQ */}
      <BoardroomFAQ variant="academy" />

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-accent-blue/15 via-accent-blue/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Klaar om van denker naar maker te gaan?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Schrijf je in voor de eerstvolgende ronde of boek een in-company sessie.
          </p>
          <div className="flex flex-col gap-4 justify-center max-w-md mx-auto">
            <a
              href="mailto:michel@prompt2production.nl"
              className="group"
            >
              <div className="inline-flex flex-col items-center justify-center px-8 py-4 bg-accent-blue text-background font-semibold rounded-full hover:bg-accent-blue/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background w-full">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Neem contact op
                </span>
                <span className="text-sm opacity-90 mt-1">Start de innovatie-motor (P2P Academy)</span>
              </div>
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
