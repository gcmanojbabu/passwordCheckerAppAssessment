import { Request, Response, NextFunction } from 'express';


export function healthStatus(req: Request, res: Response, next: NextFunction) {
    console.log('inside healthController');

    res.status(200).send({ message: 'Service health is good!' });
}
