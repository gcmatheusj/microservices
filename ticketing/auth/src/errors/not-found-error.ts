import { CustomError } from './custom-error';

class NotFoundError extends CustomError {
  public statusCode = 404

  constructor(){
    super('Router not found')

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: 'Not found' }]
  }
}

export default NotFoundError