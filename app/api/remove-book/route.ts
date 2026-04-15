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
            DELETE FROM liked_books
            WHERE user_id = ${userId} AND book_id = ${bookId}
            RETURNING book_id
        `;

        return Response.json({ success: true, result }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Server error' }, { status: 500 });
    }
}