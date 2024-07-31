import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class CreateCategoriesController {
    async create(req: Request, res: Response) {
        const { name } = req.body

        const prismaClient = new PrismaClient()

        const category = await prismaClient.category.create({
            data: {
                name
            }
        })

        return res.json(category)
    }
}