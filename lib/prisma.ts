import { PrismaClient } from '@prisma/client';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Check if we're in a build environment
const isBuildTime = process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build';

// Create a mock Prisma client for build time
class MockPrismaClient {
  joke = {
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({}),
    update: async () => ({}),
  };
}

// Create a singleton instance of PrismaClient
let prisma: PrismaClient;

if (isBuildTime) {
  // Use mock client during build
  prisma = new MockPrismaClient() as unknown as PrismaClient;
} else if (process.env.NODE_ENV === 'production') {
  // Use real client in production
  prisma = new PrismaClient();
} else {
  // Use cached client in development
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      log: ['query'],
    });
  }
  prisma = globalForPrisma.prisma;
}

export { prisma };