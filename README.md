# ISTANBUL KEBAB House - Baia Flaminia Pesaro

Sito web statico, moderno e veloce (HTML5, CSS3, JavaScript) per **ISTANBUL KEBAB House**, situato a Baia Flaminia, Pesaro.

## Caratteristiche
- **100% Statico (Senza Python)**: Nessun server o interprete Python richiesto. Si apre direttamente in qualsiasi browser (basta fare doppio click su `index.html`) oppure su qualsiasi hosting statico gratuito (GitHub Pages, Vercel, Netlify, Cloudflare Pages).
- **Scheda Dettagli & Ingredienti per Piatto**: Ogni piatto nel menù include un link "Dettagli & Ingredienti" (ed etichetta cliccabile sull'immagine) che apre una finestra modale con la lista completa degli ingredienti, gli allergeni e i consigli per personalizzare o togliere ingredienti indesiderati (es. senza cipolla, senza salse piccanti, salse a parte).
- **Finestra Ordinazioni & Numero del Locale**: I pulsanti "Ordina Online" aprono una finestra modale con i numeri del locale (`+39 351 0353459` per chiamate e WhatsApp, fisso `+39 0721 25648`) e l'indirizzo con civico (`Viale Bruxelles 20, Baia Flaminia Pesaro`).
- **Menù Interattivo**: Ricerca in tempo reale e filtri per categorie (Panini & Piadine, Kebab Box, Vegetariano, ecc.). Cliccando su "Ordina Online" per un singolo piatto, il piatto selezionato viene pre-caricato nella richiesta WhatsApp.
- **Design Responsive**: Ottimizzato per smartphone, tablet e computer desktop.

## Struttura dei File
```
risto/
├── index.html     # Pagina principale del sito
├── styles.css     # Fogli di stile CSS moderni e responsive
├── app.js         # Logica JavaScript (menù interattivo, finestra ordini, galleria)
├── README.md      # Documentazione del progetto
└── .gitignore     # File ignorati da Git
```

## Come Avviare
1. **In Locale**:
   - Apri semplicemente `index.html` con il tuo browser preferito (Chrome, Firefox, Edge, Safari).
   - Oppure usa un qualsiasi server locale, ad esempio l'estensione "Live Server" di VS Code.
2. **Online (Vercel / GitHub Pages)**:
   - Collega la cartella o il repository GitHub e fai il deploy immediato: non serve alcun comando di build, la cartella principale contiene già `index.html`.
