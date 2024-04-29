import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { omit } from 'lodash'
import { prisma } from '@/lib/prisma'

export async function POST(req) {
  const { email, password } = await req.json()
  if (!email || !password) {
    return NextResponse.json({ message: 'Invalid input' }, { status: 400 })
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
        year: true,
        course: true,
        hasVoted: true,
        vote_history: true
      }
    })

    if (user && user.password) {
      const passwordsMatch = await bcrypt.compare(password, user.password)
      if (passwordsMatch) {
        return NextResponse.json(omit(user, ['password']), { status: 200 })
      } else {
        return NextResponse.json({ message: 'Invalid Credentials' }, { status: 401 })
      }
    } else {
      return NextResponse.json({ message: 'Invalid Credentials' }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }
}
