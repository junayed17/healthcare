import connection from "@/app/lib/connection";

export async function GET() {
  const collection = await connection("services");
  const result = await collection.find().toArray();
  return Response.json(result);
}
