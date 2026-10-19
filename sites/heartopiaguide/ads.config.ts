/**
 * Adsterra Native Banner for guide pages, directly after Quick Answer.
 *
 * Ops reference only — never use these as the invoke.js key:
 * - Website ID: 6135271 (Approved), site heartopiaguide.wiki
 * - Placement ID: 31818357 (Active)
 *
 * The script key is the zone key in `afterQuickAnswer.id`.
 * Script URL: `${invokeBase}/${id}/invoke.js`
 * Adult and sensitive categories stay off. Other slots stay on ADSTERRA_ placeholders
 * and do not request a script. Guide pages share this one zone key.
 */
export type AdSlotConfig = {
  id: string;
  format: string;
  invokeBase?: string;
  containerPrefix?: string;
};

const slots = {
  homeHero: { id: 'ADSTERRA_HOME_HERO', format: '728x90' },
  afterQuickAnswer: {
    id: 'ec52c4641a052ff6381f4fa19fa18cf6',
    format: 'native-banner',
    invokeBase: 'https://pl31902952.profitableratecpmnetwork.com',
  },
  midArticle: { id: 'ADSTERRA_MID_ARTICLE', format: 'in-article' },
  sidebar: { id: 'ADSTERRA_SIDEBAR', format: '300x250' },
  footer: { id: 'ADSTERRA_FOOTER', format: 'banner' },
} as const satisfies Record<string, AdSlotConfig>;

export const adsConfig = {
  network: 'adsterra' as const,
  enabled: true,
  invokeBase: 'https://pl31902952.profitableratecpmnetwork.com',
  containerPrefix: 'container-',
  slots,
};

export type AdSlotName = keyof typeof slots;

export function resolveAdPlacement(name: AdSlotName) {
  const slot: AdSlotConfig = slots[name];
  const invokeBase = (slot.invokeBase ?? adsConfig.invokeBase).replace(/\/$/, '');
  const containerPrefix = slot.containerPrefix ?? adsConfig.containerPrefix;
  const id = slot.id.trim();
  return {
    id,
    format: slot.format,
    invokeBase,
    containerId: `${containerPrefix}${id}`,
    scriptSrc: id ? `${invokeBase}/${id}/invoke.js` : '',
    active: adsConfig.enabled && id.length > 0 && !id.startsWith('ADSTERRA_'),
  };
}
