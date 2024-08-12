import { PrismaClient as PrismaClientDb1 } from '../../prisma/generate-user'
import { PrismaClient as PrismaClientDb2 } from '../../prisma/generate-customer'

// export const prisma = new PrismaClient()

const globalForPrisma1 = globalThis as unknown as { prisma: PrismaClientDb1 }
const globalForPrisma2 = globalThis as unknown as { prisma: PrismaClientDb2 }

export const prisma1 = globalForPrisma1.prisma || new PrismaClientDb1({
    log: ['info']
})
export const prisma2 = globalForPrisma2.prisma || new PrismaClientDb2({
    log: ['info']
})

if (process.env.NODE_ENV !== 'production') globalForPrisma1.prisma = prisma1
if (process.env.NODE_ENV !== 'production') globalForPrisma2.prisma = prisma2
