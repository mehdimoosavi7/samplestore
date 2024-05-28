const { default: NextAuth } = require("next-auth/next");
import User from "@/src/app/models/User";
import connect from "@/src/app/utils/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

let credentials : any;
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({
            email: credentials && credentials.email,
          });
          if (user) {
            if (credentials) {
              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
              );
              if (isPasswordCorrect) {
                return user;
              } else {
                throw new Error("wrong credentials");
              }
            }
          } else {
            throw new Error("wrong credentials");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
      credentials,
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };