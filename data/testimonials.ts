export type Testimonial = {
  name: string;
  quote: {
    en: string;
    ar: string;
  };
};

// ⚠️ PREVIEW DATA ONLY — for local testing of the carousel look.
// Replace this whole array back to the real one (just Adeeb) before
// committing or pushing to GitHub.
export const testimonials: Testimonial[] = [
  {
    name: "Adeeb Khasawneh",
    quote: {
      en: "An excellent experience from start to finish. The site was executed with real professionalism, and the design turned out even better than I expected.",
      ar: "تجربة ممتازة من البداية إلى النهاية، تنفيذ الموقع باحترافية عالية، والتصميم كان أجمل مما توقعت.",
    },
  },
  {
    name: "[PREVIEW] Client A",
    quote: {
      en: "[Preview placeholder] This is example text to test how a second testimonial card looks in the carousel.",
      ar: "[نص تجريبي] هذا مثال لاختبار شكل تعليق ثانٍ داخل السلايدر.",
    },
  },
  {
    name: "[PREVIEW] Client B",
    quote: {
      en: "[Preview placeholder] A slightly longer example sentence to see how the layout handles more text before it wraps to a new line.",
      ar: "[نص تجريبي] جملة أطول قليلاً لمعرفة كيف يتعامل التصميم مع نص أطول قبل الانتقال لسطر جديد.",
    },
  },
  {
    name: "[PREVIEW] Client C",
    quote: {
      en: "[Preview placeholder] Short one.",
      ar: "[نص تجريبي] جملة قصيرة.",
    },
  },
];