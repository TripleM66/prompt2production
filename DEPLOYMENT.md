# Deployment Instructies voor prompt2production.nl

## Node.js Hosting Deployment

### Vereisten
- Node.js versie 18.x of hoger
- npm of yarn package manager
- SSH toegang tot je hosting server

### Stap 1: Upload Bestanden naar Server

Upload de volgende bestanden/mappen naar `/home/deb59497n2/domains/prompt2production.nl/apps/`:

**Verplichte bestanden:**
```
├── .next/                 (hele folder na build)
├── public/               (hele folder met afbeeldingen)
├── src/                  (hele folder met source code)
├── node_modules/         (of installeer later met npm install)
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── .gitignore (optioneel)
```

**Niet nodig:**
- `.git/` folder
- `README.md`
- Development bestanden

### Stap 2: Installeer Dependencies op Server

SSH naar je server en navigeer naar de app folder:
```bash
cd /home/deb59497n2/domains/prompt2production.nl/apps/
npm install --production
```

### Stap 3: Build op Server (indien nodig)

Als je de `.next` folder niet hebt geüpload:
```bash
npm run build
```

### Stap 4: Start de Applicatie

```bash
npm start
```

De applicatie draait standaard op poort 3000.

### Stap 5: Configureer Reverse Proxy (Apache/Nginx)

Je hosting provider moet de Next.js app beschikbaar maken via een reverse proxy.

**Voor Apache (.htaccess of vhost config):**
```apache
<VirtualHost *:80>
    ServerName prompt2production.nl
    ServerAlias www.prompt2production.nl
    
    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```

**Voor Nginx:**
```nginx
server {
    listen 80;
    server_name prompt2production.nl www.prompt2production.nl;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Stap 6: Process Manager (PM2 - Aanbevolen)

Voor productie gebruik je best een process manager zoals PM2:

```bash
# Installeer PM2 globaal
npm install -g pm2

# Start de app met PM2
pm2 start npm --name "prompt2production" -- start

# Zorg dat PM2 opstart bij server reboot
pm2 startup
pm2 save
```

**PM2 Commando's:**
```bash
pm2 status                 # Check status
pm2 logs prompt2production # Bekijk logs
pm2 restart prompt2production # Herstart app
pm2 stop prompt2production    # Stop app
```

### Stap 7: Omgevingsvariabelen (optioneel)

Maak een `.env.production` bestand aan:
```env
NODE_ENV=production
PORT=3000
```

### Wachtwoord voor Concept Website

De website is beveiligd met wachtwoord:
- **Wachtwoord:** `p2p2026`
- Wijzig dit in `src/app/api/auth/route.ts` als gewenst

### SSL/HTTPS Certificaat

Vraag je hosting provider om een SSL certificaat te installeren voor:
- prompt2production.nl
- www.prompt2production.nl

Of gebruik Let's Encrypt (gratis):
```bash
certbot --apache -d prompt2production.nl -d www.prompt2production.nl
```

### Troubleshooting

**App start niet:**
- Check Node.js versie: `node --version` (moet 18+ zijn)
- Check logs: `pm2 logs` of `npm start` output
- Check of poort 3000 vrij is: `lsof -i :3000`

**Wachtwoordbeveiliging werkt niet:**
- Check of cookies enabled zijn
- Check of HTTPS actief is (vereist voor secure cookies)

**Pagina's laden niet:**
- Check reverse proxy configuratie
- Check firewall settings
- Check of Next.js server draait: `pm2 status`

### Updates Deployen

1. Stop de applicatie: `pm2 stop prompt2production`
2. Upload nieuwe bestanden
3. Rebuild: `npm run build`
4. Start opnieuw: `pm2 restart prompt2production`

### Contact

Voor vragen over de deployment, neem contact op met je hosting provider over:
- Node.js versie en ondersteuning
- Reverse proxy configuratie
- SSL certificaat installatie
- PM2 of andere process manager setup
