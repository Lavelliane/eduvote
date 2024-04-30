import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

//POST = add or insert data (create)
//async function = run in the background to make requests
// to the database using prisma
// req = incoming request from user to api
// res  = api response
export async function POST(req, res) {
  try {
    const body = await req.json() //get request body from frontend request
    // prisma.<table name>.<method in prisma>
    const newCandidate = await prisma.candidate.create({
      data: body
    })

    //return a response
    // 201 = created
    return NextResponse.json({ message: 'success', candidate: newCandidate }, { status: 201 })
  } catch (error) {
    console.error('Error creating Candidate:', error)
    // Respond with error message
    return NextResponse.json({ message: 'error' }, { status: 500 })
  }
}

//query (Read)
export async function GET(req, res) {
  try {
    //since party has one to many relationship with candidates
    // we query for party, but include all candidates in the result
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

//update (patch) => only update affected fields
export async function PATCH(req, res) {
  try {
    //get request body
    const body = await req.json()
    //get id of the candidate from body
    const id = body.id
    // run prisma's update function
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
