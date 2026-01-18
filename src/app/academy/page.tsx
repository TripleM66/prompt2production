import Link from 'next/link';
import Footer from '@/components/Footer';
import BoardroomFAQ from '@/components/BoardroomFAQ';

export default function AcademyPage() {
  const modules = [
    {
      number: "01",
      title: "De AI-mindset & strategie",
      description: "Hoe herken je processen die schreeuwen om een AI-oplossing? Van business-probleem naar een haarscherpe 'Prompt-strategie'."
    },
    {
      number: "02",
      title: "Vibecoding tools & technieken",
      description: "Werken met de modernste bouw-tools (zoals Replit, Bolt, Cursor). Hoe je AI aanstuurt om volledige applicaties te schrijven, te testen en te deployen. Wekelijks bijgewerkt met soevereine Europese modellen."
    },
    {
      number: "03",
      title: "Secure AI-architecture",
      description: "Voldoe aan enterprise-security standaarden en voorkom IT-blokkades. Leer hoe je Shadow AI transformeert naar compliant, audit-ready applicaties die datalekken voorkomen."
    },
    {
      number: "04",
      title: "The Build (Van idee naar app)",
      description: "Hands-on bouwen: Uiteindelijk heb je je eigen werkende applicatie live staan. Iteratief verbeteren: Hoe 'vibe' je door naar versie 2.0?"
    },
    {
      number: "05",
      title: "The Bridge naar productie",
      description: "Wanneer is een prototype genoeg en wanneer heb je de architectuur van Marcel (P2P Solutions) nodig? Hoe borg je deze nieuwe manier van werken in je dagelijkse workflow?"
    }
  ];

  const tenXShifts = [
    {
      title: "Van weken naar uren",
      before: "6 weken wachten op IT",
      after: "4 uur bouwen met AI",
      impact: "10x sneller valideren"
    },
    {
      title: "Van denkers naar makers",
      before: "Eindeloze requirement docs",
      after: "Werkende prototypes",
      impact: "10x meer ownership"
    },
    {
      title: "Van afhankelijk naar autonoom",
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
              <span className="text-accent-blue font-semibold">Certified Vibecoding Engineering</span>
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              Van Shadow AI naar<br />
              <span className="text-accent-blue">Gecertificeerde AI-architecten.</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-foreground/90 mb-6 font-medium">
              Stop PoC Purgatory. Legitimeer vibecoding als engineering-vaardigheid.
            </p>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed">
              Neem de angst voor "Spaghetti Code 2.0" weg. Transformeer je organisatie van 'denkers' naar 'makers' met focus op secure architectuur en enterprise-security standaarden.
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
                In mijn trainingen sla ik de brug tussen het ambacht van vroeger en de snelheid van nu. Ik leer teams en individuen hoe zij AI-assistenten en AI-agents kunnen aansturen, zodat ze zelfstandig applicaties en oplossingen bouwen. Dit is nadrukkelijk niet alleen voor ontwikkelaars, maar juist voor mensen zonder programmeerervaring die sneller willen bouwen, testen en verbeteren.
              </p>
              <p>
                Door mijn ervaring als internationaal woordvoerder en spreker op grote congressen ben ik in staat om:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong className="text-accent-blue">Complexe materie te versimpelen:</strong> Ik vertaal AI naar concrete stappen die direct bedrijfswaarde opleveren.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong className="text-accent-blue">Weerstand om te buigen naar enthousiasme:</strong> Ik herken de vragen die leven bij zowel de IT-afdeling als de directie, en ik verbind die perspectieven.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong className="text-accent-blue">Resultaatgerichte trainingen te geven:</strong> Dankzij mijn ervaring voor grote, internationale groepen zijn mijn trainingen energiek, helder en didactisch sterk.</span>
                </li>
              </ul>
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

      {/* Bewezen Expertise */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Bewezen Expertise
            </h2>
            <p className="text-xl text-foreground/70">
              Praktijkervaring uit complexe corporate omgevingen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Programmadirecteur Innovatie",
                description: "Bij Qbuzz implementeer ik AI niet vanuit PowerPoints, maar vanuit de praktijk in een complexe corporate omgeving."
              },
              {
                title: "Internationaal Spreker",
                description: "Ervaring als woordvoerder op grote congressen en het vertalen van complexe materie naar concrete stappen."
              },
              {
                title: "AI Democratization",
                description: "Ik empower business-teams om zelf te bouwen, zonder afhankelijkheid van de IT-backlog."
              },
              {
                title: "Rapid Validation",
                description: "Van business-probleem naar werkend prototype in uren, niet in maanden. Snelheid zonder kwaliteitsverlies."
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-surface-dark border border-white/10 rounded-2xl p-6 hover:border-accent-blue/50 transition-all duration-300"
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
                className="bg-surface-dark border border-accent-blue/30 rounded-2xl p-8 hover:border-accent-blue/50 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-accent-blue mb-6">
                  {shift.title}
                </h3>
                <div className="space-y-4 mb-6 flex-grow">
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

      {/* 4 Modules */}
      <section id="bootcamp" className="py-20 lg:py-32 bg-surface-dark">
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
                className="bg-background border border-white/10 rounded-2xl p-8 text-center hover:border-accent-blue/50 transition-all duration-300 flex flex-col"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-blue/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {result.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed flex-grow">
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

      {/* Productionize Your Vibe */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent-orange/10 via-background to-background border-y border-accent-orange/20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-surface-dark border-2 border-accent-orange/40 rounded-3xl p-8 lg:p-12 shadow-[0_0_40px_rgba(255,107,53,0.2)]">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-accent-orange/20 rounded-full mb-4">
                <span className="text-accent-orange font-semibold">Van Prototype naar Productie</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Productionize Your Vibe
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Heb je een werkend prototype gebouwd tijdens de Academy? Laat Marcel het professioneel opschalen naar een enterprise-ready platform met veilige architectuur en AI Act compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-orange/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Security & Compliance</h3>
                <p className="text-foreground/70 text-sm">Enterprise-grade beveiliging en AI Act compliant</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-orange/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Schaalbaarheid</h3>
                <p className="text-foreground/70 text-sm">Robuuste architectuur voor groei</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent-orange/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Documentatie</h3>
                <p className="text-foreground/70 text-sm">Volledige technische documentatie en overdracht</p>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-white/10">
              <Link
                href="/solutions"
                className="inline-flex items-center px-8 py-4 bg-accent-orange text-background font-semibold rounded-full hover:bg-accent-orange/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,53,0.4)] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-surface-dark"
              >
                Bespreek je prototype met Marcel
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
