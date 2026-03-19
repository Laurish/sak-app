# Sandvikens AK – Webbapp

## Kom igång

```bash
npm install
npm run dev
```

## Deploya till GitHub Pages

1. Skapa ett nytt repo på GitHub, t.ex. `sak-app`
2. Ändra `homepage` i `package.json` till ditt användarnamn:
   ```
   "homepage": "https://DITT-NAMN.github.io/sak-app"
   ```
3. Ändra `base` i `vite.config.js` till `/sak-app/` (redan satt)
4. Kör:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/DITT-NAMN/sak-app.git
   git push -u origin main
   npm run deploy
   ```
5. Gå till GitHub → Settings → Pages → Source: `gh-pages` branch

## Nästa steg – Supabase

När du är redo att koppla ihop med riktig databas och inloggning:
- Skapa konto på supabase.com
- Skapa projekt, kopiera URL + anon key
- Installera: `npm install @supabase/supabase-js`
- Ersätt mockData med riktiga Supabase-anrop
