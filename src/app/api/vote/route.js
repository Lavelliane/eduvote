import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function PATCH(req, res) {
  try {
    const body = await req.json()
    const candidateIds = body.map((data) => data.candidateId)
    const partyIds = body.map((data) => data.partyId)
    console.log(body)

    const candidateUpdateResult = await prisma.candidate.updateMany({
      where: {
        id: {
          in: candidateIds
        }
      },
      data: {
        number_of_votes: {
          increment: 1
        }
      }
    })
    const partyUpdateResult = await prisma.party.updateMany({
      where: {
        id: {
          in: partyIds
        }
      },
      data: {
        number_of_votes: {
          increment: 1
        }
      }
    })

    return NextResponse.json(
      { message: 'success', votes: { ...candidateUpdateResult, ...partyUpdateResult } },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting vote:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}
