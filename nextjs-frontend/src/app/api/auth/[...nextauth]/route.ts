import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// Define authOptions so we can export and use it elsewhere
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // You can add more options here later, like custom pages
}

// The handler uses the options to run the authentication logic
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }