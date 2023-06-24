import NextAuth from "next-auth"
import {NextApiRequest, NextApiResponse} from "next";
import GoogleProvider from "next-auth/providers/google";
import {NextRequest} from "next/server";


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    pages: {
        signIn: '/auth/login'
    }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log()

    return await NextAuth(req, res, authOptions);

}

// const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };