const { PrismaClient } = require('@prisma/client')

const prismaClientSingleton = () => {
  return new PrismaClient()
}

// Define `prismaGlobal` in the global scope
global.prismaGlobal = global.prismaGlobal || prismaClientSingleton()

export const prisma = global.prismaGlobal

// Set `prismaGlobal` in non-production environments
if (process.env.NODE_ENV !== 'production') {
  global.prismaGlobal = prisma
}
