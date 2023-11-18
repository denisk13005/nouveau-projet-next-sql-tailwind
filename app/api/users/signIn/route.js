import connection from "@/lib/connectDb"
import { NextResponse } from "next/server"

export async function POST(req, res) {
  let users

  const query = 'SELECT * FROM users';

  try {

    await connection.query(query, async function (error, results) {
      if (error) throw error;

      users = await results
      console.log('users', users);
      return new Response(JSON.stringify({ data: users }))

    });
  } catch (error) {
    return new Response(JSON.stringify({ msg: "erreur" }))

  }
  connection.end()









};