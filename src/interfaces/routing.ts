import type { ROUTES_KEYS } from "@/constants/routing";

export type RouteKey = (typeof ROUTES_KEYS)[keyof typeof ROUTES_KEYS];
