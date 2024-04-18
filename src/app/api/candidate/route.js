import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req, res) {
  try {
    const body = await req.json()
    console.log(body)
    const newCandidate = await prisma.candidate.create({
      data: body
    })

    return NextResponse.json({ message: 'success', candidate: newCandidate }, { status: 201 })
  } catch (error) {
    console.error('Error creating Candidate:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect()
  }
}
export async function GET(req, res) {
  try {
    const candidates = await prisma.party.findMany({
      include: {
        candidates: true
      }
    })
    return NextResponse.json({ message: 'success', candidates: candidates }, { status: 200 })
  } catch (error) {
    console.error('Error retrieving candidates:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}

export async function PATCH(req, res) {
  try {
    const body = await req.json()
    const id = body.id
    const candidate = await prisma.candidate.update({
      where: { id },
      data: body
    })
    return NextResponse.json({ message: 'success', candidate: candidate }, { status: 200 })
  } catch (error) {
    console.error('Error updating candidate:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    const body = await req.json()
    const id = body.id
    console.log(body)
    const deletedCandidate = await prisma.candidate.delete({
      where: { id }
    })
    return NextResponse.json({ message: 'success', data: deletedCandidate }, { status: 200 })
  } catch (error) {
    console.error('Error deleting candidate:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}
