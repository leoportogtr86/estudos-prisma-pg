const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    const newUser = await prisma.user.create({
        data: {
            name: "Leonardo Porto",
            email: "leo@email.com",

        }
    });

    console.log("Novo usuário: ", newUser);

    // Busca todos os usuários
    const allUsers = await prisma.user.findMany();
    console.log('Todos os usuários:', allUsers);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    })