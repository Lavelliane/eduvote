import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
        const body = await req.json();
        console.log(body);
        
        // Prepare positions data with associated candidates
        const positionsData = body.positions.map((position) => {
            return {
                name: position.name,
                number_of_votes: position.number_of_votes,
                description: position.description,
                candidates: {
                    createMany: {
                        data: position.candidates.map((candidate) => {
                            return {
                                name: candidate.name,
                                year: candidate.year,
                                age: candidate.age,
                                credentials: candidate.credentials,
                                advocacy: candidate.advocacy,
                                course: candidate.course,
                                img_url: candidate.img_url
                            };
                        })
                    }
                }
            };
        });

        // Create the party with nested positions and candidates
        const createObject = {
            vision: body.vision,
            mission: body.mission,
            goals: body.goals,
            positions: {
                createMany: {
                    data: positionsData
                }
            }
        };

        // Use Prisma to create the party
        const createdParty = await prisma.party.create({
            data: createObject,
            include: {
                positions: {
                    include: {
                        candidates: true
                    }
                }
            }
        });

        // Respond with success message
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
