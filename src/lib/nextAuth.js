import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
import { PrismaClient } from '@prisma/client'
import { prisma } from '@/lib/prisma'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const userCredentials = {
          email: credentials?.email,
          password: credentials?.password
        }
        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/login`, userCredentials)
          const user = res.data
          if (user) {
            return user
          } else {
            return null
          }
        } catch (e) {
          console.error(e)
          return null
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  jwt: {
    maxAge: 30 * 24 * 60 * 60
  },
  callbacks: {
    jwt: async ({ token }) => {
      const db_user = await prisma.user.findFirst({
        where: {
          email: token?.email
        }
      })
      if (db_user) {
        token.id = db_user.id
        token.email = db_user.email
        token.role = db_user.role
        token.year = db_user.year
        token.course = db_user.course
        token.hasVoted = db_user.hasVoted
        token.vote_history = db_user.vote_history
      }
      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.role = token.role
        session.user.year = token.year
        session.user.course = token.course
        session.user.hasVoted = token.hasVoted
        session.user.voteHistory = token.vote_history
      }
      return session
    }
  }
}
