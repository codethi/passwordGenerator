import prisma from "../config/database";

async function createPasswordRepository(password: string): Promise<void> {
  await prisma.password.create({
    data: { password },
  });
}

export default {
  createPasswordRepository
};
