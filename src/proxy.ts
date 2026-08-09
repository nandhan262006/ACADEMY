import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";

function authorized(request: NextRequest): boolean {
  if (!ADMIN_PASSWORD) return true;

  const auth = request.headers.get("authorization") ?? "";
  const [scheme, payload] = auth.split(" ");
  if (scheme !== "Basic" || !payload) return false;

  try {
    const decoded = atob(payload);
    const colon = decoded.indexOf(":");
    if (colon < 0) return false;
    const password = decoded.slice(colon + 1);
    return password === ADMIN_PASSWORD;
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminPage = pathname === "/admin" || pathname.startsWith("/admin/");
  const isWriteApi =
    (pathname === "/api/course-details" ||
      pathname.startsWith("/api/course-details/")) &&
    request.method !== "GET";

  if (!isAdminPage && !isWriteApi) return NextResponse.next();
  if (authorized(request)) return NextResponse.next();

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Photriya Admin"' },
  });
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/course-details", "/api/course-details/:path*"],
};
