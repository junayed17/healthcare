export async function GET(request,
  { params }) {
  const { xyz } = await params
  
  return Response.json({
    status: 300,
    team:xyz
  });
}
