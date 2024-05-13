import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PATCH(req, res) {
  try {
    const body = await req.json()
    const cleanData = body.filter((b) => !!b)
    const candidateIds = cleanData.map((data) => data.candidateId)
    const partyIds = cleanData.map((data) => data.partyId)
    console.log(cleanData)

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
