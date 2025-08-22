import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("eCommbDB"); // your DB name
    const products = await db.collection("products").find().toArray();

    return Response.json(products);
  } catch (error) {
    return Response.json({ error: "Database connection failed" }, { status: 500 });
  }
}
