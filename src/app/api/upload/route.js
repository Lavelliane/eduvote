import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(req, res) {
  const formData = await req.formData()

  const file = formData.get('file')

  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = file.name.replaceAll(' ', '_')
  console.log(filename)
  try {
    await writeFile(path.join(process.cwd(), 'public/avatars/' + filename), buffer)
    return NextResponse.json({ Message: 'Success', status: 201 })
  } catch (error) {
    console.log('Error occured ', error)
    return NextResponse.json({ Message: 'Failed', status: 500 })
  }
}
