import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;

  try {
    const client = await clientPromise;
    const db = client.db("eCommbDB"); // Replace with your DB name
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch product" }), { status: 500 });
  }
}
