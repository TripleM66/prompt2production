'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface BoardroomFAQProps {
  variant?: 'academy' | 'solutions';
}

export default function BoardroomFAQ({ variant = 'solutions' }: BoardroomFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Hoe voorkomen we dat AI-innovatie leidt tot 'Shadow IT' en datalekken?",
      answer: "Innovatie zonder kaders is een risico. Daarom hanteren wij de 'Sanitized Sandbox' methode. Michel traint het team om te innoveren binnen veilige, afgeschermde omgevingen. Marcel zorgt er vervolgens voor dat elk succesvol prototype wordt omgezet in een enterprise-grade oplossing die voldoet aan jullie security-protocollen en GDPR-wetgeving. Wij brengen innovatie uit de schaduw en maken het onderdeel van de officiële architectuur."
    },
    {
      question: "Wat is de werkelijke ROI van deze aanpak vergeleken met traditionele IT-trajecten?",
      answer: "Traditionele IT-trajecten hebben vaak een 'time-to-market' van 6 tot 12 maanden, met hoge initiële kosten. Onze aanpak verlaagt de 'cost-of-failure'. Via de Academy (Michel) valideren we business-cases binnen dagen. Alleen de bewezen concepten worden door Marcel geschaald. Dit bespaart niet alleen tienduizenden euro's aan verloren ontwikkeltijd, maar zorgt ook voor een direct concurrentievoordeel door extreme snelheid."
    },
    {
      question: "Gaat AI onze huidige medewerkers vervangen, of kunnen ze dit echt leren?",
      answer: "AI vervangt geen mensen, maar mensen die AI gebruiken vervangen mensen die dat niet doen. De P2P Academy is er juist op gericht om je huidige toptalent te transformeren tot 'AI-enabled makers'. We verhogen de menselijke output met een factor 10. Het resultaat is een team dat niet meer hoeft te wachten op techniek, maar zelf de regie voert over innovatie."
    },
    {
      question: "Wat gebeurt er als we opschalen? Kan deze techniek de groei van onze business aan?",
      answer: "Dat is exact waarom wij als duo werken. Een prototype is een belofte; productie-software is een garantie. Marcel brengt 20 jaar ervaring in het bouwen en replatformen van SaaS scale-ups. Hij zorgt ervoor dat de AI-agents en architecturen die we bouwen niet bezwijken onder groei, maar juist de motor worden van die groei. We bouwen voor de lange termijn, niet voor de korte hype."
    }
  ];

  const accentColor = variant === 'academy' ? 'accent-blue' : 'accent-orange';

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className={`inline-block px-4 py-2 bg-${accentColor}/20 rounded-full mb-4`}>
            <span className={`text-${accentColor} font-semibold`}>Voor Directie & Management</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Boardroom FAQ
          </h2>
          <p className="text-xl text-foreground/70">
            Strategische vragen over AI-implementatie beantwoord
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface-dark border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background ${
                  variant === 'academy' ? 'focus:ring-accent-blue' : 'focus:ring-accent-orange'
                }`}
              >
                <span className="text-lg font-semibold text-foreground pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  } ${variant === 'academy' ? 'text-accent-blue' : 'text-accent-orange'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-foreground/80 leading-relaxed">
                    <strong className={variant === 'academy' ? 'text-accent-blue' : 'text-accent-orange'}>
                      Het P2P Antwoord:{' '}
                    </strong>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
