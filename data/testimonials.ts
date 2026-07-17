export type Testimonial = {
  name: string;
  quote: {
    en: string;
    ar: string;
  };
};


export const testimonials: Testimonial[] = [
  {
    name: "Adeeb Khasawneh",
    quote: {
      en: "An excellent experience from start to finish. The site was executed with real professionalism, and the design turned out even better than I expected.",
      ar: "تجربة ممتازة من البداية إلى النهاية، تنفيذ الموقع باحترافية عالية، والتصميم كان أجمل مما توقعت.",
    },
  },
  {
    name: "Sarah Mohammed",
    quote: {
      en: "The website is fast, responsive on all devices, and every request we made was completed quickly. I highly recommend working with him.",
      ar: "الموقع سريع، متجاوب مع جميع الأجهزة، وكل الملاحظات التي طلبناها تم تنفيذها بسرعة. أنصح بالتعامل معه",
    },
  },
  {
    name: "Mohammed bani melhem",
    quote: {
      en: "I really appreciated the attention to detail and the smooth communication. The final result was highly professional.",
      ar: "أعجبني الاهتمام بالتفاصيل وسهولة التواصل. النتيجة النهائية كانت احترافية جدًا.",
    },
  },
  {
    name: "nadeem malkawi",
    quote: {
      en: "The project was delivered on time, and the quality of work was outstanding. I will definitely work with him again.",
      ar: "التسليم كان في الوقت المحدد، وجودة العمل ممتازة. سأتعامل معه مرة أخرى في المشاريع القادمة.",
    },
  },
];