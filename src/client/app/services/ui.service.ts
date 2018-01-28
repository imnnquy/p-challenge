// user.service.ts
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  public notificationsStream = new Subject<string>();

  public currentUser: any = {};
  public currentUserTitle: string = "Current User";

  constructor(){}

  setCurrentUserTitle(newTitle: string) {
      this.currentUserTitle = newTitle;
      this.notificationsStream.next("change-title");
  }

  getCurrentUserTitle() {
    return this.currentUserTitle;
  }
}
