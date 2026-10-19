/**
 * Adsterra Native Banner placeholder.
 *
 * Leave `id` empty (or prefixed with ADSTERRA_) until the zone key exists.
 * An empty key does not request invoke.js.
 *
 * When you create the placement:
 * - Website: heartopiaguide.wiki
 * - Format: Native Banner
 * - Put the GET CODE path segment in `afterQuickAnswer.id` (the zone key, not the placement id)
 * - Set `invokeBase` to the host from that same GET CODE snippet
 * - Guide pages share this one slot. Do not paste the same zone key onto a second slot.
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
    id: '',
    format: 'native-banner',
  },
  midArticle: { id: 'ADSTERRA_MID_ARTICLE', format: 'in-article' },
  sidebar: { id: 'ADSTERRA_SIDEBAR', format: '300x250' },
  footer: { id: 'ADSTERRA_FOOTER', format: 'banner' },
} as const satisfies Record<string, AdSlotConfig>;

export const adsConfig = {
  network: 'adsterra' as const,
  enabled: true,
  invokeBase: 'https://example.invalid',
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
