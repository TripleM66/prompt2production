export default function MethodSection() {
  const steps = [
    {
      title: "PROMPT",
      subtitle: "Het Idee",
      description: "Van visie naar concrete AI-use case. We vertalen jouw bedrijfsdoelen naar haalbare AI-oplossingen.",
      color: "blue",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "PROTOTYPE",
      subtitle: "De Validatie",
      description: "Razendsnel een werkend prototype bouwen. Testen, leren en itereren zonder grote investeringen.",
      color: "purple",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "PRODUCTION",
      subtitle: "De Realisatie",
      description: "Schaalbare enterprise-architectuur met security, compliance en robuuste backends. Klaar voor productie.",
      color: "orange",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            De P2P Methode
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto">
            Van idee naar schaalbare productie in drie stappen
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue via-purple-500 to-accent-orange transform -translate-y-1/2" />
          
          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-surface-darker border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group">
                  {/* Icon badge */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6
                    ${step.color === 'blue' ? 'bg-accent-blue/20 text-accent-blue' : ''}
                    ${step.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : ''}
                    ${step.color === 'orange' ? 'bg-accent-orange/20 text-accent-orange' : ''}
                  `}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-2
                    ${step.color === 'blue' ? 'text-accent-blue' : ''}
                    ${step.color === 'purple' ? 'text-purple-400' : ''}
                    ${step.color === 'orange' ? 'text-accent-orange' : ''}
                  `}>
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 font-medium mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-foreground/30">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/70 text-lg mb-6">
            Klaar om jouw AI-idee werkelijkheid te maken?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/academy"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-full hover:bg-accent-blue hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-surface-dark"
            >
              Start met Academy
            </a>
            <a
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent-orange text-accent-orange font-semibold rounded-full hover:bg-accent-orange hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(255,107,53,0.3)] hover:shadow-[0_0_25px_rgba(255,107,53,0.5)] focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-surface-dark"
            >
              Ontdek Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
