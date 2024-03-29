import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request:NextRequest ) {
  const searchParams= request.nextUrl.searchParams
  const query = searchParams.get('query')
  console.log(query)
  const filteredComments = query ?
  comments.filter(comment =>comment.text.includes(query)) : 
  comments
  return Response.json(filteredComments);
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
