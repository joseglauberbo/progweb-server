import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

export class CreateBookController {
    async handle(request: Request, response: Response){

        const { name, code_book, price } = request.body

        const prismaClient = new PrismaClient()
        
        const book =  await prismaClient.book.create({
            data: {
                code_book,
                name,
                price
            }
        })

        return response.json(book)
    }    
}