import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function PATCH(req, res) {
  try {
    const body = await req.json()
    console.log(body)

    Promise.all(
      body.map(async (data) => {
        const candidateUpdateResult = await prisma.candidate.update({
          where: {
            id: data.candidateId
          },
          data: {
            number_of_votes: {
              increment: 1
            }
          }
        })

        const partyUpdateResult = await prisma.party.update({
          where: {
            id: data.partyId
          },
          data: {
            number_of_votes: {
              increment: 1
            }
          }
        })
        return { candidateUpdateResult, partyUpdateResult }
      })
    )
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.error(e)
      })

    return NextResponse.json({ message: 'success', votes: body }, { status: 201 })
  } catch (error) {
    console.error('Error submitting vote:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}
