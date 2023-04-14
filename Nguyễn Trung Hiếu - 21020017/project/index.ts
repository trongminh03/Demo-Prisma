import { PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const allCustomers = await prisma.customers.findMany({
        include: {
            orders: true
        },
        take: 5 
    })
    for(const customer of allCustomers) {
        console.log(customer)
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
