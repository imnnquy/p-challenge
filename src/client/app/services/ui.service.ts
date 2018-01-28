// user.service.ts
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class UserService {

  public currentUser: any = {};
  public currentUserTitle: string = "Current User";

  constructor(){}
}
