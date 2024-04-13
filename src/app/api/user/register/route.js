import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req) {
  let errors = []
  const { name, email, password, hasVoted, role } = await req.json()

  if (password.length < 6) {
    errors.push('Password length should be more than 8 characters')
    return NextResponse.json({ errors }, { status: 400 })
  }
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, hasVoted, role }
    })
    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }
}
