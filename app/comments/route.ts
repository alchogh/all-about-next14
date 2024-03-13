import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  console.log(comment);
  comments.push(newComment);
  const updateComment =  [...comment, newComment]
  return new Response(JSON.stringify(updateComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
