import { Express, Request, Response, NextFunction } from 'express'
import { prisma } from '../database/db'

export async function indexUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(200).json({
    message: 'Express Backend API...',
  })
}

export async function userAll(req: Request, res: Response, next: NextFunction) {
  const user = await prisma.user.findMany()
  return res.status(200).json({
    data: user,
  })
}
