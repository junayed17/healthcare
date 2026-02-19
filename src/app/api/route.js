import connection from "../lib/connection"

// export async function GET() {
  
//   return Response.json({
//     status:200
//   })
// }

export async function POST(request) {

  const res = await request.json();
 const result=await connection("services");
const final=await result.insertOne(res);
  return Response.json({ res, final });
}