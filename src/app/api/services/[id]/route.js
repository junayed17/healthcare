import connection from "@/app/lib/connection";
import { ObjectId } from "mongodb";

export async function GET(request,
  { params }) {
  const { id } = await params
  const collection=await connection("services");
  const data=await collection.findOne({
    _id:new ObjectId(id)
  })
  return Response.json(data);
}
