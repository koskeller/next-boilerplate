import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function insertEvent(userId: string): Promise<void> {
  try {
    await sql`
      INSERT INTO events (user_id)
      VALUES (${userId})
    `;
  } catch (error) {
    console.error("Error inserting usage event: ", error);
  }
}
