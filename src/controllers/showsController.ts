import { getAllShows } from "../models/showsModel";
import { Request, Response } from 'express';

function getShows(req: Request, res: Response) {
    const shows = getAllShows()
    res.json(shows)
}

export {getShows}

