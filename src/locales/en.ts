import { ROUTES_KEYS } from "@/constants/routing";
import type { Translations } from "@/interfaces/Locales";
import { presets } from "node_modules/astro/dist/core/config/tsconfig";

const en: Translations = {
  menu: {
    [ROUTES_KEYS.HOME]: "home",
    [ROUTES_KEYS.CAREER]: "career",
    [ROUTES_KEYS.PROJECTS]: "projects",
    [ROUTES_KEYS.CONTACT]: "contact",
  },
  title: {
    __self: "César Nóvoa",
    sub: "Developer & Designer",
  },
  jobs: {
    cloudSphere: {
      __self: "CloudSphere",
      title: "Fontend Software Engineer",
      desc: "Responsible for maintaining existing software, implementing new features, and developing a new, more maintainable, and extensible user interface.\nFocused on creating a uniform user experience by ensuring consistent aesthetics across all platform sections.",
    },
    ingenyus: {
      __self: "ingenyus*",
      title1: "Graphic designer",
      title2: "Fullstack web developer",
      desc1:
        "Developed attractive and functional web designs, creating responsive and accessible designs, as well as solid corporate identities that reflected the essence of our clients.\nResponsible for video editing and production for various applications, from promotions to educational content.",
      desc2:
        "Played an integral role as a web developer, handling both programming and design for various platforms, including landing pages and online stores for a wide range of clients.\nWorked on the company’s rebranding process and the creation of its new website.\nDeveloped internal systems to streamline and simplify business operations.\nResponsibilities ranged from web development using a variety of technologies to managing workloads and organizing projects and teams.",
    },
    present: "Present",
    title: "My last jobs",
  },
  home: {
    desc: "Frontend Software Engineer with over 3 years of experience in web development and design. Currently, I work on unifying and rebuilding the interface of a cloud service management and migration platform, in addition to performing maintenance tasks on the existing interface. This role is conducted in English, enabling me to operate fluently in this language in a professional setting.\nI have worked in a marketing agency, where I held roles as both a graphic and web designer, and later as a web developer for both frontend and backend. During my second tenure at this company, in addition to my responsibilities as a developer, I gradually took on the management of workload and project organization for the IT team, as well as creating custom solutions due to the limitations of the task management software used at the time.",
  },
};

export default en;
