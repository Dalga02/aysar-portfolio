export type Lang = "en" | "ar";

export interface TranslationDict {
  brand: {
    shortName: string;
  };
  nav: {
    about: string;
    skills: string;
    services: string;
    projects: string;
    experience: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    titleHighlight: string;
    subtitlePrefix: string;
    subtitle: string;
    typing: string[];
    viewProjects: string;
    resume: string;
    location: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    bio1: string;
    bio2: string;
    techLabel: string;
    stats: { value: number; suffix: string; label: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groupTitles: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
    explore: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    categories: Record<
      "All" | "Frontend" | "Backend" | "Full Stack" | "AI" | "Open Source",
      string
    >;
    inDevelopment: string;
    percentComplete: string;
    noProjects: string;
    items: { title: string; description: string }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; org: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    comingSoon: string;
    heading1: string;
    heading2: string;
    body: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    available: string;
    emailLabel: string;
    whatsappLabel: string;
    whatsappSub: string;
    basedIn: string;
    elsewhere: string;
    copied: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    replyNote: string;
    send: string;
    sending: string;
    sent: string;
    errors: {
      name: string;
      email: string;
      message: string;
      notConfigured: string;
      generic: string;
      network: string;
    };
  };
  footer: {
    crafted: string;
    builtWith: string;
    and: string;
  };
}

export const translations: Record<Lang, TranslationDict> = {
  en: {
    brand: {
      shortName: "Aysar.Dalga",
    },
    nav: {
      about: "About",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      getInTouch: "Get in touch",
    },
    hero: {
      badge: "Available for new work",
      titleLine1: "Crafting digital",
      titleLine2: "experiences",
      titleLine3: "that feel",
      titleHighlight: "alive.",
      subtitlePrefix: "Hey, I'm",
      subtitle:
        "I build fast, thoughtful web apps end to end — from architecture and API to the last pixel of the interface.",
      typing: [
        "Full-Stack Developer",
        "React & Next.js Developer",
        "Next.js Specialist",
        "UI Engineer",
        "Problem Solver",
      ],
      viewProjects: "View projects",
      resume: "Résumé",
      location: "Amman, Jordan",
    },
    about: {
      eyebrow: "About",
      title: "Engineer who cares about the last 10%.",
      description:
        "I've spent the last few years building products that need to work well on a phone in a village and a monitor in a boardroom. I like small teams, careful choices, and code that will read well a year from now.",
      bio1:
        "Based in Amman, I collaborate with founders and product teams to ship interfaces that are quick, considered, and honest. I care about the tiny frictions — the hover you didn't notice was missing, the empty state that told you what to do, the load that never happened.",
      bio2:
        "My default stack is Next.js, TypeScript, Tailwind, and Postgres, but the tools follow the problem. When a project needs a different shape, I pick the boring one that will still make sense in three years.",
      techLabel: "Tech I reach for",
      stats: [
        { value: 1, suffix: "+", label: "Years shipping" },
        { value: 10, suffix: "+", label: "Projects delivered" },
        { value: 5, suffix: "+", label: "Happy clients" },
        { value: 100, suffix: "%", label: "Care per pixel" },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Depth where it matters, breadth to move fast.",
      description:
        "A working stack shaped by shipping. I go deep on the layers I own end to end, and stay comfortable across the rest.",
      groupTitles: ["Frontend", "Backend", "Tools & Cloud"],
    },
    services: {
      eyebrow: "Services",
      title: "What I can help you build.",
      description:
        "Retainers, sprints, or end-to-end delivery — I plug in wherever the work needs care.",
      items: [
        {
          title: "Frontend Engineering",
          description:
            "Production-grade React and Next.js apps with accessible, motion-aware UI.",
        },
        {
          title: "Backend & APIs",
          description:
            "TypeScript services, database schema, auth, and thoughtful REST or tRPC.",
        },
        {
          title: "UI Design",
          description:
            "Interfaces designed in the browser — from wireframe to polished component.",
        },
        {
          title: "Performance",
          description:
            "Core Web Vitals audits, bundle diet, image and font strategy that lasts.",
        },
        {
          title: "SEO & Analytics",
          description:
            "Structured data, sitemap, Open Graph, and measurable, ethical analytics.",
        },
      ],
      explore: "Explore →",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects worth talking about.",
      description:
        "A focused set of projects I'm building right now — real code, real problems, shipping soon.",
      categories: {
        All: "All",
        Frontend: "Frontend",
        Backend: "Backend",
        "Full Stack": "Full Stack",
        AI: "AI",
        "Open Source": "Open Source",
      },
      inDevelopment: "In Development",
      percentComplete: "% complete",
      noProjects: "No projects in this category yet — more coming soon.",
      items: [
        {
          title: "Task Flow",
          description:
            "A clean, focused task manager with drag-and-drop lists, authentication, and realtime sync — like a leaner Todoist.",
        },
        {
          title: "DevFinder",
          description:
            "Search any developer on GitHub and get a clean visual profile — repos, top languages, activity charts, all in one view.",
        },
        {
          title: "Snippet Vault",
          description:
            "A personal library for code snippets with syntax highlighting, search, and language tags — built for the way developers actually work.",
        },
      ],
    },
    timeline: {
      eyebrow: "Experience",
      title: "A short, honest timeline.",
      description:
        "How I got here — the milestones that shaped what I care about.",
      items: [
        {
          title: "Junior Developer",
          org: "Software Company",
          description:
            "Building production web applications as part of a development team, focusing on clean code and continuous learning.",
        },
        {
          title: "Freelance Developer",
          org: "Independent",
          description:
            "Delivered custom web solutions for clients, taking projects from concept to deployment.",
        },
        {
          title: "Full-Stack Web Development",
          org: "Professional Training",
          description:
            "Intensive hands-on training covering modern full-stack development — React, Next.js, Node.js, and database design.",
        },
        {
          title: "B.Sc. Communication and Software Engineering",
          org: "Al-Balqa Applied University (BAU)",
          description:
            "Five-year journey through programming fundamentals, algorithms, databases, and software engineering principles.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Kind words",
      title: "What people say.",
      description: "Working with clients now — kind words coming soon.",
      comingSoon: "Coming soon",
      heading1: "Building relationships,",
      heading2: "one project at a time.",
      body: "I'm actively working with clients right now. Testimonials will land here as projects wrap up.",
      cta: "Be the first",
    },
    contact: {
      eyebrow: "Contact",
      title: "Have something you'd like to build?",
      description:
        "Full projects, sprints, or just a good question — the inbox is open.",
      available: "Currently available",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      whatsappSub: "Send me a message",
      basedIn: "Based in",
      elsewhere: "Elsewhere",
      copied: "Copied",
      nameLabel: "Your name",
      namePlaceholder: "Aisha",
      emailFieldLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "What's on your mind?",
      messagePlaceholder: "Tell me about the project…",
      replyNote: "I usually reply within a day.",
      send: "Send message",
      sending: "Sending",
      sent: "Sent",
      errors: {
        name: "Name is a bit short",
        email: "That email doesn't look right",
        message: "Tell me a little more (10+ characters)",
        notConfigured:
          "Contact form isn't configured yet. Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local",
        generic: "Something went wrong. Try again?",
        network: "Couldn't reach the server. Check your connection.",
      },
    },
    footer: {
      crafted: "Crafted with care.",
      builtWith: "Built with",
      and: "and",
    },
  },
  ar: {
    brand: {
      shortName: "أيسر دلقموني",
    },
    nav: {
      about: "نبذة",
      skills: "المهارات",
      services: "الخدمات",
      projects: "المشاريع",
      experience: "الخبرات",
      contact: "تواصل",
      getInTouch: "تواصل معي",
    },
    hero: {
      badge: "متاح لعمل جديد",
      titleLine1: "أصنع تجارب",
      titleLine2: "رقمية",
      titleLine3: "تنبض",
      titleHighlight: "بالحياة.",
      subtitlePrefix: "أهلاً، أنا",
      subtitle:
        "أبني تطبيقات ويب سريعة ومدروسة من الألف إلى الياء — من هيكلة النظام وربط الـ API إلى آخر بكسل بالواجهة.",
      typing: [
        "مطوّر Full-Stack",
        "مطوّر React و Next.js",
        "متخصص Next.js",
        "مهندس واجهات",
        "حلّال مشاكل",
      ],
      viewProjects: "شاهد المشاريع",
      resume: "السيرة الذاتية",
      location: "عمّان، الأردن",
    },
    about: {
      eyebrow: "نبذة عني",
      title: "مهندس يهتم بآخر 10% من التفاصيل.",
      description:
        "قضيت السنوات الأخيرة أبني منتجات لازم تشتغل تمام سواء على موبايل بقرية أو شاشة بقاعة اجتماعات. بحب الفرق الصغيرة، القرارات المدروسة، وكود بضل مفهوم بعد سنة من كتابته.",
      bio1:
        "من عمّان، بتعاون مع مؤسسين وفرق منتج عشان أبني واجهات سريعة، مدروسة، وصادقة. بهتم بأدق التفاصيل — الـ hover اللي كان ناقص وما حد لاحظه، حالة الفراغ اللي بتوضح شو تعمل، والتحميل اللي ما صار أصلاً.",
      bio2:
        "التقنيات اللي بشتغل فيها افتراضياً هي Next.js وTypeScript وTailwind وPostgres، بس الأدوات بتتبع طبيعة المشكلة. لما مشروع يحتاج شكل مختلف، بختار الحل الأبسط اللي رح يضل منطقي بعد ثلاث سنين.",
      techLabel: "تقنيات بلجأ لها",
      stats: [
        { value: 1, suffix: "+", label: "سنوات عمل" },
        { value: 10, suffix: "+", label: "مشروع منجز" },
        { value: 5, suffix: "+", label: "عميل سعيد" },
        { value: 100, suffix: "%", label: "اهتمام بالتفاصيل" },
      ],
    },
    skills: {
      eyebrow: "المهارات",
      title: "عمق حيث يهم، وسعة عشان أتحرك بسرعة.",
      description:
        "تقنيات تشكّلت من التطبيق الفعلي. بغوص عميق بالطبقات اللي أملكها من الألف للياء، وبقدر أتعامل بارتياح مع الباقي.",
      groupTitles: ["الواجهة الأمامية", "الخلفية", "الأدوات والسحابة"],
    },
    services: {
      eyebrow: "الخدمات",
      title: "شو بقدر أساعدك تبنيه.",
      description:
        "عقود مستمرة، سبرنتات، أو تسليم كامل من الألف للياء — بندمج بأي مكان الشغل بحاجة اهتمام.",
      items: [
        {
          title: "هندسة الواجهة الأمامية",
          description:
            "تطبيقات React وNext.js احترافية بواجهة سهلة الوصول ومتحركة بعناية.",
        },
        {
          title: "الخلفية والـ APIs",
          description:
            "خدمات TypeScript، تصميم قواعد بيانات، مصادقة، وREST أو tRPC مدروس.",
        },
        {
          title: "تصميم الواجهات",
          description:
            "واجهات مصممة مباشرة بالمتصفح — من المخطط الأولي للمكوّن النهائي المصقول.",
        },
        {
          title: "الأداء",
          description:
            "تدقيق Core Web Vitals، تخفيف حجم الحزمة، واستراتيجية صور وخطوط تدوم.",
        },
        {
          title: "SEO والتحليلات",
          description:
            "بيانات منظّمة، خريطة موقع، Open Graph، وتحليلات أخلاقية قابلة للقياس.",
        },
      ],
      explore: "استكشف ←",
    },
    projects: {
      eyebrow: "أعمال مختارة",
      title: "مشاريع تستحق الحديث عنها.",
      description:
        "مجموعة مركّزة من المشاريع اللي بشتغل عليها هلق — كود حقيقي، مشاكل حقيقية، وقريباً بتشتغل.",
      categories: {
        All: "الكل",
        Frontend: "واجهة أمامية",
        Backend: "خلفية",
        "Full Stack": "متكامل",
        AI: "ذكاء اصطناعي",
        "Open Source": "مفتوح المصدر",
      },
      inDevelopment: "قيد التطوير",
      percentComplete: "% مكتمل",
      noProjects: "لا مشاريع بهاي الفئة بعد — المزيد قريباً.",
      items: [
        {
          title: "Task Flow",
          description:
            "مدير مهام بسيط ومركّز مع قوائم سحب وإفلات، مصادقة، ومزامنة فورية — زي نسخة أخف من Todoist.",
        },
        {
          title: "DevFinder",
          description:
            "دور على أي مطوّر بـ GitHub واحصل على بروفايل مرئي نظيف — مستودعات، أهم اللغات، ورسوم بيانية للنشاط، كل شي بشاشة واحدة.",
        },
        {
          title: "Snippet Vault",
          description:
            "مكتبة شخصية لحفظ مقتطفات الكود مع تلوين الصياغة، بحث، وتصنيفات لغوية — مبني على طريقة شغل المطورين الفعلية.",
        },
      ],
    },
    timeline: {
      eyebrow: "الخبرات",
      title: "جدول زمني قصير وصادق.",
      description: "كيف وصلت هون — المحطات اللي شكّلت اهتماماتي.",
      items: [
        {
          title: "مطوّر Junior",
          org: "شركة برمجيات",
          description:
            "أبني تطبيقات ويب إنتاجية كجزء من فريق تطوير، مع تركيز على كود نظيف وتعلّم مستمر.",
        },
        {
          title: "مطوّر فريلانس",
          org: "عمل مستقل",
          description:
            "سلّمت حلول ويب مخصصة لعملاء، من الفكرة الأولى وحتى النشر.",
        },
        {
          title: "تطوير الويب المتكامل",
          org: "تدريب احترافي",
          description:
            "تدريب مكثف وعملي يغطي تطوير الويب المتكامل الحديث — React وNext.js وNode.js وتصميم قواعد البيانات.",
        },
        {
          title: "بكالوريوس هندسة الاتصالات والبرمجيات",
          org: "جامعة البلقاء التطبيقية",
          description:
            "رحلة خمس سنوات بين أساسيات البرمجة، الخوارزميات، قواعد البيانات، ومبادئ هندسة البرمجيات.",
        },
      ],
    },
    testimonials: {
      eyebrow: "كلمات لطيفة",
      title: "شو بيحكوا الناس.",
      description: "بشتغل مع عملاء حالياً — الكلمات الطيبة جاية قريباً.",
      comingSoon: "قريباً",
      heading1: "ببني علاقات،",
      heading2: "مشروع بمشروع.",
      body: "أنا شغال فعلياً مع عملاء هلق. آراؤهم رح تظهر هون أول ما تخلص المشاريع.",
      cta: "كن أول واحد",
    },
    contact: {
      eyebrow: "تواصل",
      title: "عندك شي بدك تبنيه؟",
      description: "مشاريع كاملة، سبرنتات، أو بس سؤال حلو — الصندوق مفتوح.",
      available: "متاح حالياً",
      emailLabel: "الإيميل",
      whatsappLabel: "واتساب",
      whatsappSub: "ابعتلي رسالة",
      basedIn: "مقيم في",
      elsewhere: "أماكن تانية",
      copied: "تم النسخ",
      nameLabel: "اسمك",
      namePlaceholder: "عائشة",
      emailFieldLabel: "الإيميل",
      emailPlaceholder: "you@company.com",
      messageLabel: "شو ببالك؟",
      messagePlaceholder: "احكيلي عن المشروع…",
      replyNote: "بالعادة برد خلال يوم.",
      send: "ابعت الرسالة",
      sending: "عم تبعت",
      sent: "انبعتت",
      errors: {
        name: "الاسم قصير شوي",
        email: "هاد الإيميل مش شكله صحيح",
        message: "احكيلي أكتر شوي (10 أحرف عالأقل)",
        notConfigured: "نموذج التواصل لسا مش مجهّز.",
        generic: "صار في خطأ. جرب مرة ثانية؟",
        network: "ما قدرنا نوصل للسيرفر. تأكد من الاتصال.",
      },
    },
    footer: {
      crafted: "صُنع باهتمام.",
      builtWith: "بُني باستخدام",
      and: "و",
    },
  },
};
