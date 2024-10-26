import type { Metadata } from 'next'

export const siteConfig: Metadata = {
  title: 'OPREMI ME: Umetno Inteligenčni Sobni Oblikovalec',
  description: 'Oblikujte svoj sanjski dom. Spremenite svoje ideje v profesionalne notranje modele z našo AI programsko opremo, ki je preprosta za uporabo.',
  keywords: [
    'sobni oblikovalec',
    'umetna inteligenca',
    'design',
    'dezajn',
    'oblikuj',
    'notranji prostori',
  ] as Array<string>,
  authors: {
    name: 'Prepad d.o.o.',
    url: 'https://prepad.si',
  },
} as const
