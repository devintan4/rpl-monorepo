import { User } from "@my-monorepo/types";
import { formatDate } from "@my-monorepo/utils";
import { Button } from "@my-monorepo/ui";

async function getUsers(): Promise<User[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const users = await getUsers();
  return (
    <div style={{ padding: 20 }}>
      <h1>Users List</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} (fetched at {formatDate(new Date())})
          </li>
        ))}
      </ul>
      <Button label="Reload" />
    </div>
  );
}
