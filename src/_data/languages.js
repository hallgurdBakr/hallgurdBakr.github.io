// same locale codes as in your localized subdirectories
module.exports = {
  en: {
    dir: "ltr",
    ariaHeaderMenu: "Header menu",
    ariaFooterMenu: "Footer menu",
    ariaLang: "Change language",

    profile: {
      greet: "Hi",
      name: "I'm Hallgurd Bakr",
      work: "I work as a",
      react: "React",
      wordpress: "WordPress",
      dev: "Developer",
      btnBlog: "See my blog",
      btnContact: "Contact",
    },

    exp: {
      heading: "Experiences",
      work: {
        heading: "Work",
        current: {
          position: "Web Developer",
          workplace: "Freelancer",
          startDate: "06-2021",
          endDate: "Present",
          details: [
            "Design and development of the website and database system.",
            "Getting hosting and a domain name, as well as configuring the server, deploying websites, or pushing new code to the server.",
            "Support after the sale.",
          ],
        },
      },

      education: {
        heading: "Education",
        old: {
          title: "Computer Science",
          university: "Darbandikhan Technical Institute",
          startDate: "09-2020",
          endDate: "06-2022",
          details: [
            "Some Courses: Programming, Network, Basic and Advanced database, Information technology, System Security, Web Design. ",
            "Working with mySQL database and web technologies to develop a University Management System as a final-year project.",
            "The top student in the computer science department.",
          ],
        },
        current: {
          title: "Information Technology",
          university: "Sulaimani Polytechnic University",
          startDate: "11-2023",
          endDate: "Present",
        },
      },
    },

    tech: {
      heading: "The technologies I use",
      frontend: "Frontend",
      backend: "Backend",
      others: "Others",
    },

    cert: {
      heading: "Professional Certificate",
      click: "Click on each item for more information",
      verify: "Verify",
      items: [
        {
          title: "React Basic",
          detail:
            "This course will teach you the basics of React, a powerful JavaScript library that you can use to build user interfaces for web and mobile applications",
          imageAlt: "React Basic certificate",
          img: "/assets/images/React-Basics.webp",
          verifyURL: "https://coursera.org/verify/W2UNEFFCDWAS",
        },
        {
          title: "Advanced React",
          detail:
            "The goal of this course is to teach efficient React rendering, sharing state, fetching data, using advanced hooks, understanding JSX, component composition, and more.",
          imageAlt: "Advanced React certificate",
          img: "/assets/images/Advanced-React.webp",
          verifyURL: "https://coursera.org/verify/PEDW5KPZNJKB",
        },
        {
          title: "HTML, CSS, and Javascript for Web Developers",
          detail:
            "This course covers HTML, CSS, and JavaScript for web page development, enabling responsive design on mobile and desktop devices.",
          imageAlt: "HTML, CSS, and Javascript certificate",
          img: "/assets/images/HTM-CSS-JS.webp",
          verifyURL: "https://coursera.org/verify/YR6MD76QPV4F",
        },
      ],
    },
  },

  ckb: {
    dir: "rtl",
    ariaHeaderMenu: "پێڕستی سەرەوە",
    ariaFooterMenu: "پێڕستی ژێرەوە",
    ariaLang: "گۆڕینی زمان",

    profile: {
      greet: "سڵاو",
      name: "من هەڵگوردم",
      work: "کارەکەم وەکو",
      react: "ڕیاکت",
      wordpress: "وۆردپرێس",
      dev: "گەشەپێدەری",
      btnBlog: "بڵۆگەکەم ببینە",
      btnContact: "پەیوەندی",
    },

    exp: {
      heading: "ئەزموونەکان",
      work: {
        heading: "کار",
        current: {
          position: "گەشەپێدەرەی وێب",
          workplace: "فریلانسەر",
          startDate: "06-2021",
          endDate: "ئێستا",
          details: [
            "دیزاین و گەشەپێدانی ماڵپەڕ و سیستەمی داتابەیس.",
            "وەرگرتنی هۆست و ناوی دۆمەین، هەروەها ڕێکخستنی سێرڤەر، بڵاوکردنەوەی ماڵپەڕەکان، یان دانانی کۆدی نوێ لەسەر سێرڤەر.",
            "پشتگیری دوای فرۆشتن.",
          ],
        },
      },
      education: {
        heading: "خوێندن",
        old: {
          title: "زانستی کۆمپیوتەر",
          university: "پەیمانگای تەکنیکی دەربەندیخان",
          startDate: "09-2020",
          endDate: "06-2022",
          details: [
            "هەندێک لە کۆرسەکان: بەرنامەسازی، تۆڕی کۆمپیوتەر، ئاسی سەرەتا و پێشکەوتووی داتابەیس، تەکنەلۆجیای زانیاری، ئاسایشی سیستەم، دیزاینی وێب.",
            "کارکردن لەگەڵ داتابەیسی MySQL و تەکنەلۆژیاکانی وێب بۆ پەرەپێدانی سیستەمی بەڕێوەبەردنی زانکۆکان، وەک پڕۆژەی کۆتایی ساڵ.",
            "خوێندکاری دووەم لەسەر ئاستی بەشی زانستی کۆمیپوتەر.",
          ],
        },
        current: {
          title: "تەکنەلۆژیای زانیاری",
          university: "زانکۆی پۆلیتەکنیکی سلێمانی",
          startDate: "11-2023",
          endDate: "ئێستا",
        },
      },
    },

    tech: {
      heading: "ئەو تەکنەلۆژیانەی کە بەکاریان دەهێنم",
      frontend: "بەشی پێشەوە",
      backend: "بەشی پشتەوە",
      others: "ئەوانی تر",
    },

    cert: {
      heading: "بڕوانامەی پیشەیی",
      click: "کرتە بکە لە هەر یەکێکیان بۆ زانیاری زیاتر.",
      verify: "سەلماندن",
      items: [
        {
          title: "بنەماکانی ڕیاکت",
          detail:
            "ئەم کۆرسە فێری بنەماکانی ڕیاکتت دەکات کە کتێبخانەیەکی بەناوبانگ و بەهێزی جاڤاسکریپتە و بەکاردێت بۆ درووستکردنی ڕووکاری بەرنامەکانی وێب و مۆبایل.",
          imageAlt: "بڕوانامەی بنەماکانی ڕیاکت",
          img: "/assets/images/React-Basics.webp",
          verifyURL: "https://coursera.org/verify/W2UNEFFCDWAS",
        },
        {
          title: "ڕیاکتی پێشکەوتوو",
          detail:
            "ئامانجی ئەم کۆرسە فێرکردنی کارامەییەکانی ڕەندەرکردن و هاوبەشکردنی ستەیت، هێنانی داتا، بەکار‌هێنانی هووکی پێشکەوتووە، وە تێگەیشتنێکی قوڵت لەسەر JSX دەداتێت، لەگەڵ چەندین بابەتی پێشکەوتووی تر.",
          imageAlt: "بڕوانامەی ڕیاکتی پێشکەوتوو",
          img: "/assets/images/Advanced-React.webp",
          verifyURL: "https://coursera.org/verify/PEDW5KPZNJKB",
        },
        {
          title: "HTML و CSS و جاڤاسکڕیپت بۆ گەشەپێدەرانی وێب",
          detail:
            "ئەم کۆرسە سەرنج دەخاتە سەر تەکنەلۆژیا سەرتاییەکان کە بۆ درووستکردن و پەرەپێدانی وێب بەکاردێت، لەگەڵ تەکنیکەکانی دیزاینی وەڵامدەرەوە لەسەر ئامێرە جیاوازەکان.",
          imageAlt: "بڕوانامەی HTML و CSS و جاڤاسکڕیپت بۆ گەشەپێدەرانی وێب",
          img: "/assets/images/HTM-CSS-JS.webp",
          verifyURL: "https://coursera.org/verify/YR6MD76QPV4F",
        },
      ],
    },
  },
};
