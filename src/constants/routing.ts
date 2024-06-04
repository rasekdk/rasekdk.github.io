const ROUTES_KEYS = {
  HOME: "home",
  CAREER: "career",
  CONTACT: "contact",
  PROJECTS: "projects",
};

const ROUTES = {
  [ROUTES_KEYS.HOME]: "/",
  [ROUTES_KEYS.CAREER]: "/career",
  [ROUTES_KEYS.CONTACT]: "/contact",
  [ROUTES_KEYS.PROJECTS]: "/projects",
};

const MENU_ROUTES_MAPS = [
  ROUTES_KEYS.HOME,
  ROUTES_KEYS.CAREER,
  ROUTES_KEYS.CONTACT,
  ROUTES_KEYS.PROJECTS,
];

export { ROUTES, MENU_ROUTES_MAPS };
