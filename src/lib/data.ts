export type ProjectStatus = 'active' | 'coming-soon'

export interface Project {
  id: string
  name: string
  description: string
  detail: string
  url: string | null
  status: ProjectStatus
  iconName: string
}

export interface Reference {
  id: string
  name: string
  logoPath: string | null
}

export const projects: Project[] = [
  {
    id: 'ng-stranky',
    name: 'NG Stránky',
    description: 'Tvorba webů a e-shopů na míru',
    detail: 'Navrhujeme a programujeme weby, e-shopy a landing pages pro firmy, které chtějí vyniknout online.',
    url: 'https://ngstranky.cz',
    status: 'active',
    iconName: 'Globe',
  },
  {
    id: 'ng-emailing',
    name: 'NG Emailing',
    description: 'Profesionální e-mail marketing',
    detail: 'Správa e-mailových kampaní, tvorba šablon a automatizace — od nastavení po analýzu výsledků.',
    url: 'https://ngemailing.cz',
    status: 'active',
    iconName: 'Mail',
  },
  {
    id: 'vase-mesto',
    name: 'Vaše Město',
    description: 'Lokální online komunity a portály',
    detail: 'Budujeme lokální weby a komunity, které propojují lidi a firmy v jejich městě.',
    url: 'https://vasemesto.cz',
    status: 'active',
    iconName: 'MapPin',
  },
]

export const references: Reference[] = [
  { id: 'axa',     name: 'AXA',     logoPath: '/images/logos/axa.png' },
  { id: 'renomia', name: 'Renomia', logoPath: '/images/logos/renomia.jpg' },
  { id: 'bmto',    name: 'BMTO',    logoPath: '/images/logos/bmto.svg' },
]

export const contact = {
  company: 'NG Consulting s.r.o.',
  email:   'vytiska@ngstranky.cz',
  phone:   '+420 608 133 557',
  address: 'Hanychovská 575/33, 460 07 Liberec',
  web:     'https://ngstranky.cz',
}
