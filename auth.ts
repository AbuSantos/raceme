import NextAuth from "next-auth";
import "next-auth/jwt";
import Google from "next-auth/providers/google";
import { PrismaClient } from "./app/generated/prisma";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
 
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session({ session, token, user }) {
      session.user.id = token.id as string;

      // console.log("Session callback:", { session, token, user });

      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 5 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 5 * 24 * 60 * 60,
  },
  ...authConfig,
});
