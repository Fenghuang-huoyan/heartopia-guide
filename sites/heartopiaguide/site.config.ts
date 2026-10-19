export const siteConfig = {
  siteName: 'Heartopia Fan Guide',
  domain: 'heartopiaguide.wiki',
  url: 'https://heartopiaguide.wiki',
  gameTitle: 'Heartopia',
  steamAppId: 4025700,
  steamUrl: 'https://store.steampowered.com/app/4025700/Heartopia/',
  supportUrl: 'http://www.xd.com/service',
  supportEmail: 'tousu@xd.com',
  social: {
    x: 'https://x.com/myheartopia',
    youtube: 'https://www.youtube.com/@heartopia-official',
    instagram: 'https://www.instagram.com/myheartopia/',
  },
  developer: 'XD',
  publisher: 'XD',
  tagline: 'Redeem codes, the first week, and a DG path you can follow without a fish database.',
  locale: 'en',
  contentRoot: 'heartopia',
  homeTitle: 'Heartopia Fan Guide — Redeem Codes, DG Level & First Week',
  homeDescription:
    'Unofficial Heartopia wiki for Steam AppID 4025700. A maintained redeem-code hub, the beginner and DG level path, and seasonal farming and gold guides. Not a full fish or bug database.',
  analytics: {
    gaId: 'G-N5S1FVLLB0',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library art for Heartopia: three characters on a flower-lined path, with a cottage, a windmill, and distant mountains',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'heartopiaguide.wiki is an unofficial fan-made guide and wiki for Heartopia. It is not affiliated with, endorsed by, or sponsored by XD, XD Inc., XD Entertainment, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. Codes, drop rates, and seasonal data change often — verify in-game. This site is not responsible for expired codes, account bans, or purchase decisions.',
  nav: [
    { href: '/redeem-codes', label: 'Codes' },
    { href: '/beginner-guide', label: 'First week' },
    { href: '/dg-level', label: 'DG level' },
    { href: '/farming-seasons', label: 'Farming' },
    { href: '/make-money', label: 'Gold' },
  ],
  moreNav: [
    { href: '/friendship-gifts', label: 'Friends' },
    { href: '/fishing', label: 'Fishing' },
    { href: '/cooking', label: 'Cooking' },
    { href: '/seasons-events', label: 'Seasons' },
    { href: '/npcs-gifts', label: 'NPCs' },
    { href: '/hobbies', label: 'Hobbies' },
    { href: '/faq', label: 'FAQ' },
  ],
  version: {
    label: 'Checked 19 Oct 2026',
    detail:
      'Code lists and seasonal notes compared with public trackers on 19 Oct 2026. Not an in-client audit. Steam figures are dated on the page.',
  },
  databases: [
    { href: 'https://heartopia.life/', label: 'Heartopia.Life' },
    { href: 'https://heartopia.gg/', label: 'Heartopia.gg' },
    { href: 'https://www.heartodex.com/en/', label: 'Heartodex' },
  ],
} as const;

export type NavItem = { href: string; label: string };
