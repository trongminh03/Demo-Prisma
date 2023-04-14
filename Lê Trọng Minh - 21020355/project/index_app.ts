import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import express from 'express';
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const allCustomers = await prisma.customers.findMany({
            include: {
                orders: true
            }
        }
    )
    res.send(allCustomers);
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)

