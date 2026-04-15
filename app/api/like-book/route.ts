import { neon } from "@neondatabase/serverless";
import { auth } from "@/lib/auth/server";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: Request) {
    try {
        const { bookId } = await req.json();

        if (!bookId) {
            return new Response(null, { status: 204 });
        }

        const { data: session } = await auth.getSession();

        if (!session || !session?.user || !session?.user?.id) {
            return Response.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const userId = session.user.id;

        const result = await sql`
            INSERT INTO liked_books (user_id, book_id)
            VALUES (${userId}, ${bookId})
            ON CONFLICT (user_id, book_id) DO NOTHING
            RETURNING book_id
        `;

        return Response.json({ success: true, result }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Server error' }, { status: 500 });
    }
}