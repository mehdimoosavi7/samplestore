const { default: NextAuth } = require("next-auth/next");
import User from "@/app/models/User";
import connect from "@/app/utils/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("wrong credentials");
            }
          } else {
            throw new Error("wrong credentials");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
      credentials: undefined
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
