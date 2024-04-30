import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

//params is url params e.g. /api/party/12345?tab=2 .. 12345 is params.id
// access the party id using params
export async function GET(req, { params }) {
  try {
    // store party id into variable
    const partyId = params.id
    // use find unique with ID as the filter. Include candidates
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
