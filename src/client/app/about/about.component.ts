import { Component } from '@angular/core';
import { UserService } from '../services/ui.service';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent { 

  currentUser: any = {};

    constructor(private userService: UserService) {
      this.currentUser = this.userService.currentUser;
    }
}
