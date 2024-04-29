import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req, res) {
  try {
    const body = await req.json()
    console.log(body)
    const createdParty = await prisma.party.create({
      data: {
        name: body.name,
        vision: body.vision,
        mission: body.mission,
        goals: body.goals
      }
    })

    return NextResponse.json({ message: 'success', party: createdParty }, { status: 201 })
  } catch (error) {
    console.error('Error creating party:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect()
  }
}

export async function GET(req, res) {
  try {
    const parties = await prisma.party.findMany()
    return NextResponse.json({ message: 'success', parties: parties }, { status: 200 })
  } catch (error) {
    console.error('Error retrieving party:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}

export async function PATCH(req, { params }) {
  try {
    const body = await req.json()
    const id = body.id
    console.log(body, id)
    const updateParty = await prisma.party.update({
      where: { id },
      data: body
    })
    return NextResponse.json({ message: 'success', data: updateParty }, { status: 200 })
  } catch (error) {
    console.error('Error updating party:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}
export async function DELETE(req, { params }) {
  try {
    const body = await req.json()
    const id = body.id
    console.log(body)
    const deletedParty = await prisma.party.delete({
      where: { id }
    })
    return NextResponse.json({ message: 'success', data: deletedParty }, { status: 200 })
  } catch (error) {
    console.error('Error deleting party:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}
