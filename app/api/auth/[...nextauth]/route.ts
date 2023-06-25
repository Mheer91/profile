import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";


const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        async redirect({ url, baseUrl }) {

            console.log(url, baseUrl)

            return baseUrl;

        }
    }
}

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//
//     console.log(req, res)
//
//     return await NextAuth(req, res, authOptions);
//
// }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };