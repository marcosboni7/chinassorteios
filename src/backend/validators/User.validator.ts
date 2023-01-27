import validator from 'email-validator';
import User from '../models/User';

class UserValidator {
  constructor () {}

  static validate({ name, email, password }: User): boolean {
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof password !== 'string'
    )
      return false;

    if (!validator.validate(email))
      return false;

    return true;
  }
}

export default UserValidator;