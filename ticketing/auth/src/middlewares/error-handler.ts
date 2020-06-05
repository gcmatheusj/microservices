import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if(error instanceof CustomError) {
    return res.status(error.statusCode).send({ errors: error.serializeErrors() })
  }
  
  return res.status(400).send({
    errors: [{
      message: 'Something went wrong'
    }]
  })
}

export default errorHandler