import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const logLevels =
  process.env.NODE_ENV === 'development'
    ? ['query', 'info', 'warn', 'error']
    : ['error'];

export const prisma =
  globalThis.prisma ??
  new PrismaClient({
    log: logLevels,
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export default prisma;
