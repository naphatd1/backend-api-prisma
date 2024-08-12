import { Express, Request, Response, NextFunction } from 'express'
import { prisma1,prisma2 } from '../database/db'

export async function indexUser( req: Request, res: Response, next: NextFunction) {
  res.status(200).json({
    message: 'Express Backend API...',
  })
}

export async function userAll(req: Request, res: Response, next: NextFunction) {
  const user = await prisma1.user.findMany()
  return res.status(200).json({
    data: user,
  })
}
export async function customerAll(req: Request, res: Response, next: NextFunction) {
  const user = await prisma2.customer.findMany()
  return res.status(200).json({
    data: user,
  })
}
