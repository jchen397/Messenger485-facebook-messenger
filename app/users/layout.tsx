// async function for server side rendering to allow all user's routes
// (any other pages under the user folder) to apply THIS layout and not the app's layout

import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // can just call the function to an endpoint to get the users since we are inside
  // of an async function rather than having to axios it.
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}
