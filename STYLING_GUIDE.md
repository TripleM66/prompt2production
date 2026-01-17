# Styling Guide - Prompt2Production.nl

## Design Filosofie
**Tech-Forward Design System** - Een modern, professioneel design dat de brug slaat tussen AI-innovatie en enterprise-betrouwbaarheid.

---

## Kleurenpalet

### Basis Kleuren

#### Dark Mode (Primair)
```css
--background: #0a0a0a          /* Zeer donker zwart - hoofdachtergrond */
--foreground: #ededed          /* Licht grijs - primaire tekst */
--surface-dark: #1a1a1a        /* Donker antraciet - cards/secties */
--surface-darker: #0f0f0f      /* Extra donker - footer/diepte */
```

**Gebruik:**
- `background`: Hoofdachtergrond van de hele website
- `foreground`: Alle primaire tekst en content
- `surface-dark`: Achtergrond voor cards, secties en containers
- `surface-darker`: Footer, diepere lagen, subtiele contrasten

---

### Accent Kleuren

#### Accent 1: Elektrisch Blauw (Academy)
```css
--accent-blue: #0066ff
```

**Symboliek:** Snelheid, innovatie, technologie  
**Gebruik voor:**
- P2P Academy branding
- Links en hover-states voor Academy-gerelateerde content
- Call-to-action buttons voor Academy
- Gloed-effecten in Academy sectie
- Interactieve elementen

**Voorbeelden:**
- Button borders: `border-2 border-accent-blue`
- Text highlights: `text-accent-blue`
- Gloed-effecten: `shadow-[0_0_15px_rgba(0,102,255,0.3)]`

#### Accent 2: Metaal-Oranje/Goud (Solutions)
```css
--accent-orange: #ff6b35       /* Primair oranje */
--accent-gold: #ffa500         /* Secundair goud */
```

**Symboliek:** Architectuur, degelijkheid, betrouwbaarheid  
**Gebruik voor:**
- P2P Solutions branding
- Links en hover-states voor Solutions-gerelateerde content
- Call-to-action buttons voor Solutions
- Gloed-effecten in Solutions sectie
- Enterprise-gerelateerde elementen

**Voorbeelden:**
- Button borders: `border-2 border-accent-orange`
- Text highlights: `text-accent-orange`
- Gloed-effecten: `shadow-[0_0_15px_rgba(255,107,53,0.3)]`
- Gradient accenten: `from-accent-orange/15 via-accent-gold/5`

---

## Typografie

### Font Family
**Primair:** Inter (sans-serif)

```css
font-family: 'Inter', system-ui, sans-serif;
```

**Karakteristieken:**
- Strak en modern sans-serif lettertype
- Uitstekende leesbaarheid op schermen
- Professionele uitstraling
- Breed gewichtsbereik (300-900)

### Font Weights
```css
font-weight: 300;  /* Light - subtiele tekst */
font-weight: 400;  /* Regular - body tekst */
font-weight: 500;  /* Medium - navigatie */
font-weight: 600;  /* Semibold - subheadings */
font-weight: 700;  /* Bold - headings */
font-weight: 800;  /* Extrabold - hero titles */
font-weight: 900;  /* Black - speciale accenten */
```

### Typografie Schaal

#### Headings
```css
/* Hero Titles (H1) */
text-4xl lg:text-6xl xl:text-7xl font-bold
/* 2.25rem → 3.75rem → 4.5rem */

/* Section Titles (H2) */
text-3xl lg:text-5xl font-bold
/* 1.875rem → 3rem */

/* Subsection Titles (H3) */
text-2xl lg:text-3xl font-semibold
/* 1.5rem → 1.875rem */
```

#### Body Text
```css
/* Large Body */
text-lg lg:text-xl
/* 1.125rem → 1.25rem */

/* Regular Body */
text-base
/* 1rem */

/* Small Text */
text-sm
/* 0.875rem */
```

---

## Spacing & Layout

### Container Widths
```css
max-w-7xl mx-auto    /* Hoofdcontainer - 80rem */
max-w-2xl mx-auto    /* Content container - 42rem */
```

### Padding Scale
```css
px-6 sm:px-8 lg:px-12    /* Horizontale padding - responsive */
py-20 lg:py-32           /* Verticale padding - secties */
```

---

## Effecten & Interacties

### Gloed-effecten (Glow)

#### Academy (Blauw)
```css
/* Subtiel */
shadow-[0_0_15px_rgba(0,102,255,0.3)]

/* Hover */
hover:shadow-[0_0_25px_rgba(0,102,255,0.5)]

/* Achtergrond gloed */
bg-gradient-to-br from-accent-blue/15 via-accent-blue/5 to-transparent
```

#### Solutions (Oranje)
```css
/* Subtiel */
shadow-[0_0_15px_rgba(255,107,53,0.3)]

/* Hover */
hover:shadow-[0_0_25px_rgba(255,107,53,0.5)]

/* Achtergrond gloed */
bg-gradient-to-bl from-accent-orange/15 via-accent-gold/5 to-transparent
```

### Transitions
```css
transition-all duration-300        /* Standaard interacties */
transition-opacity duration-500    /* Gloed-effecten */
transition-transform duration-300  /* Scale/beweging */
```

### Hover States
```css
/* Buttons */
hover:bg-accent-blue hover:text-background

/* Links */
hover:text-accent-blue

/* Scale (subtiel) */
group-hover:scale-[1.02]
```

---

## Component Patterns

### Buttons (CTA)

#### Academy Button
```tsx
<Link 
  href="/academy"
  className="inline-flex items-center px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-full hover:bg-accent-blue hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.5)]"
>
  Naar de Academy
</Link>
```

#### Solutions Button
```tsx
<Link 
  href="/solutions"
  className="inline-flex items-center px-8 py-4 border-2 border-accent-orange text-accent-orange font-semibold rounded-full hover:bg-accent-orange hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(255,107,53,0.3)] hover:shadow-[0_0_25px_rgba(255,107,53,0.5)]"
>
  Ontdek Solutions
</Link>
```

### Navigation
```tsx
<Link 
  href="/academy" 
  className="text-foreground hover:text-accent-blue transition-colors duration-200 font-medium"
>
  Academy
</Link>
```

---

## Best Practices

### Do's ✅
- Gebruik altijd CSS variabelen voor kleuren
- Houd hover-effecten subtiel (max 2% scale)
- Gebruik gloed-effecten spaarzaam voor accent
- Zorg voor voldoende contrast (minimaal 4.5:1)
- Test op verschillende schermformaten
- Gebruik Inter font voor consistentie

### Don'ts ❌
- Geen harde kleurwaarden in components
- Geen agressieve animaties die layout verschuiven
- Geen te felle gloed-effecten (max opacity 0.5)
- Geen mix van verschillende font-families
- Geen te kleine tekst (minimaal 14px)
- Geen pure witte (#ffffff) of pure zwarte (#000000) kleuren

---

## Accessibility

### Contrast Ratios
- Normale tekst: minimaal 4.5:1
- Grote tekst (18px+): minimaal 3:1
- Interactieve elementen: minimaal 3:1

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background
```

---

## Tailwind Configuration

Alle kleuren en styling zijn geconfigureerd in:
- `tailwind.config.ts` - Tailwind theme extensies
- `src/app/globals.css` - CSS variabelen

### Gebruik in Components
```tsx
// Correct ✅
className="bg-background text-foreground"
className="text-accent-blue"

// Incorrect ❌
className="bg-[#0a0a0a]"
style={{ color: '#0066ff' }}
```

---

## Versie
**v1.0** - Januari 2026  
Laatste update: 17 januari 2026
