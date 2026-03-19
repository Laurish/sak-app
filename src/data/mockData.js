export const traningstider = [
  {
    dag: 'Måndag',
    pass: [
      { tid: '17:30–19:00', grupp: 'Ungdom (10–14 år)', tränare: 'Marcus Lindgren' },
      { tid: '19:00–21:00', grupp: 'Senior / Elite', tränare: 'Petra Holm' },
    ],
  },
  {
    dag: 'Onsdag',
    pass: [
      { tid: '17:30–19:00', grupp: 'Ungdom (10–14 år)', tränare: 'Marcus Lindgren' },
      { tid: '19:00–21:00', grupp: 'Junior / Senior', tränare: 'Petra Holm' },
    ],
  },
  {
    dag: 'Torsdag',
    pass: [
      { tid: '18:00–20:00', grupp: 'Masters (35+)', tränare: 'Johan Eriksson' },
    ],
  },
  {
    dag: 'Lördag',
    pass: [
      { tid: '10:00–12:00', grupp: 'Öppen träning – alla nivåer', tränare: 'Johan Eriksson' },
    ],
  },
]

export const tavlingar = [
  {
    id: 1,
    namn: 'Sandviken Open 2025',
    datum: '2025-04-12',
    plats: 'Göransson Arena, Sandviken',
    anmälningsstänger: '2025-03-28',
    avgift: 200,
    viktklasser: ['56kg', '69kg', '74kg', '83kg', '93kg', '105kg', '+105kg'],
    beskrivning: 'Vår traditionella hemmatävling! Öppen för alla licensierade lyftare.',
    anmälda: 24,
  },
  {
    id: 2,
    namn: 'SM Ungdom 2025',
    datum: '2025-05-17',
    plats: 'Linköping',
    anmälningsstänger: '2025-04-30',
    avgift: 150,
    viktklasser: ['56kg', '69kg', '74kg', '83kg', '93kg'],
    beskrivning: 'Svenska Mästerskapen för ungdomslyftare.',
    anmälda: 8,
  },
  {
    id: 3,
    namn: 'Gästrike Cup',
    datum: '2025-06-07',
    plats: 'Gävle Sporthall',
    anmälningsstänger: '2025-05-24',
    avgift: 175,
    viktklasser: ['56kg', '69kg', '74kg', '83kg', '93kg', '105kg', '+105kg'],
    beskrivning: 'Regionstävling med hög stämning och trevligt sällskap.',
    anmälda: 16,
  },
]

export const mockUser = {
  namn: 'Daniel Svensson',
  epost: 'daniel@example.com',
  personnummer: '19850312-XXXX',
  medlemsnummer: 'SAK-2847',
  medlemskap: {
    typ: 'Senior',
    giltigtTill: '2025-12-31',
    betaltDatum: '2025-01-15',
    avgift: 800,
  },
  licens: {
    typ: 'Tävlingslicens',
    giltigtTill: '2025-12-31',
    förbund: 'Svenska Tyngdlyftningsförbundet',
  },
  anmälningar: [
    { tävling: 'Sandviken Open 2025', viktklass: '83kg', status: 'Bekräftad', betald: true },
  ],
}
