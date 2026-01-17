# Environment Variabelen Setup

Voor lokale development moet je een `.env.local` bestand aanmaken in de root van het project.

## Stappen:

1. Kopieer `.env.example` naar `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Pas de waarden aan indien nodig

## Variabelen:

### `CONCEPT_PASSWORD`
Het wachtwoord voor toegang tot de concept website.

### `NEXT_PUBLIC_WEB3FORMS_KEY`
De API key voor het Web3Forms contactformulier.
- Verkrijg je eigen key op: https://web3forms.com
- Deze key is publiek zichtbaar in de browser (daarom `NEXT_PUBLIC_`)

## Deployment

Voor productie (Netlify/Vercel), stel deze environment variabelen in via de deployment platform settings.

**Let op:** Commit nooit het `.env.local` bestand naar Git!
