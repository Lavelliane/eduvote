import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
        const body = await req.json();
        console.log(body);

        // Prepare positions data with associated candidates
        const positionsData = body.positions.map((position) => {
            const candidatesData = position.candidates.map((candidate) => ({
                name: candidate.name,
                year: candidate.year,
                age: candidate.age,
                credentials: candidate.credentials,
                advocacy: candidate.advocacy,
                course: candidate.course,
                img_url: candidate.img_url
            }));

            return {
                name: position.name,
                number_of_votes: position.number_of_votes,
                description: position.description,
                candidates: {
                    create: candidatesData
                }
            };
        });

        // Create the party with nested positions and candidates
        const createdParty = await prisma.party.create({
            data: {
                vision: body.vision,
                name: body.name,
                mission: body.mission,
                goals: body.goals,
                positions: {
                    create: positionsData
                }
            },
            include: {
                positions: {
                    include: {
                        candidates: true
                    }
                }
            }
        });

        // Respond with success message and created party data
        return NextResponse.json({ message: 'success', party: createdParty });
    } catch (error) {
        console.error('Error creating party:', error);
        // Respond with error message
        return NextResponse.json({ message: 'error' });
    } finally {
        // Disconnect Prisma client
        await prisma.$disconnect();
    }
}
