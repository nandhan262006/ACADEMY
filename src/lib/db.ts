import { createClient, type Client } from "@libsql/client";

const url = process.env.TURSO_DATABASE_URL ?? "file:local.db";
const authToken = process.env.TURSO_AUTH_TOKEN;

export const db: Client = createClient({
  url,
  authToken,
});
