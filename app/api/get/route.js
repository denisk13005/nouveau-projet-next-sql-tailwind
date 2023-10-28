
import connection from "@/lib/connectDb"
import { NextResponse } from "next/server"



export async function POST(request) {
  const { email, password } = await request.json()
  console.log(email, password);
  try {

    connection.connect()
    connection.query(`INSERT INTO users (pseudo,email, password) VALUES ('pseudo','${email}', '${password}')`)
    connection.end()
  } catch (error) {
    console.log(error);
  }


  return NextResponse.json({ msg: 'test' })




}