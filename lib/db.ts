import { Pool } from "pg";

let pool: Pool | null = null;

export function getDbPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not defined.");
    }

    pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  }

  return pool;
}

let tableInitialized = false;

export async function initDb(): Promise<void> {
  if (tableInitialized) return;

  const db = getDbPool();
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS inspection_requests (
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL,
      phone_number VARCHAR(30) NOT NULL,
      location VARCHAR(200) NOT NULL,
      notes TEXT,
      ip_address VARCHAR(45),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.query(createTableQuery);
    tableInitialized = true;
  } catch (error) {
    console.error("Error initializing inspection_requests table:", error);
    throw error;
  }
}
