import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req) {
  try {
    const count = await prisma.user.count({ where: { role: 'VOTER' } })
    return NextResponse.json({ count }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 })
  }
}
