import { CustomError } from './custom-error'

export class DatabaseConnectionError extends CustomError {
  public statusCode = 500
  public reason = 'Error connecting database'

  constructor(){
    super('Error connecting database')

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}