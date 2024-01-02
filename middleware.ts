// used to redirect between sign in and log out, protects the user route unless you are autenticated and logged in

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/conversations/:path*", "/users/:path*"],
};
