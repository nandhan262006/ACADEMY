import { createClient } from "@libsql/client";

const url = process.env.TURSO_DATABASE_URL ?? "file:local.db";
const authToken = process.env.TURSO_AUTH_TOKEN;

const db = createClient({ url, authToken });

const DEFAULT_COURSE_DETAILS = [
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

async function main() {
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

  const res = await db.execute("SELECT count(*) AS n FROM course_details");
  const n = Number(res.rows[0]?.n ?? 0);
  if (n > 0) {
    console.log(`course_details already has ${n} row(s). Nothing to seed.`);
    return;
  }

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
  console.log(`Seeded ${DEFAULT_COURSE_DETAILS.length} course detail rows.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("db:init failed:", err);
    process.exit(1);
  });
