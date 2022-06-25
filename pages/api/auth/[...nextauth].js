import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import GoogleProvider from "next-auth/providers/google"
//import FacebookProvider from "next-auth/providers/facebook"
//import TwitterProvider from "next-auth/providers/twitter"
//import Auth0Provider from "next-auth/providers/auth0"
import EmailProvider from "next-auth/providers/email"
import AppleProvider from "next-auth/providers/apple";


import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

let prisma = new PrismaClient()

//https://arnavgosain.com/sqlite-prisma-litestream
prisma.$queryRaw`PRAGMA journal_mode = WAL;`
  .then(() => {
    console.log("ENABLED WAL MODE FOR DATABASE");
  })
  .catch((err) => {
    console.log("DB SETUP FAILED", err);
    process.exit(1);
  });


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  
  adapter: PrismaAdapter(prisma),

  // https://next-auth.js.org/configuration/providers/oauth
  // https://support.google.com/accounts/answer/185833  -- App Password to allow sign in with email (gmail)
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
      
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET
    }),
    
    /*
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
    */
  ],

  theme: {
    colorScheme: "light",
  },

  /*
  //https://next-auth.js.org/getting-started/example#extensibility
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  },
  */

  database: process.env.DATABASE_URL,

})