import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import IQuery from './interfaces/IQuery';
import IFindUsersPayload from './interfaces/IFindUsersPayload';
import IUser from './interfaces/IUser';
import ICount from './interfaces/ICount';

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UsersService');
  }

  find(query: IQuery): Observable<IFindUsersPayload> {
    return this.userService.find(query);
  }

  findById(id: number): Observable<IUser> {
    return this.userService.findById(id);
  }

  findOne(query: IQuery): Observable<IUser> {
    return this.userService.findOne(query);
  }

  count(query: IQuery): Observable<ICount> {
    return this.userService.count(query);
  }

  create(createUserInput): Observable<IUser> {
    return this.userService.create(createUserInput);
  }

  update(updateUserInput): Observable<IUser> {
    return this.userService.update(updateUserInput);
  }

  destroy(query: IQuery): Observable<ICount> {
    return this.userService.destroy(query);
  }
}
