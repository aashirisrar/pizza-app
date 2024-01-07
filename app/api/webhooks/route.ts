import { getUsers } from "@/lib/users";

export async function POST(req: Request) {
  const users = await getUsers();
  console.log(users);
}
