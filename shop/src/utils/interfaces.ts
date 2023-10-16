import { Request, Response } from "express"

export interface reqRes {
    (req: Request, res: Response): Promise<void>
}