import NextAuth from "next-auth";
import "next-auth/jwt";
import Google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,

      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
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
      if (user) {
        session.user.id = token.id as string;
      }
      console.log("Session callback:", { session, token, user });

      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
}) 
