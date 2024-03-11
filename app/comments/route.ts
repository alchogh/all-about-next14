import { comment } from "./data"

export async function GET(){
  return Response.json(comment)
}