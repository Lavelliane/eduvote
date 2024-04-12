import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(req, { params }) {
  try {
    const partyId = params.id
    const party = await prisma.party.findUnique({
      where: { id: partyId },
      include: {
        candidates: true
      }
    })
    return NextResponse.json({ message: 'success', parties: party }, { status: 200 })
  } catch (error) {
    console.error('Error retrieving party:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}
