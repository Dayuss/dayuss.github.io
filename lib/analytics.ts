export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: unknown[]) => void;
  }
}

export const isGtagReady = () => typeof window !== 'undefined' && typeof window.gtag === 'function';

export const trackButtonClick = (label: string, category = 'Button') => {
  if (!isGtagReady()) {
    return;
  }

  window.gtag('event', 'click', {
    event_category: category,
    event_label: label,
  });
};
