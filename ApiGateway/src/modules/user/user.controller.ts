import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import IQuery from './interfaces/IQuery';
import IFindUsersPayload from './interfaces/IFindUsersPayload';
import IUser from './interfaces/IUser';
import ICount from './interfaces/ICount';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  find(query: IQuery): IFindUsersPayload {
    return this.userService.find(query);
  }

  @Post()
  findById(id: number): IUser {
    return this.userService.findById(id);
  }

  @Post()
  findOne(query: IQuery): IUser {
    return this.userService.findOne(query);
  }

  @Post()
  count(query: IQuery): ICount {
    return this.userService.count(query);
  }

  @Post()
  create(createUserInput): IUser {
    return this.userService.create(createUserInput);
  }

  @Post()
  update(updateUserInput): IUser {
    return this.userService.update(updateUserInput);
  }

  @Post()
  destroy(query: IQuery): ICount {
    return this.userService.destroy(query);
  }
}
