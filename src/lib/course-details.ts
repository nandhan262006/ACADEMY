import { db } from "./db";

export type CourseMode = "online" | "offline";

export interface CourseDetails {
  slug: string;
  title: string;
  mode: CourseMode;
  price: number;
  duration: string;
  schedule: string;
  timings: string;
  location: string;
  batchStartsFrom: string;
}

export type CourseDetailsInput = Omit<CourseDetails, "slug" | "title" | "mode">;

export const COURSE_SLUGS = [
  "online-photography-course",
  "offline-photography-course",
] as const;

export const DEFAULT_COURSE_DETAILS: CourseDetails[] = [
  {
    slug: "online-photography-course",
    title: "Online Photography & Videography Course",
    mode: "online",
    price: 37000,
    duration: "2 Months",
    schedule: "Monday to Friday",
    timings: "8:00 AM – 10:30 AM IST",
    location: "Live via Zoom",
    batchStartsFrom: "15 January 2026",
  },
  {
    slug: "offline-photography-course",
    title: "Offline Photography & Videography Course",
    mode: "offline",
    price: 43000,
    duration: "2 Months",
    schedule: "Monday to Friday",
    timings: "8:00 AM – 10:30 AM IST",
    location: "Madhapur, Hyderabad",
    batchStartsFrom: "15 January 2026",
  },
];

let ensurePromise: Promise<void> | null = null;

async function ensureSchemaImpl() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS course_details (
      slug TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      mode TEXT NOT NULL,
      price INTEGER NOT NULL DEFAULT 0,
      duration TEXT NOT NULL,
      schedule TEXT NOT NULL,
      timings TEXT NOT NULL,
      location TEXT NOT NULL,
      batch_starts_from TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  const tableInfo = await db.execute("PRAGMA table_info(course_details)");
  const hasPrice = (tableInfo.rows as Record<string, unknown>[]).some(
    (row) => row.name === "price"
  );
  if (!hasPrice) {
    await db.execute(
      "ALTER TABLE course_details ADD COLUMN price INTEGER NOT NULL DEFAULT 0"
    );
  }

  const res = await db.execute("SELECT count(*) AS n FROM course_details");
  const n = Number(res.rows[0]?.n ?? 0);
  if (n === 0) {
    for (const c of DEFAULT_COURSE_DETAILS) {
      await db.execute({
        sql: `INSERT INTO course_details (slug, title, mode, price, duration, schedule, timings, location, batch_starts_from)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
          c.slug,
          c.title,
          c.mode,
          c.price,
          c.duration,
          c.schedule,
          c.timings,
          c.location,
          c.batchStartsFrom,
        ],
      });
    }
  } else {
    for (const c of DEFAULT_COURSE_DETAILS) {
      await db.execute({
        sql: "UPDATE course_details SET price = ? WHERE slug = ? AND price = 0",
        args: [c.price, c.slug],
      });
    }
  }
}

export function ensureSchema(): Promise<void> {
  if (!ensurePromise) {
    ensurePromise = ensureSchemaImpl();
  }
  return ensurePromise;
}

function mapRow(row: Record<string, unknown>): CourseDetails {
  return {
    slug: String(row.slug),
    title: String(row.title),
    mode: row.mode as CourseMode,
    price: Number(row.price),
    duration: String(row.duration),
    schedule: String(row.schedule),
    timings: String(row.timings),
    location: String(row.location),
    batchStartsFrom: String(row.batch_starts_from),
  };
}

export async function getAllCourseDetails(): Promise<CourseDetails[]> {
  await ensureSchema();
  const res = await db.execute(
    "SELECT slug, title, mode, price, duration, schedule, timings, location, batch_starts_from FROM course_details ORDER BY mode DESC"
  );
  return (res.rows as unknown as Record<string, unknown>[]).map(mapRow);
}

export async function getCourseDetails(
  slug: string
): Promise<CourseDetails | null> {
  await ensureSchema();
  const res = await db.execute({
    sql: `SELECT slug, title, mode, price, duration, schedule, timings, location, batch_starts_from
          FROM course_details WHERE slug = ?`,
    args: [slug],
  });
  if (res.rows.length === 0) return null;
  return mapRow(res.rows[0] as Record<string, unknown>);
}

export async function updateCourseDetails(
  slug: string,
  input: CourseDetailsInput
): Promise<CourseDetails | null> {
  const existing = await getCourseDetails(slug);
  if (!existing) return null;

  await db.execute({
    sql: `UPDATE course_details
          SET duration = ?, schedule = ?, timings = ?, location = ?, batch_starts_from = ?, price = ?, updated_at = datetime('now')
          WHERE slug = ?`,
    args: [
      input.duration,
      input.schedule,
      input.timings,
      input.location,
      input.batchStartsFrom,
      input.price,
      slug,
    ],
  });
  return getCourseDetails(slug);
}

export function parseCourseDetailsInput(body: unknown): {
  ok: boolean;
  error?: string;
  value?: CourseDetailsInput;
} {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request body" };
  }
  const b = body as Record<string, unknown>;
  const stringFields: Exclude<keyof CourseDetailsInput, "price">[] = [
    "duration",
    "schedule",
    "timings",
    "location",
    "batchStartsFrom",
  ];
  const value = {} as CourseDetailsInput;
  for (const f of stringFields) {
    const v = b[f];
    if (typeof v !== "string" || v.trim() === "") {
      return { ok: false, error: `Field "${f}" is required and must be a non-empty string` };
    }
    value[f] = v.trim();
  }

  const rawPrice = b["price"];
  const price =
    typeof rawPrice === "number"
      ? rawPrice
      : typeof rawPrice === "string" && rawPrice.trim() !== ""
        ? Number(rawPrice.replace(/[^0-9.]/g, ""))
        : NaN;
  if (!Number.isFinite(price) || price < 0) {
    return { ok: false, error: 'Field "price" must be a positive number' };
  }
  value.price = Math.round(price);

  return { ok: true, value };
}
