import 'dotenv/config';
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env" }); // or .env.local

const databaseUrl = process.env.DATABASE_URL!;

if (!databaseUrl) {
  throw new Error("DATABASE_URL or DATABASE_DIRECT_URL is missing from process.env!");
}

const sql = neon(databaseUrl);

// export const db = drizzle({ 
//   client: sql ,
//   logger: true,
//   casing: 'snake_case'
// });

export const db = drizzle({ client: sql });