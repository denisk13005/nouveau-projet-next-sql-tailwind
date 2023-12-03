import connection from "@/lib/connectDb"
import { NextResponse } from "next/server"

export async function POST(req, res) {

  console.log(req.json());
  const email = req.body.email

  const query = `SELECT * FROM users where email like '${email}'`;

  try {

    connection.query(query, async function (error, results) {
      if (error) throw error;

      let users = await results
      console.log('users', users);
      return NextResponse.json({ users, status: 200 })


    });
  } catch (error) {
    return new Response(JSON.stringify({ msg: "erreur" }))

  }
  connection.end()
};