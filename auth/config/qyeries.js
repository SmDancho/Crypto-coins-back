const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userByEmail = (mail) => {
  const data = prisma.user.findUnique({
    where: { email: mail },
  });
  return data;
};
const userById = (userId) => {
  const data = prisma.user.findFirst({
    where: { id: userId },
  });
  return data;
};
const createUser = (name, email, password) => {
  const data = prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return data;
};

module.exports = { userByEmail, createUser, userById };
