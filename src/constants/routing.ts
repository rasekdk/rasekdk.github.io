const ROUTES_KEYS = {
  HOME: "home",
  CAREER: "career",
  CONTACT: "contact",
  PROJECTS: "projects",
} as const;

const ROUTES = {
  [ROUTES_KEYS.HOME]: "/",
  [ROUTES_KEYS.CAREER]: "/career",
  [ROUTES_KEYS.PROJECTS]: "/projects",
  [ROUTES_KEYS.CONTACT]: "/contact",
} as const;

const MENU_ROUTES_MAPS = [
  ROUTES_KEYS.HOME,
  ROUTES_KEYS.CAREER,
  ROUTES_KEYS.PROJECTS,
  ROUTES_KEYS.CONTACT,
] as const;

export { ROUTES, ROUTES_KEYS, MENU_ROUTES_MAPS };
