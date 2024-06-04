import type { ROUTES_KEYS } from "@/constants/routing";
import type { RouteKey } from "./routing";

export interface Translations {
  menu: Record<RouteKey, string>;
  title: {
    __self: string;
    sub: string;
  };
  jobs: {
    [x: string]: Job | string;
  };
  home: {
    [x: string]: string;
  };
}

export interface Job {
  __self: string;
  [x: string]: string;
}
