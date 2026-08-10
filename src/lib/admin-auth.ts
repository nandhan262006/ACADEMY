import { createHash } from "node:crypto";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";

export const ADMIN_COOKIE_NAME = "photriya_admin";

export const hasAdminPassword = ADMIN_PASSWORD.length > 0;

export function adminCookieValue(): string {
  return createHash("sha256").update(ADMIN_PASSWORD).digest("hex");
}

export function cookieIsValid(value: string | undefined): boolean {
  if (!hasAdminPassword) return false;
  return value === adminCookieValue();
}
