import { Express, Request, Response, NextFunction } from 'express'

export async function indexUser(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({
    message: 'Express Backend API...',
  })
}
