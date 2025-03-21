import { HomePreview } from './HomePreview';
import { AboutPreview } from './AboutPreview';
import { ContactPreview } from './ContactPreview';
import { FAQsPreview } from './FAQsPreview';
import { InstructorsPreview } from './InstructorsPreview';

// Make sure the CMS is loaded
declare global {
  interface Window {
    CMS: any;
  }
}

// Only run in browser, not during SSR
if (typeof window !== 'undefined' && window.CMS) {
  // Register preview templates
  window.CMS.registerPreviewTemplate('home', HomePreview);
  window.CMS.registerPreviewTemplate('about', AboutPreview);
  window.CMS.registerPreviewTemplate('contact', ContactPreview);
  window.CMS.registerPreviewTemplate('faqs', FAQsPreview);
  window.CMS.registerPreviewTemplate('instructors', InstructorsPreview);
}
