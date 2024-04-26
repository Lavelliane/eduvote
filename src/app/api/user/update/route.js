import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function PATCH(req) {
  let errors = []
  const body = await req.json()

  try {
    const user = await prisma.user.update({
      where: { id: body.id },
      data: body
    })
    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }
}
