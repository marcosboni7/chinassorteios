import { prisma } from '../lib/prisma';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/User';
import UserValidator from '../validators/User.validator';

import { UseCaseResponse } from '../http/UseCaseResponse';

class UserUseCase {
  private jwt_secret: string;

  constructor() {
    this.jwt_secret = process.env.JWT_SECRET as string;
  }

  async signUpUser(user: User): Promise<UseCaseResponse> {
    if (!UserValidator.validate(user))
      return [
        {
          success: false,
          message: 'Algum dos dados inseridos são inválidos.'
        },
        400
      ];

    if (
      await prisma.user.count({
        where: {
          OR: [
            {
              email: user.email
            },
            {
              name: user.name
            }
          ]
        }
      })
    )
      return [
        {
          success: false,
          message: 'Esse email já está cadastrado.'
        },
        400
      ];


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    
    await prisma.user.create({
      data: {
        ...user,
        password: hashedPassword
      }
    });

    return [
      {
        success: true,
        message: 'Usuário cadastrado com sucesso.'
      },
      200
    ];
  }

  async signInUser({ password, email }: { password: string, email: string }): Promise<UseCaseResponse> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!user)
      return [
        {
          success: false,
          message: 'Esse usuário não existe.'
        },
        403
      ];

    const authorize = await bcrypt.compare(password, user.password);

    if (!authorize)
      return [
        {
          success: false,
          message: 'Suas credenciais estão erradas.'
        },
        403
      ];

    const token = jwt.sign({ sub: user.id }, this.jwt_secret);

    return [
      {
        success: true,
        message: 'Usuário autorizado com sucesso.',
        token
      },
      200
    ];
  }

  async isAuthorized(token: string): Promise<UseCaseResponse> {
    const decodedToken = jwt.verify(token, this.jwt_secret);

    if (!decodedToken)
      return [
        {
          success: false,
          message: 'Token invalido.'
        },
        403
      ];

    
    const userId = parseInt(decodedToken.sub as string);
    const user = await prisma.user.findFirst({
      where: {
        id: userId
      }
    });

    if (!user)
      return [
        {
          success: false,
          message: 'Token inválido.'
        },
        403
      ];

    return [
      {
        success: true,
        message: 'O token recebido é valido.',
        user
      },
      200
    ];
  }
}

export default UserUseCase;