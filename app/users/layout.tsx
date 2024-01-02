// async function for server side rendering to allow all user's routes
// (any other pages under the user folder) to apply THIS layout and not the app's layout

import Sidebar from "../components/sidebar/SideBar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-expect-error
    <Sidebar>
      <div className="h-full">{children}</div>{" "}
    </Sidebar>
  );
}
