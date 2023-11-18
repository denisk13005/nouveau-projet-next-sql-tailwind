import connection from "@/lib/connectDb"
import { NextResponse } from "next/server"



export async function POST(request) {
  const { pseudo, email, password } = await request.json()
  try {
    let data
    connection.query(`INSERT INTO users (pseudo,email, password) VALUES ('${pseudo}','${email}', '${password}')`, async function (error, results) {
      data = await results
      console.log(data);
      connection.end()

    })
    return NextResponse.json({ user: data })



  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: 'error' })
  }






}
