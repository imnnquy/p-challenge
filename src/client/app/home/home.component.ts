import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/ui.service';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  listUsers: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * ApiService.
   *
   * @param {ApiService} apiService - The injected ApiService.
   */
  constructor(private apiService: ApiService,
  private userService: UserService,
  private router: Router) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiService.getUsers().subscribe((responseInformation: any) => {
            this.listUsers = responseInformation;
            console.log(this.listUsers);
        });
  }

  goToUser(user: any) {
    this.userService.currentUser = user;
    this.userService.setCurrentUserTitle(user.login);
    this.router.navigate(['/about']);
  }

}
