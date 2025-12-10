/**
 * Public routes (no login required)
 */
export const publicRoutes: string[] = [
  "/auth/sign-in",
  "/auth/register",        // only if you have this page
];

/**
 * Routes that require authentication
 */
export const protectedRoutes: string[] = [
  "/",
];

/**
 * Authentication routes (not shown to logged-in users)
 */
export const authRoutes: string[] = [
  "/auth/sign-in",
  "/auth/register",        // only if available
];

/**
 * API route prefix
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * Where users go after login
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
