import { Component } from '@angular/core';
import { UserService } from '../../services/ui.service';
import { Router, ActivatedRoute } from '@angular/router';


/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {
  currentTitle = 'Home';
  isHome = true;
  constructor(private userService: UserService, private router: Router) {
    this.userService.notificationsStream.subscribe(notification => {
      if (notification === 'change-title') {
        this.currentTitle = userService.getCurrentUserTitle();
        if (this.currentTitle === 'Home') {
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    });
  }

  goToHome() {
    this.currentTitle = 'Home';
    this.userService.setCurrentUserTitle(this.currentTitle);
    this.router.navigate(['/']);
  }
}
